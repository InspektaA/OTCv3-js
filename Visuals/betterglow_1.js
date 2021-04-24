var mats = []
var subtab = ["Visuals", "SUBTAB_MGR", "Better Glow", "Better Glow"]
UI.AddSubTab(["Visuals", "SUBTAB_MGR"], "Better Glow")
var editor_array = []

function makemat(name) {
    Material.Create(name)
    editor_array.push(name)
    mats.push({
        mat_name: name,
        ui_array: subtab.concat(name),
        ui_color: subtab.concat(name + " col"),
        update: true,
        update_color: true,
        first: true
    })
}
function lerp(a, b, c) {
    return (b - a) * c + a
}
function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return [
        Math.round(r * 255),
        Math.round(g * 255),
        Math.round(b * 255),
        255
    ]
}
function material() {
    for (i in mats) {
        var mat = Material.Get(mats[i].mat_name)
        var ui = UI.GetValue(mats[i].ui_array)
        var refresh = false
        if (mats[i].first) {
            mats[i].first = false
            Material.SetKeyValue(mat, "$basetexture", "vgui/white")
            Material.SetKeyValue(mat, "$envmap", "models/effects/cube_white")
            Material.SetKeyValue(mat, "$envmapfresnel", "1")
            refresh = true
        }
        if (mats[i].update) {
            mats[i].update = false
            Material.SetKeyValue(mat, "$additive", (ui & 1) ? "1" : "0")
            Material.SetKeyValue(mat, "$wireframe", (ui & 2) ? "1" : "0")
            refresh = true
        }
        if (mats[i].update_color) {
            mats[i].update_color = false
            var uicol = UI.GetColor(mats[i].ui_color)
            if (ui & 4) {
                var hsv = HSVtoRGB(Globals.Realtime() * UI.GetValue(subtab.concat(mats[i].mat_name + " rainbow speed")) * 2 % 1, 1, 1)
                uicol = [hsv[0], hsv[1], hsv[2], uicol[3]]
            }
            Material.SetKeyValue(mat, "$envmaptint", "[" + uicol[0] / 255 + " " + uicol[1] / 255 + " " + uicol[2] / 255 + "]")
            var alpha_fraction = uicol[3] / 255
            if (ui & 8) {
                alpha_fraction += (Math.sin(Globals.Realtime() * UI.GetValue(subtab.concat(mats[i].mat_name + " pulse speed")) * 20) + 1) * UI.GetValue(subtab.concat(mats[i].mat_name + " pulse strength"))
            }
            if (alpha_fraction > 1)
                alpha_fraction = 1
            var first = lerp(12, 1, alpha_fraction)
            var second = lerp(24, 2, alpha_fraction)
            Material.SetKeyValue(mat, "$envmapfresnelminmaxexp", "[0 " + first + " " + second + "]")
            refresh = true
        }
        if (refresh)
            Material.Refresh(mat)
    }
}
function unload() {
    for (i in mats)
        Material.Destroy(mats[i].mat_name)
}
var lasttime = 0
var last_ui_values = {}
var last_ui_colors = {}
var last_editor_value = -1
var last_current_mat_settings = []
function render() {
    // update every 16.6666667 ms to save some fps :)
    var time = Globals.Realtime()
    if (time - lasttime > (16.6666667) / 1000) {
        for (i in mats) {
            var ui_value = UI.GetValue(mats[i].ui_array)
            var ui_col = UI.GetColor(mats[i].ui_color)
            if (ui_value & 4 || ui_value & 8 || ui_value & 16)
                mats[i].update_color = true
            if (last_ui_values[mats[i].mat_name] == null)
                last_ui_values[mats[i].mat_name] = ui_value
                
            if (last_ui_colors[mats[i].mat_name] == null)
                last_ui_colors[mats[i].mat_name] = ui_col
            if (last_ui_values[mats[i].mat_name] != ui_value) {
                last_ui_values[mats[i].mat_name] = ui_value
                mats[i].update = true
            }
            if (last_ui_colors[mats[i].mat_name][0] != ui_col[0] ||
                last_ui_colors[mats[i].mat_name][1] != ui_col[1] ||
                last_ui_colors[mats[i].mat_name][2] != ui_col[2] ||
                last_ui_colors[mats[i].mat_name][3] != ui_col[3]) {
                last_ui_colors = ui_col
                mats[i].update_color = true
            }
        }
        var editor_value = UI.GetValue(subtab.concat("Editor"))
        var current_mat_settings = UI.GetValue(mats[editor_value].ui_array)
        if (last_current_mat_settings[editor_value] == null)
            last_current_mat_settings[editor_value] = -1
        if (editor_value != last_editor_value || last_current_mat_settings[editor_value] != current_mat_settings) {
            last_current_mat_settings[editor_value] = current_mat_settings
            last_editor_value = editor_value
            var mat = mats[editor_value]
            UI.SetEnabled(mat.ui_array, 1)
            UI.SetEnabled(subtab.concat(mat.mat_name + " col"), 1)
            UI.SetEnabled(subtab.concat(mat.mat_name + " rainbow speed"), current_mat_settings & 4)
            UI.SetEnabled(subtab.concat(mat.mat_name + " pulse speed"), current_mat_settings & 8)
            UI.SetEnabled(subtab.concat(mat.mat_name + " pulse strength"), current_mat_settings & 8)
            for (i in mats) {
                if (mats[i].mat_name == mat.mat_name)
                    continue
                UI.SetEnabled(mats[i].ui_array, 0)
                UI.SetEnabled(subtab.concat(mats[i].mat_name + " col"), 0)
                UI.SetEnabled(subtab.concat(mats[i].mat_name + " rainbow speed"), 0)
                UI.SetEnabled(subtab.concat(mats[i].mat_name + " pulse speed"), 0)
                UI.SetEnabled(subtab.concat(mats[i].mat_name + " pulse strength"), 0)
            }
        }
    }
}
var first_load = true
function cm() {
    if (first_load) {
        for (i in mats) {
            mats[i].first = true
        }
        first_load = false
    }
}
makemat("Better Glow")

UI.AddDropdown(subtab, "Editor", editor_array, 0)
for (i in mats) {
    var name = mats[i].mat_name
    UI.AddMultiDropdown(subtab, name, ["Additive", "Wireframe", "Rainbow", "Pulse"])
    UI.AddColorPicker(subtab, name + " col")
    UI.AddSliderFloat(subtab, name + " rainbow speed", 0, 2)
    UI.AddSliderFloat(subtab, name + " pulse speed", 0, 1)
    UI.AddSliderFloat(subtab, name + " pulse strength", 0, 1)
}
Cheat.RegisterCallback("CreateMove", "cm")
Cheat.RegisterCallback("Draw", "render")
Cheat.RegisterCallback("Unload", "unload")
Cheat.RegisterCallback("Material", "material")