UI.AddSubTab(["Config", "SUBTAB_MGR"], "Logs");
UI.AddCheckbox(["Config", "Logs", "Logs"], "Hit Logs");
UI.AddCheckbox(["Config", "Logs", "Logs"], "Buy Logs");
var logs = [];
var logsct = [];
var logsalpha = [];
var shots = 0;

hitboxes = [
    'general',
    'head',
    'chest',
    'stomach',
    'left arm',
    'right arm',
    'left leg',
    'right leg',
    '?'
];

function getHitboxName(index) {
    switch (index) {
        case 0:
            hitboxName = "general";
            break;
        case 1:
            hitboxName = "head";
            break;
        case 2:
            hitboxName = "chest";
            break;
        case 3:
            hitboxName = "stomach";
            break;
        case 4:
            hitboxName = "left hand";
            break;
        case 5:
            hitboxName = "right hand";
            break;
        case 6:
            hitboxName = "left leg";
            break;
        case 7:
            hitboxName = "right leg";
            break;

    }
    return hitboxName;
}

function HitgroupName(index) {
    return hitboxes[index] || 'body';
}

//Hit Logs

function hurt() {
    if (UI.GetValue(["Config", "Logs", "Logs", "Hit Logs"])) {
        var attacker = Event.GetInt("attacker");
        var player = Entity.GetEntityFromUserID(Event.GetInt("userid"));
        var weapon = Event.GetString("weapon");
        var health = Event.GetInt("dmg_health");
        var hitbox = Event.GetString("hitgroup");
        var hp = Event.GetInt("health");
        var name = Entity.GetName(player);
        var bone = HitgroupName(hitbox);

        if (Entity.IsLocalPlayer(Entity.GetEntityFromUserID(attacker))) {

            Cheat.PrintColor([180, 230, 20, 0], '[onetap] ')
            Cheat.PrintColor([255, 255, 255, 255], '[' + shots.toString() + '] Hit ' + name + ' in the ' + bone + ' for ' + health + ' damage' + ' (' + hp + ' health remaining)\n')
            logs.push('[' + shots.toString() + '] Hit ' + name + ' in the ' + bone + ' for ' + health + ' damage' + ' (' + hp + ' health remaining)');
            logsct.push(Globals.Curtime());
            logsalpha.push(255);

            if (shots == 99)
                shots = 0;
            else
                shots++;
        }


    }


}

//Buy Logs

function BuyLogs() {
    if (UI.GetValue(["Config", "Logs", "Logs", "Buy Logs"])) {
        var ent = Entity.GetEntityFromUserID(Event.GetInt('userid'))
        var team = Event.GetInt('team')
        if (team != Entity.GetProp(Entity.GetLocalPlayer(), "CBaseEntity", "m_iTeamNum")) {
            var item = Event.GetString('weapon')
            item = item.replace("weapon_", "")
            item = item.replace("item_", "")
            item = item.replace("assaultsuit", "kevlar + helmet")
            item = item.replace("incgrenade", "molotov")
            if (item != "unknown") {
                var name = Entity.GetName(ent)
                Cheat.PrintColor([180, 230, 20, 0], '[onetap] ')
                Cheat.PrintColor([255, 255, 255, 255], name + ' bought ' + item + ' \n')
                logs.push(name + ' bought ' + item);
                logsct.push(Globals.Curtime());
                logsalpha.push(255);
            }
        }
    }
}

function removelogs() {
    if (logs.length > 10) {
        logs.shift();
        logsct.shift();
        logsalpha.shift();
    }

    if (logsct[0] + 6.5 < Globals.Curtime()) {
        logsalpha[0] -= Globals.Frametime() * 600;
        if (logsalpha[0] < 0) {
            logs.shift();
            logsct.shift();
            logsalpha.shift();
        }
    }
}

function onDraw() {
    if (!World.GetServerString()) return;
    var font = Render.AddFont("consola.ttf", 12, 400);


    for (i = 0; i < logs.length; i++) {
        Render.String(4, 9 + 13 * i, 0, logs[i], [0, 0, 0, logsalpha[i]], font);
        Render.String(3, 8 + 13 * i, 0, logs[i], [255, 255, 255, logsalpha[i]], font);
    }
}

Global.RegisterCallback("Draw", "onDraw");
Cheat.RegisterCallback("player_hurt", "hurt");
Global.RegisterCallback("item_purchase", "BuyLogs");
Global.RegisterCallback("Draw", "removelogs");