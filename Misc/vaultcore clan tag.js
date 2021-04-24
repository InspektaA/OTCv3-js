UI.AddLabel("---------------------------");
UI.AddLabel(" Made by Jash ");
UI.AddDropdown("Clantag", ["Disabled", "VAULTCORE"]);
UI.AddSliderInt("Speed", 1, 15);
UI.AddLabel("---------------------------");

var lasttime = 0;

function onRender()
{
    var tag = UI.GetValue("Script items", "Clantag");
    var speed = UI.GetValue("Script items", "Speed");
    var custom = UI.GetValue("Script items", "Clantag");
    var time = parseInt((Globals.Curtime() * speed))
    var gtime = parseInt((Globals.Curtime() * 2));
    if (time != lasttime)
    {
        if (tag == 0)
        {
            return
        }
        if (tag == 1)
        {
            switch ((time) % 102)
{
case 0:Local.SetClanTag(" [&]");break;
case 1: Local.SetClanTag(" [.]"); break;
case 2: Local.SetClanTag(" [s] "); break;
case 3: Local.SetClanTag(" [u]"); break;
case 4: Local.SetClanTag(" [V]"); break;
case 5: Local.SetClanTag(" [V]"); break;
case 6: Local.SetClanTag(" [V]"); break;
case 7: Local.SetClanTag(" [Vh]"); break;
case 8: Local.SetClanTag(" [V*]"); break;
case 9: Local.SetClanTag(" [Ve]"); break;
case 10: Local.SetClanTag(" [Va]"); break;
case 11: Local.SetClanTag(" [Va]"); break;
case 12: Local.SetClanTag(" [Va]"); break;
case 13: Local.SetClanTag(" [Va2]"); break;
case 14: Local.SetClanTag(" [Va3]"); break;
case 15: Local.SetClanTag(" [Vas]"); break;
case 16: Local.SetClanTag(" [Vau]"); break;
case 17: Local.SetClanTag(" [Vau]"); break;
case 18: Local.SetClanTag(" [Vau]"); break;
case 19: Local.SetClanTag(" [Vacn]"); break;
case 20: Local.SetClanTag(" [Vact]"); break;
case 21: Local.SetClanTag(" [Vac&] "); break;
case 22: Local.SetClanTag(" [Vaul]"); break;
case 23: Local.SetClanTag(" [Vaul]"); break;
case 24: Local.SetClanTag(" [Vaul]"); break;
case 25: Local.SetClanTag(" [Vaulj]"); break;
case 26: Local.SetClanTag(" [Vaulc]"); break;
case 27: Local.SetClanTag(" [Vaulz]"); break;
case 28: Local.SetClanTag(" [Vaulci]"); break;
case 29: Local.SetClanTag(" [Vaultn]"); break;
case 30: Local.SetClanTag(" [Vaultz]"); break;
case 31: Local.SetClanTag(" [Vaultn]"); break;
case 32: Local.SetClanTag(" [Vaultc]"); break;
case 33: Local.SetClanTag(" [Vaultc]"); break;
case 34: Local.SetClanTag(" [Vaultco.]"); break;
case 35: Local.SetClanTag(" [Vaultco.]"); break;
case 36: Local.SetClanTag(" [Vaultcor.]"); break;
case 37: Local.SetClanTag(" [Vaultcor]"); break;
case 38: Local.SetClanTag(" [Vaultcore]"); break;
case 39: Local.SetClanTag(" [Vaultcore]"); break;
case 40: Local.SetClanTag(" [Vaultcore]"); break;
case 41: Local.SetClanTag(" [Vaultcore.C]"); break;
case 42: Local.SetClanTag(" [Vaultcore.C]"); break;
case 43: Local.SetClanTag(" [Vaultcore.C1]"); break;
case 44: Local.SetClanTag(" [Vaultcore.Cn]"); break;
case 45: Local.SetClanTag(" [Vaultcore.Cq]"); break;
case 46: Local.SetClanTag(" [Vaultcore.C5]"); break;
case 47: Local.SetClanTag(" [Vaultcore.C5]"); break;
case 48: Local.SetClanTag(" [Vaultcore.CT]"); break;
case 49: Local.SetClanTag(" [Vaultcore.Cg]"); break;
case 50: Local.SetClanTag(" [Vaultcore.Cz]"); break;
case 51: Local.SetClanTag(" [Vaultcore.C9]"); break;
case 52: Local.SetClanTag(" [Vaultcore.CC]"); break;
case 53: Local.SetClanTag(" [Vaultcore.CC]"); break;
case 54: Local.SetClanTag(" [Vaultcore.CC]"); break;
case 55: Local.SetClanTag(" [Vaultcore.Ca]"); break;
case 56: Local.SetClanTag(" [Vaultcore.C5]"); break;
case 57: Local.SetClanTag(" [Vaultcore.CTm]"); break;
case 58: Local.SetClanTag(" [Vaultcore.C,]"); break;
case 59: Local.SetClanTag(" [Vaultcore.C2]"); break;
case 60: Local.SetClanTag(" [Vaultcore.Cq]"); break;
case 61: Local.SetClanTag(" [Vaultcore.g]"); break;
case 62: Local.SetClanTag(" [Vaultcore.y]"); break;
case 63: Local.SetClanTag(" [Vaultcore.4]"); break;
case 64: Local.SetClanTag(" [Vaultcore&]"); break;
case 65: Local.SetClanTag(" [Vaultcorej]"); break;
case 66: Local.SetClanTag(" [Vaultcore2]"); break;
case 67: Local.SetClanTag(" [Vaultcored]"); break;
case 68: Local.SetClanTag(" [Vaultcory]"); break;
case 69: Local.SetClanTag(" [Vaultcor&]"); break;
case 70: Local.SetClanTag(" [Vaultcor4]"); break;
case 71: Local.SetClanTag(" [Vaultcob]"); break;
case 72: Local.SetClanTag(" [Vaultco7]"); break;
case 73: Local.SetClanTag(" [Vaultcoz]"); break;
case 74: Local.SetClanTag(" [Vaultc6]"); break;
case 75: Local.SetClanTag(" [Vaultcg]"); break;
case 76: Local.SetClanTag(" [Vaultc&]"); break;
case 77: Local.SetClanTag(" [Vault?]"); break;
case 78: Local.SetClanTag(" [Vault9]"); break;
case 79: Local.SetClanTag(" [Vaultp]"); break;
case 80: Local.SetClanTag(" [Vaulz]"); break;
case 81: Local.SetClanTag(" [Vaulc]"); break;
case 82: Local.SetClanTag(" [Vaulj]"); break;
case 83: Local.SetClanTag(" [Vaul]"); break;
case 84: Local.SetClanTag(" [Vaul]"); break;
case 85: Local.SetClanTag(" [Vaul]"); break;
case 86: Local.SetClanTag(" [Vac&] "); break;
case 87: Local.SetClanTag(" [Vact]"); break;
case 88: Local.SetClanTag(" [Vacn]"); break;
case 89: Local.SetClanTag(" [Vau]"); break;
case 90: Local.SetClanTag(" [Vau]"); break;
case 91: Local.SetClanTag(" [Vau]"); break;
case 92: Local.SetClanTag(" [Vas]"); break;
case 93: Local.SetClanTag(" [Va3]"); break;
case 94: Local.SetClanTag(" [Va2]"); break;
case 95: Local.SetClanTag(" [Va]"); break;
case 96: Local.SetClanTag(" [Va]"); break;
case 97: Local.SetClanTag(" [Va]"); break;
case 98: Local.SetClanTag(" [Ve]"); break;
case 99: Local.SetClanTag(" [V*]"); break;
case 100: Local.SetClanTag(" [Vh]"); break;
case 101: Local.SetClanTag(" [V]"); break;
case 102: Local.SetClanTag(" [V]"); break;
case 103: Local.SetClanTag(" [V/]"); break;
case 104: Local.SetClanTag(" [a]"); break;
case 105: Local.SetClanTag(" [j]"); break;
case 106: Local.SetClanTag(" [l]"); break;
case 107: Local.SetClanTag(" []"); break;
}
}
}
lasttime = time;
}
Cheat.RegisterCallback("Draw", "onRender");