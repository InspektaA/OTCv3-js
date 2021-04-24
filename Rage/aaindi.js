var screen_size = Render.GetScreenSize();
 
UI.AddSubTab(["Visuals", "SUBTAB_MGR"], "Fake indicator");
 
var path = ["Visuals", "SUBTAB_MGR", "Fake indicator", "SHEET_MGR", "Fake indicator"]
 
UI.AddCheckbox(path, "Indicator");
UI.AddColorPicker(path, "Indicator color");
 
function draw() {
    local = Entity.GetLocalPlayer();
 
    font = Render.AddFont("Verdana", 10, 400);
 
    x = screen_size[0];
    y = screen_size[1];
 
    col = UI.GetColor(["Visuals", "SUBTAB_MGR", "Fake indicator", "SHEET_MGR", "Fake indicator", "Indicator color"]);
 
    real_yaw = Local.GetRealYaw();
    fake_yaw = Local.GetFakeYaw();
    delta = Math.min(Math.abs(real_yaw - fake_yaw) / 2, 60).toFixed(0);
 
    delta_size = Render.TextSize(delta, font);
 
    if (UI.GetValue(["Visuals", "SUBTAB_MGR", "Fake indicator", "SHEET_MGR", "Fake indicator", "Indicator"]) == 1) {
        if (Entity.IsValid(local)) {
            if (Entity.IsAlive(local)) {
                Render.String(x / 2, y / 2 + 20, 1, delta, [255, 255, 255, 255], font);
                Render.Circle(x / 2 + delta_size[0] + 2, y / 2 + 25, 2, [255, 255, 255, 255])
                Render.GradientRect(x / 2, y / 2 + 40, (125 / 60) * delta, 5, 1, col, [0, 0, 0, 0]);
                Render.GradientRect(x / 2 - (125 / 60) * delta + 1, y / 2 + 40, (125 / 60) * delta, 5, 1, [0, 0, 0, 0], col);
            }
        }
    }
}
 
Cheat.RegisterCallback("Draw", "draw");