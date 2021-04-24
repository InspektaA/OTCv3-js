
UI.AddLabel("========Slow-Walk========");
UI.AddCheckbox("Enabled");
UI.AddSliderInt("Body Yaw", -180, 180);
UI.AddDropdown("Jitter Type", ["Offset","Random"]);
UI.AddSliderInt("Jitter", -180, 180);
UI.AddSliderInt("Desync Limit", -60, 60);
UI.AddSliderInt("Slow-Walk Speed", 0, 135);
UI.AddHotkey("Slow-walk");
function getVal(valName) {return UI.GetValue("Misc", "JAVASCRIPT", "Script items", valName);}

function Slow() {
var yawslow=UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Body Yaw");
  var enabled = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enabled");
    if(enabled == 1) {
    if (!UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Slow-walk")) return;
      AntiAim.SetOverride(1);
      UI.SetValue("Anti-Aim", "Rage Anti-Aim","Yaw offset",yawslow);
     AntiAim.SetRealOffset(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Desync Limit"));
     AntiAim.SetLBYOffset(UI.GetValue("Misc", "JAVASCRIPT", "Script items", 0 ));

}
   var enableds = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Jitter Type");
var jtr=UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Jitter");
    if(enableds == 0) {

UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset",jtr);
}
else if(enableds == 1) {

UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset",Math.floor(Math.random() * jtr));
}
}

function slowspeed() {
     if (!UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Slow-walk")) return;
     speed = getVal("Slow-Walk Speed");
    fSpeed = speed;
    bSpeed = speed;
    sSpeed = speed;

    if (getVal("Individual speeds:")) {
        fSpeed = getVal("Forward Speed:");
        bSpeed = getVal("Back Speed:");
        sSpeed = getVal("Side Speed:");
    }

    dir = [0, 0, 0];

    if (Input.IsKeyPressed(0x57)) {
        
        dir[0] += fSpeed;
    }
    if (Input.IsKeyPressed(0x44)) {
   
        dir[1] += sSpeed;
    }
    if (Input.IsKeyPressed(0x41)) {
     
        dir[1] -= sSpeed;
    }
    if (Input.IsKeyPressed(0x53)) {
       
        dir[0] -= bSpeed;
    }

    UserCMD.SetMovement(dir);
}

function normalaa() {
 if(!UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Slow-walk")) {
      AntiAim.SetOverride(0);
}
else {
 AntiAim.SetOverride(1);
}
}






Cheat.RegisterCallback("CreateMove", "Slow");
Cheat.RegisterCallback("CreateMove", "slowspeed");
Cheat.RegisterCallback("CreateMove", "normalaa");

