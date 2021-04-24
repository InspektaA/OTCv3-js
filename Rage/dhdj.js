UI.AddLabel("IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
UI.AddLabel("You have enabled dhdj's script")
UI.AddCheckbox("Enable dhdj's Anti-Aim");
UI.AddCheckbox("Enable dhdj's Clantag");
UI.AddCheckbox("Enable dhdj's Randomness");
UI.AddCheckbox("Enable dhdj's Reply Bot");
UI.AddCheckbox("Enable dhdj's Slow walk");
UI.AddCheckbox("Enable dhdj's Fakelag");
UI.AddCheckbox("Enable dhdj's Auto Mindmg");
UI.AddCheckbox("Enable HVH Fakelag Mode");
UI.AddCheckbox("Enable Fast duck");
UI.AddCheckbox("Enable Logging");
UI.AddLabel("IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
UI.AddLabel("UI Settings")
UI.AddColorPicker("UI Color")
UI.AddLabel("IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
UI.AddLabel("Anti-Aim & Randomness Settings")
UI.AddCheckbox("Disable Anti-Aim On Round End");
UI.AddCheckbox("Disable Anti-Aim When No Enemy");
//20 40
UI.AddSliderInt( "Max Yaw", 0, 360 );
UI.AddSliderInt( "Max Jitter", 0, 360 );
//40 80
UI.AddSliderInt( "Min LBY", 0, 90 );
UI.AddSliderInt( "Max LBY", 0, 90 );
UI.AddLabel("IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
UI.AddLabel("Inverter Setting")
UI.AddCheckbox("Enable dhdj's Anti Bruteforce");
UI.AddCheckbox("Enable Invert On Shot");
UI.AddCheckbox("Enable Invert On Slowwalk");
UI.AddCheckbox("Enable Invert On Hurt");
UI.AddCheckbox("Enable Invert On Enemy Fire");
UI.AddSliderInt( "Inverter Interval", 1, 20 );
UI.AddLabel("IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
UI.AddLabel("Wall Damage Setting")
UI.AddSliderInt( "General Wall Damage", 0, 130 );
UI.AddSliderInt( "Pistol Wall Damage", 0, 130 );
UI.AddSliderInt( "Heavy Pistol Wall Damage", 0, 130 );
UI.AddSliderInt( "Scout Wall Damage", 0, 130 );
UI.AddSliderInt( "AWP Wall Damage", 0, 130 );
UI.AddSliderInt( "Autosniper Wall Damage", 0, 130 );
UI.AddLabel("IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
UI.AddLabel("Normal Damage Setting")
UI.AddSliderInt( "General Normal Damage", 0, 130 );
UI.AddSliderInt( "Pistol Normal Damage", 0, 130 );
UI.AddSliderInt( "Heavy Pistol Normal Damage", 0, 130 );
UI.AddSliderInt( "Scout Normal Damage", 0, 130 );
UI.AddSliderInt( "AWP Normal Damage", 0, 130 );
UI.AddSliderInt( "Autosniper Normal Damage", 0, 130 );
UI.AddLabel("IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
UI.AddLabel("Minimal Damage Setting")
UI.AddSliderInt( "General Minimal Damage", 0, 130 );
UI.AddSliderInt( "Pistol Minimal Damage", 0, 130 );
UI.AddSliderInt( "Heavy Pistol Minimal Damage", 0, 130 );
UI.AddSliderInt( "Scout Minimal Damage", 0, 130 );
UI.AddSliderInt( "AWP Minimal Damage", 0, 130 );
UI.AddSliderInt( "Autosniper Minimal Damage", 0, 130 );
UI.AddLabel("IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
UI.AddLabel("Normal Hitchance Setting")
UI.AddSliderInt( "General Normal Hitchance", 0, 100 );
UI.AddSliderInt( "Pistol Normal Hitchance", 0, 100 );
UI.AddSliderInt( "Heavy Pistol Normal Hitchance", 0, 100 );
UI.AddSliderInt( "Scout Normal Hitchance", 0, 100 );
UI.AddSliderInt( "AWP Normal Hitchance", 0, 100 );
UI.AddSliderInt( "Autosniper Normal Hitchance", 0, 100 );
UI.AddLabel("IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
UI.AddLabel("Minimal Hitchance Setting")
UI.AddSliderInt( "General Minimal Hitchance", 0, 100 );
UI.AddSliderInt( "Pistol Minimal Hitchance", 0, 100 );
UI.AddSliderInt( "Heavy Pistol Minimal Hitchance", 0, 100 );
UI.AddSliderInt( "Scout Minimal Hitchance", 0, 100 );
UI.AddSliderInt( "AWP Minimal Hitchance", 0, 100 );
UI.AddSliderInt( "Autosniper Minimal Hitchance", 0, 100 );
UI.AddLabel("IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
UI.AddLabel("Keybinds")
UI.AddHotkey("Smart Peek")
UI.AddHotkey("Minimum Damage")
UI.AddHotkey("Minimum Accuracy")
UI.AddHotkey("YOLO");
UI.AddHotkey("Inverter")
UI.AddHotkey( "Fake Duck" );
UI.AddLabel("IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
UI.AddLabel("EXPERIMENTAL FEATURE: ")
UI.AddLabel("DO NOT TRY THIS")
UI.AddLabel("WITH YOUR MAIN CONFIG")
UI.AddCheckbox("Enable dhdj's Dynamic Multipoint");
UI.AddLabel("DO NOT SAVE YOUR CONFIG")
UI.AddLabel("IF YOU HAVE ONCE TURNED")
UI.AddLabel("THIS FEATURE ON")
UI.AddLabel("IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions", 0)
UI.SetValue("Anti-Aim", "Fake angles", "Hide real angle", true)
UI.SetValue("Anti-Aim", "Extra", "Pitch", 1)
var aa=true
var angle = 0
var pos = 1
var count = 0
var dir=0
var basedir=0
var invert=0
var ragebot_fired = 0
var direction = [0, 0, 0]
var hitbox_pos = [0,0,0]
var previous_target = 1
var accuracy=100
var last_target=0
var multi_hitbox=0
var players={}
var resolvers={}
var default_resolver=0
var shot_start={}
var shot_end={}
var should_control=true
var default_multi={"GENERAL": [0,0],"PISTOL": [0,0],"HEAVY PISTOL": [0,0],"SCOUT": [0,0],"AWP":[0,0],"AUTOSNIPER":[0,0]}
var clantag = ["☠","☠☠","☠o","☠o☠","☠on","☠on☠","☠one☠","☠onet","☠onet☠","☠oneta","☠oneta☠","☠onetap","☠onetap☠","☣onetap☣","☠onetap☠","☣onetap☣","☠onetap☠","☣onetap☣","☠onetap☠","☣onetap☣","☛onetap☚","☠onetap☠","☣onetap☣","☛onetap☚","☠onetap☠","☣onetap☣","☛onetap☚","☠onetap☠","☣onetap☣","☛onetap☚","★onetap★","★onetap★","★onetap★","★onetap★","★onetap★","★onetap★","★onetap★","★onetap★","★onetap","★oneta","★onet","★one","★on","★o","★","★","★","★","☠","☠","☠","☠","☠"]
var left=false
var damage_mode="NORMAL"
var screen_size = Global.GetScreenSize()

function onCreateMove() {
	target = Ragebot.GetTarget()
	if(target!=0){
		last_target = target
	}
	var buttons = UserCMD.GetButtons();
	if(UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items", "Fake Duck" )) {
			should_control=false
			if(Globals.Tickcount()%14>=7){
				UserCMD.SetButtons(buttons | (1 << 22))
			}else{
				UserCMD.SetButtons(buttons | (1 << 2));
			}
			if(Globals.Tickcount()%14==6){
				UserCMD.Send()
			}else{
				UserCMD.Choke()
			}
    } else if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable Fast duck")){
		UserCMD.SetButtons(buttons | (1 << 22))
		should_control=true
    }else{
		should_control=true
	}
	
	if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Disable Anti-Aim When No Enemy")){
	enemies = Entity.GetEnemies();
	shouldenableaa=false
    for (i=0; i < enemies.length; i++)
    {
		if(Entity.IsAlive(enemies[i]) && !Entity.IsDormant(enemies[i])){
			shouldenableaa=true
		}
    }
	if(shouldenableaa){
		aa=1
	}else{
		aa=0
		should_control=false
	}
	}
	
	
	//I have no idea why I named this variable "angle"
	angle++
	//basically, for 1/2 of the time the fake angle is on the right and for the other half the fake angle is on the left.
	if (ragebot_fired > 0) {
		ragebot_fired--;
		if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable dhdj's Fakelag")){
			Choke()
		}
		if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable dhdj's Anti-Aim")){
			AntiAim.SetLBYOffset(Math.ceil((Math.random() - 0.5) * 360));
		}
		if(Input.IsKeyPressed(0x46) && (Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer())) == "ssg 08" || Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer())) == "awp")){
			//UserCMD.Choke()
			//UserCMD.SetMovement( [ -1*direction[0], -1*direction[1], 0 ] )
		}
	} else{
		if(Input.IsKeyPressed(0x46)){
			direction=UserCMD.GetMovement()
		}
	}
	//reset the angle to 0 every 6 ticks and apply random fakelag & jitter
	if (angle == 6) {
		if(UI.IsHotkeyActive( "Rage", "GENERAL",	 "General","Resolver override")) UI.ToggleHotkey("Rage", "GENERAL",	 "General","Resolver override")
		//UI.ToggleHotkey("Rage", "GENERAL", "General","Resolver override")
		//Cheat.PrintChat(UI.IsHotkeyActive( "Rage", "GENERAL", "General","Resolver override" )+"\n")
		if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable dhdj's Anti-Aim")){
			if(aa){
			AntiAim.SetOverride(1)
			UI.SetValue("Anti-Aim", "Rage Anti-Aim", "At targets",true)
			}else{
			AntiAim.SetOverride(0)
			}
			UI.SetValue("Anti-Aim", "Extra", "Pitch", 1)
			if(UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Inverter")){
			basedir=-Math.ceil(Math.random() * 20)
			AntiAim.SetFakeOffset(0)
			AntiAim.SetRealOffset(-40+basedir)
			AntiAim.SetLBYOffset(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Min LBY")+Math.ceil(Math.random() * (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Max LBY")-UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Min LBY"))))
			}else{
			basedir=Math.ceil(Math.random() * 20)
			AntiAim.SetFakeOffset(0)
			AntiAim.SetRealOffset(40+basedir)
			AntiAim.SetLBYOffset(-UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Min LBY")-Math.ceil(Math.random() * (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Max LBY")-UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Min LBY"))))
			}
		}else{
			AntiAim.SetOverride(0)
		}
		if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable dhdj's Randomness")){
			UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", -basedir+Math.ceil((Math.random() - 0.5) * UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Max Yaw")));
			UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", Math.ceil((Math.random() - 0.5) * UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Max Jitter")));
		}
		if(!aa){
		UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset",180)
		UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset",0)
		UI.SetValue("Anti-Aim", "Extra", "Pitch", 0)
		UI.SetValue("Anti-Aim", "Rage Anti-Aim", "At targets",false)
		}
		angle = 0;
	}


	//check if the target is slow-walking
	if (GetVelocity(target) <= 90 && GetVelocity(target) >= 20) {
		PrintChat("[dhdj]: "+"Slow-Walking Target: " + GetVelocity(target) + "\n");
		
		if(hitbox_pos==Entity.GetHitboxPosition( target, 11 )){
			RageBot.IgnoreTarget(target)
		}else{
			Choke()
		hitbox_pos = Entity.GetHitboxPosition( target, 11 )
		//I dunno what this does but it works
		Ragebot.ForceHitboxSafety(0)
		Ragebot.ForceTargetSafety(target)
		//if using a scout, set the hitchance to 99 and mindmg to 80 (avoid misses)
		if (Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer())) == "ssg 08") {
			PrintChat("[dhdj]: "+"Using a scout, setting max hitchance" + "\n")
			if(!UI.IsHotkeyActive( "Rage", "GENERAL",	 "General","Resolver override")) UI.ToggleHotkey("Rage", "GENERAL",	 "General","Resolver override")
			Ragebot.ForceTargetHitchance(target, 99)
			if (Entity.GetProp(target, "CBasePlayer", "m_iHealth") < 99 && Entity.GetProp(target, "CBasePlayer", "m_iHealth") > 0) {
				Ragebot.ForceTargetMinimumDamage(target, Entity.GetProp(target, "CBasePlayer", "m_iHealth") + 1)
				PrintChat("[dhdj]: "+"Low-Health Slow-Walking Target: " + Entity.GetProp(target, "CBasePlayer", "m_iHealth") + "\n")
			} else {
				Ragebot.ForceTargetMinimumDamage(target, 99)
			}
		}
		}
	}
	
	if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable dhdj's Slow walk")){
	if((Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer())) == "ssg 08" || Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer())) == "awp")){
		UI.SetValue("Anti-Aim", "Extra", "Slow walk mode", 0)
	}else{
		UI.SetValue("Anti-Aim", "Extra", "Slow walk mode", 1)
	}
	}
	
	
	if (Math.abs(GetJump(target)) >= 40) {
		Ragebot.ForceTargetHitchance(target, 70)
		PrintChat("[dhdj]: "+"Found Bunnyhopping Target, setting min hitchance" + "\n");
	}
	
	
	if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Smart Peek")) {
		if(GetVelocity(Entity.GetLocalPlayer())>20){
			angle=5
			dir=0
			Choke()
		}else{
			Send()
			if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable dhdj's Anti-Aim")){
				if(aa){
			AntiAim.SetOverride(1)
			UI.SetValue("Anti-Aim", "Rage Anti-Aim", "At targets",true)
			}else{
			AntiAim.SetOverride(0)
			}
				if(UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Inverter")){
					if(dir==0 || dir==180){
						dir=-160
						Choke()
					}else if(dir>-180){
						dir-=5
						Choke()
					}
					UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", dir);
				AntiAim.SetFakeOffset(0);
				AntiAim.SetRealOffset(-30-Math.ceil((Math.random() - 0.5) * 60))
				AntiAim.SetLBYOffset(60+Math.ceil((Math.random() - 0.5) * 60))
				}else{
					if(dir==0 || dir==-180){
						dir=160
						Choke()
					}else if(dir<180){
						dir+=5
						Choke()
					}
					UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", dir)
				AntiAim.SetRealOffset(30+Math.ceil((Math.random() - 0.5) * 60))
				AntiAim.SetFakeOffset(0)
				AntiAim.SetLBYOffset(-60-Math.ceil((Math.random() - 0.5) * 60))
				}
				n=Math.random()
				if(n>0.9){
				UI.SetValue("Anti-Aim", "Extra", "Pitch", 1)
				}else if(n>0.7){
				UI.SetValue("Anti-Aim", "Extra", "Pitch", 4)
				}else{
				UI.SetValue("Anti-Aim", "Extra", "Pitch", 0)
				}
			}
		}
	}else{
		dir=0
	}
	if(UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Inverter")){
		left=false
	}else{
		left=true
	}
	if(UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Minimum Damage")){
		setMinimumDamage()
	}else{
		if(Entity.IsValid(target) == true && Entity.IsAlive(target) && Entity.IsDormant(target) == false){
		localPlayer_index = Entity.GetLocalPlayer();
		localPlayer_eyepos = Entity.GetEyePosition(localPlayer_index);
        hitbox_pos = Entity.GetHitboxPosition(target, 0);
        result = Trace.Bullet(localPlayer_index,target, localPlayer_eyepos, hitbox_pos);
		if(result[2] && result[1]>UI.GetValue("Misc", "JAVASCRIPT", "Script items",getWeapon2(Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))) +" Normal Damage")){
			setNormalDamage()
			damage_mode="NORMAL"
		}else{
			setWallDamage()
			damage_mode="WALL"
		}
        PrintChat("Trace result:: " + Entity.GetName(localPlayer_index) + " can see player: " + Entity.GetName(result[0]) + " damage:: " + result[1] + " visible:: " + result[2] + " hitbox :: " + result[3] + "\n")
		}/*else{
		setNormalDamage()
		}*/
		//if the enemy is using an awp and the user is using an autosniper, set mindmg to hp+1
		if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable dhdj's Auto Mindmg")){
			if(getWeapon(Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer())))=="AUTOSNIPER" && getWeapon(Entity.GetName(Entity.GetWeapon(target)))=="AWP"){
				UI.SetValue("Rage",getWeapon(Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))),"Targeting","Minimum damage", Entity.GetProp(target, "CBasePlayer", "m_iHealth") + 1)
				damage_mode="AUTO MAX"
			}
		}
		//if the enemy has low health, decrease the mindmg to hp+1
	if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable dhdj's Auto Mindmg")){
	if (Entity.GetProp(target, "CBasePlayer", "m_iHealth") < UI.GetValue("Rage",getWeapon(Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))),"Targeting","Minimum damage") && Entity.GetProp(target, "CBasePlayer", "m_iHealth") > 0) {
		UI.SetValue("Rage",getWeapon(Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))),"Targeting","Minimum damage", Entity.GetProp(target, "CBasePlayer", "m_iHealth") + 1)
		PrintChat("[dhdj]: "+"Low-Health Target: " + Entity.GetProp(target, "CBasePlayer", "m_iHealth") + "\n")
		damage_mode="AUTO MIN"
	}
	}
	}
	if(UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Minimum Accuracy")){
		setMinimumAccuracy()
	}else{
		setNormalAccuracy()
	}
	if(UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items","YOLO")){
		damage_mode="YOLO"
		setYOLOMode()
	}
	/*
	if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable dhdj's Anti Bruteforce")){
		if(Entity.IsValid(last_target) == true){
			//Cheat.PrintChat(JSON.stringify(resolvers)+"\n")
			setInvert(resolvers[last_target])
		}else{
			setInvert(0)
		}
	}
	*/
	if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable HVH Fakelag Mode")){
	limit=0.8
	}else{
	limit=0.5
	}
	if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable dhdj's Fakelag")){
		if(Math.random()<limit){
			Choke()
		}
	}
	if(Input.IsKeyPressed(0x10) && UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable Invert On Slowwalk")){
		if(invert>UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Inverter Interval")){
		UI.ToggleHotkey("Misc", "JAVASCRIPT", "Script items","Inverter")
		invert=0
		}else{
			invert++
		}
	}
	if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable dhdj's Dynamic Multipoint")){
		if(players[target]==null || players[target]==undefined){
			players[target]=JSON.parse(JSON.stringify(default_multi))
			PrintChat("Generating Multipoint for "+target+"\n")
		}
		setMultiPoint(players[last_target])
	}
	//Cheat.PrintChat(JSON.stringify(default_multi)+"\n")
	//Cheat.Print(JSON.stringify(players)+target+last_target+"\n")
	//Cheat.PrintChat(UI.GetColor("Misc", "JAVASCRIPT", "Script items", "UI Color")+"\n")
	}

function onDraw(){
	count++
	//check if an update is needed every 20 ticks
	if (count > 10) {
		//reset the counter
		count = 0
		//set the clantag according to time. A new clantag is applied every 500 ms
		if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable dhdj's Clantag")){
		Local.SetClanTag(clantag[Math.round(new Date()
			.getTime() / 500) % clantag.length]);
		}
	}
	if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Max LBY") < UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Min LBY")){
		UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Max LBY",UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Min LBY"))
	}
	if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable dhdj's Anti Bruteforce")){
		UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Enable Invert On Shot",false)
		UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Enable Invert On Slowwalk",false)
		UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Enable Invert On Hurt",false)
		UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Enable Invert On Enemy Fire",false)
	}
	if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable dhdj's Anti Bruteforce")){
	Object.keys(shot_start).forEach(function(key){
		if(shot_start.hasOwnProperty(key) && shot_end.hasOwnProperty(key) && shot_start[key]!=undefined && shot_end[key]!=undefined && shot_start[key][0] !=undefined){
			/*
			s = Render.WorldToScreen(shot_start[key])
			e = Render.WorldToScreen(shot_end[key])
			if(s!=null && e!=null){
			Render.Line(s[0], s[1], e[0], e[1], [255, 255, 255, 255])
			}
			*/
			start=JSON.parse(JSON.stringify(shot_start[key]))
			end=JSON.parse(JSON.stringify(shot_end[key]))
			head=Entity.GetHitboxPosition(Entity.GetLocalPlayer(),0)
			delete shot_start[key]
			delete shot_end[key]
			vec=[end[0]-start[0],end[1]-start[1],end[2]-start[2]]
			equation=[vec[1],-vec[2]-vec[0],vec[1],(vec[0]*start[1])-(vec[1]*start[0])-(vec[1]*start[2])+(vec[2]*start[1])]
			distance=Math.abs((equation[0]*head[0])+(equation[1]*head[1])+(equation[2]*head[2])+equation[3])/Math.sqrt(Math.pow(equation[0],2)+Math.pow(equation[1],2)+Math.pow(equation[2],2))
			//Cheat.PrintChat("["+start[0]+" "+start[1]+" "+start[2]+"]\n");
			//Cheat.PrintChat("["+end[0]+" "+end[1]+" "+end[2]+"]\n");
			//Cheat.PrintChat("["+vec[0]+" "+vec[1]+" "+vec[2]+"]\n");
			//Cheat.PrintChat("["+equation[0]+" "+equation[1]+" "+equation[2]+" "+equation[3]+"]\n");
			Cheat.PrintChat(distance+"\n");
			if(distance<60 && distance>1){
				UI.ToggleHotkey("Misc", "JAVASCRIPT", "Script items","Inverter") 
				/*
				if(resolvers[key]==0){
					resolvers[key]=1
					Cheat.PrintChat("Switched to "+resolvers[key]+"\n")
				}else{
					resolvers[key]=0
					Cheat.PrintChat("Switched to "+resolvers[key]+"\n")
				}
				*/
			}
		}
	});
	}
	
	
	
	if(left){
		Render.String(screen_size[0] /2 -50, screen_size[1] /2 -20, 1,  "<", UI.GetColor("Misc", "JAVASCRIPT", "Script items", "UI Color"), 4 )
	}else{
		Render.String(screen_size[0] /2 +50, screen_size[1] /2 -20, 1,  ">", UI.GetColor("Misc", "JAVASCRIPT", "Script items", "UI Color"), 4 )
	}
	Render.String(screen_size[0] /2 , screen_size[1] /2 -640 , 1,  ((1-Local.GetInaccuracy())*100).toFixed(2)+"%", UI.GetColor("Misc", "JAVASCRIPT", "Script items", "UI Color"), 4 )
	if(UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Minimum Damage")){
		Render.String(screen_size[0] /2 , screen_size[1] /2 -120 , 1,  "DMG", UI.GetColor("Misc", "JAVASCRIPT", "Script items", "UI Color"), 4 )
	}
	if(UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Minimum Accuracy")){
		Render.String(screen_size[0] /2 , screen_size[1] /2 -80 , 1,  "AC", UI.GetColor("Misc", "JAVASCRIPT", "Script items", "UI Color"), 4 )
	}
	if(UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items","YOLO")){
		Render.String(screen_size[0] /2 , screen_size[1] /2 -160 , 1,  "YOLO", UI.GetColor("Misc", "JAVASCRIPT", "Script items", "UI Color"), 4 )
	}
	if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable dhdj's Dynamic Multipoint")){
		if(last_target==0){
			Render.String(screen_size[0]-150 , screen_size[1] /2 -120 , 1,"Default Multipoint", UI.GetColor("Misc", "JAVASCRIPT", "Script items", "UI Color"), 4 )
		}else{
		Render.String(screen_size[0]-200 , screen_size[1] /2 -120 , 1,"Multipoint for "+Entity.GetName(last_target), UI.GetColor("Misc", "JAVASCRIPT", "Script items", "UI Color"), 4 )
		}
		Render.String(screen_size[0]-100 , screen_size[1] /2 -80 , 1,  "HEAD: "+UI.GetValue("Rage",getWeapon(Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))),getWeaponConfig(Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))),"Head pointscale"), UI.GetColor("Misc", "JAVASCRIPT", "Script items", "UI Color"), 4 )
		Render.String(screen_size[0]-100 , screen_size[1] /2 -40 , 1,  "BODY: "+UI.GetValue("Rage",getWeapon(Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))),getWeaponConfig(Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))),"Body pointscale"), UI.GetColor("Misc", "JAVASCRIPT", "Script items", "UI Color"), 4 )
	}
	Render.String(screen_size[0]-120 , screen_size[1] /2  , 1,"Mode: " + damage_mode, UI.GetColor("Misc", "JAVASCRIPT", "Script items", "UI Color"), 4 )
	Render.String(screen_size[0]-120 , screen_size[1] /2 +40, 1,"Damage: " + UI.GetValue("Rage",getWeapon(Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))),"Targeting","Minimum damage"), UI.GetColor("Misc", "JAVASCRIPT", "Script items", "UI Color"), 4 )
	//Cheat.Print(Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))+"\n")
	if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable dhdj's Anti Bruteforce")){
		if(!UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Inverter")){
		Render.String(screen_size[0]-160 , screen_size[1] /2 +80, 1,"Anti-Bruteforce: LEFT", UI.GetColor("Misc", "JAVASCRIPT", "Script items", "UI Color"), 4 )
		}else{
		Render.String(screen_size[0]-160 , screen_size[1] /2 +80, 1,"Anti-Bruteforce: RIGHT", UI.GetColor("Misc", "JAVASCRIPT", "Script items", "UI Color"), 4 )	
		}
	
	}
}

function GetVelocity(index) {
	var velocity = Entity.GetProp(index, "CBasePlayer", "m_vecVelocity[0]")
	return Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1])
}

function GetJump(index) {
	return Entity.GetProp(index, "CBasePlayer", "m_vecVelocity[0]")[2]
}


function getHitboxName(index) {
	var hitboxName = ""
	switch (index) {
		case 0:
			hitboxName = "Head"
			break
		case 1:
			hitboxName = "Neck"
			break
		case 2:
			hitboxName = "Pelvis"
			break
		case 3:
			hitboxName = "Body"
			break
		case 4:
			hitboxName = "Thorax"
			break
		case 5:
			hitboxName = "Chest"
			break
		case 6:
			hitboxName = "Upper chest"
			break
		case 7:
			hitboxName = "Left thigh"
			break
		case 8:
			hitboxName = "Right thigh"
			break
		case 9:
			hitboxName = "Left calf"
			break
		case 10:
			hitboxName = "Right calf"
			break
		case 11:
			hitboxName = "Left foot"
			break
		case 12:
			hitboxName = "Right foot"
			break
		case 13:
			hitboxName = "Left hand"
			break
		case 14:
			hitboxName = "Right hand"
			break
		case 15:
			hitboxName = "Left upper arm"
			break
		case 16:
			hitboxName = "Left forearm"
			break
		case 17:
			hitboxName = "Right upper arm"
			break
		case 18:
			hitboxName = "Right forearm"
			break
		default:
			hitboxName = "Generic"
	}

	return hitboxName
}

function onRagebotFire() {
	ragebot_fired = 40;
	ragebot_target = Event.GetInt("target_index")
	ragebot_target_hitbox = Event.GetInt("hitbox")
	ragebot_target_hitchance = Event.GetInt("hitchance")
	ragebot_target_safepoint = Event.GetInt("safepoint")
	ragebot_target_exploit = Event.GetInt("exploit")
	targetName = Entity.GetName(ragebot_target)
	if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable Invert On Shot")){
		UI.ToggleHotkey("Misc", "JAVASCRIPT", "Script items","Inverter")
	}
	if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable dhdj's Dynamic Multipoint")){
		if(ragebot_target_hitbox==0){
		multi_hitbox=0
		}else{
		multi_hitbox=1
		}
		PrintChat("Decreasing Multipoint for "+last_target+"\n")
		players[last_target][getWeapon(Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer())))][multi_hitbox]-=5
		if(players[last_target][getWeapon(Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer())))][multi_hitbox]<1){ players[last_target][getWeapon(Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer())))][multi_hitbox]=1}

	}
	PrintChat("[dhdj] TARGET: " + targetName + " HITBOX: " + getHitboxName(ragebot_target_hitbox) + " HC: " + ragebot_target_hitchance + " SAFEPOINT: " + ragebot_target_safepoint + " EXPLOIT: " + ragebot_target_exploit + " \n")

}

function PrintChat(message){
	if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable Logging")){
		Cheat.PrintChat(message)
	}
}

function onPlayerSay()
{
	if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable dhdj's Reply Bot")){
		Cheat.ExecuteCommand("say " + Event.GetString("text"))
	}
}

function onPlayerHurt(){
	if(Entity.GetEntityFromUserID(Event.GetInt("userid"))==Entity.GetLocalPlayer() && UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable Invert On Hurt")){ 
		UI.ToggleHotkey("Misc", "JAVASCRIPT", "Script items","Inverter") 
	}
	if(Entity.GetEntityFromUserID(Event.GetInt("attacker"))==Entity.GetLocalPlayer() && UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable dhdj's Dynamic Multipoint")){ 
		PrintChat("Increasing Multipoint for "+last_target+"\n")
		players[last_target][getWeapon(Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer())))][multi_hitbox]+=10
		if(players[last_target][getWeapon(Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer())))][multi_hitbox]>100){ players[last_target][getWeapon(Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer())))][multi_hitbox]=100}
	}
}

function onWeaponFire(){
	//----------------@Deprecated
	if(Entity.GetEntityFromUserID(Event.GetInt("userid"))==last_target && UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable Invert On Enemy Fire")){
		UI.ToggleHotkey("Misc", "JAVASCRIPT", "Script items","Inverter") 
	}
	//----------------
	if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable dhdj's Anti Bruteforce")){
	if(Entity.IsEnemy(Entity.GetEntityFromUserID(Event.GetInt("userid")))){
		shot_start[Entity.GetEntityFromUserID(Event.GetInt("userid"))]=Entity.GetEyePosition(Entity.GetEntityFromUserID(Event.GetInt("userid")))
	}
	}
}

function onBulletImpact(){
	if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable dhdj's Anti Bruteforce")){
	if(Entity.IsEnemy(Entity.GetEntityFromUserID(Event.GetInt("userid")))){
		shot_end[Entity.GetEntityFromUserID(Event.GetInt("userid"))]=[Event.GetInt("x"),Event.GetInt("y"),Event.GetInt("z")]
	}
	}
}

function onPlayerSpawned(){
	/*
	if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable dhdj's Anti Bruteforce")){
		resolvers[Entity.GetEntityFromUserID(Event.GetInt("userid"))]=0
	}
	*/
}

function setInvert(invert){
if(!invert && UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Inverter")){
	UI.ToggleHotkey("Misc", "JAVASCRIPT", "Script items","Inverter") 
}
if(invert && !UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Inverter")){
	UI.ToggleHotkey("Misc", "JAVASCRIPT", "Script items","Inverter") 
}
}

function saveDefaultMultiPoint(){
	if(UI.GetValue("Rage","GENERAL","Targeting","Force pointscale")){
	default_multi["GENERAL"][0]=UI.GetValue("Rage","GENERAL","Targeting","Head pointscale")
	default_multi["GENERAL"][1]=UI.GetValue("Rage","GENERAL","Targeting","Body pointscale")
	}
	if(UI.GetValue("Rage","PISTOL","Pistol config","Force pointscale")){
	default_multi["PISTOL"][0]=UI.GetValue("Rage","PISTOL","Pistol config","Head pointscale")
	default_multi["PISTOL"][1]=UI.GetValue("Rage","PISTOL","Pistol config","Body pointscale")
	}
	if(UI.GetValue("Rage","HEAVY PISTOL","Heavy pistol config","Force pointscale")){
	default_multi["HEAVY PISTOL"][0]=UI.GetValue("Rage","HEAVY PISTOL","Heavy pistol config","Head pointscale")
	default_multi["HEAVY PISTOL"][1]=UI.GetValue("Rage","HEAVY PISTOL","Heavy pistol config","Body pointscale")
	}
	if(UI.GetValue("Rage","SCOUT","Scout config","Force pointscale")){
	default_multi["SCOUT"][0]=UI.GetValue("Rage","SCOUT","Scout config","Head pointscale")
	default_multi["SCOUT"][1]=UI.GetValue("Rage","SCOUT","Scout config","Body pointscale")
	}
	if(UI.GetValue("Rage","AWP","AWP config","Force pointscale")){
	default_multi["AWP"][0]=UI.GetValue("Rage","AWP","AWP config","Head pointscale")
	default_multi["AWP"][1]=UI.GetValue("Rage","AWP","AWP config","Body pointscale")
	}
	if(UI.GetValue("Rage","AUTOSNIPER","Auto config","Force pointscale")){
	default_multi["AUTOSNIPER"][0]=UI.GetValue("Rage","AUTOSNIPER","Auto config","Head pointscale")
	default_multi["AUTOSNIPER"][1]=UI.GetValue("Rage","AUTOSNIPER","Auto config","Body pointscale")
	}
}
function setMultiPoint(multipoint_data){
	if(UI.GetValue("Rage","GENERAL","Targeting","Force pointscale")){
	UI.SetValue("Rage","GENERAL","Targeting","Head pointscale",multipoint_data["GENERAL"][0])
	UI.SetValue("Rage","GENERAL","Targeting","Body pointscale",multipoint_data["GENERAL"][1])
	}
	if(UI.GetValue("Rage","PISTOL","Pistol config","Force pointscale")){
	UI.SetValue("Rage","PISTOL","Pistol config","Head pointscale",multipoint_data["PISTOL"][0])
	UI.SetValue("Rage","PISTOL","Pistol config","Body pointscale",multipoint_data["PISTOL"][1])
	}
	if(UI.GetValue("Rage","HEAVY PISTOL","Heavy pistol config","Force pointscale")){
	UI.SetValue("Rage","HEAVY PISTOL","Heavy pistol config","Head pointscale",multipoint_data["HEAVY PISTOL"][0])
	UI.SetValue("Rage","HEAVY PISTOL","Heavy pistol config","Body pointscale",multipoint_data["HEAVY PISTOL"][1])
	}
	if(UI.GetValue("Rage","SCOUT","Scout config","Force pointscale")){
	UI.SetValue("Rage","SCOUT","Scout config","Head pointscale",multipoint_data["SCOUT"][0])
	UI.SetValue("Rage","SCOUT","Scout config","Body pointscale",multipoint_data["SCOUT"][1])
	}
	if(UI.GetValue("Rage","AWP","AWP config","Force pointscale")){
	UI.SetValue("Rage","AWP","AWP config","Head pointscale",multipoint_data["AWP"][0])
	UI.SetValue("Rage","AWP","AWP config","Body pointscale",multipoint_data["AWP"][1])
	}
	if(UI.GetValue("Rage","AUTOSNIPER","Auto config","Force pointscale")){
	UI.SetValue("Rage","AUTOSNIPER","Auto config","Head pointscale",multipoint_data["AUTOSNIPER"][0])
	UI.SetValue("Rage","AUTOSNIPER","Auto config","Body pointscale",multipoint_data["AUTOSNIPER"][1])
	}
}
function getWeapon2(wep){
if (wep == "awp") {
        return "AWP";
    }
    else if (wep == "ssg 08") {
        return "Scout";
    }
    else if (wep == "scar 20" || wep == "g3sg1") {
        return "Autosniper";
    }
    else if (typeof(wep)=="string" && (wep == "deagle" || wep.indexOf("r8") !=-1)) {
        return "Heavy Pistol";
    }
    else if (wep == "elite" || wep == "fiveseven" || wep == "p2000" || wep == "glock" || wep == "tec9") {
        return 'Pistol';
    }
    else {
        return 'General';
    }
}

function getWeapon(wep) {
    if (wep == "awp") {
        return "AWP";
    }
    else if (wep == "ssg 08") {
        return "SCOUT";
    }
    else if (wep == "scar 20" || wep == "g3sg1") {
        return "AUTOSNIPER";
    }
    else if (typeof(wep)=="string" && (wep == "deagle" || wep.indexOf("r8") !=-1)) {
        return "HEAVY PISTOL";
    }
    else if (wep == "elite" || wep == "fiveseven" || wep == "p2000" || wep == "glock" || wep == "tec9") {
        return 'PISTOL';
    }
    else {
        return 'GENERAL';
    }
}
function getWeaponConfig(wep) {
    if (wep == "awp") {
        return "AWP config";
    }
    else if (wep == "ssg 08") {
        return "Scout config";
    }
    else if (wep == "scar 20" || wep == "g3sg1") {
        return "Auto config";
    }
    else if (typeof(wep)=="string" && (wep == "deagle" || wep.indexOf("r8") !=-1)) {
        return "Heavy pistol config";
    }
    else if (wep == "elite" || wep == "fiveseven" || wep == "p2000" || wep == "glock" || wep == "tec9") {
        return 'Pistol config';
    }
    else {
        return 'Targeting';
    }
}

function setNormalDamage(){
	UI.SetValue("Rage","GENERAL","Targeting","Minimum damage",UI.GetValue("Misc", "JAVASCRIPT", "Script items", "General Normal Damage"))
	UI.SetValue("Rage","PISTOL","Targeting","Minimum damage",UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Pistol Normal Damage"))
	UI.SetValue("Rage","HEAVY PISTOL","Targeting","Minimum damage",UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Heavy Pistol Normal Damage"))
	UI.SetValue("Rage","SCOUT","Targeting","Minimum damage",UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Scout Normal Damage"))
	UI.SetValue("Rage","AWP","Targeting","Minimum damage",UI.GetValue("Misc", "JAVASCRIPT", "Script items", "AWP Normal Damage"))
	UI.SetValue("Rage","AUTOSNIPER","Targeting","Minimum damage",UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Autosniper Normal Damage"))
}

function setWallDamage(){
	UI.SetValue("Rage","GENERAL","Targeting","Minimum damage",UI.GetValue("Misc", "JAVASCRIPT", "Script items", "General Wall Damage"))
	UI.SetValue("Rage","PISTOL","Targeting","Minimum damage",UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Pistol Wall Damage"))
	UI.SetValue("Rage","HEAVY PISTOL","Targeting","Minimum damage",UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Heavy Pistol Wall Damage"))
	UI.SetValue("Rage","SCOUT","Targeting","Minimum damage",UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Scout Wall Damage"))
	UI.SetValue("Rage","AWP","Targeting","Minimum damage",UI.GetValue("Misc", "JAVASCRIPT", "Script items", "AWP Wall Damage"))
	UI.SetValue("Rage","AUTOSNIPER","Targeting","Minimum damage",UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Autosniper Wall Damage"))
}

function setMinimumDamage(){
	UI.SetValue("Rage","GENERAL","Targeting","Minimum damage",UI.GetValue("Misc", "JAVASCRIPT", "Script items", "General Minimal Damage"))
	UI.SetValue("Rage","PISTOL","Targeting","Minimum damage",UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Pistol Minimal Damage"))
	UI.SetValue("Rage","HEAVY PISTOL","Targeting","Minimum damage",UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Heavy Pistol Minimal Damage"))
	UI.SetValue("Rage","SCOUT","Targeting","Minimum damage",UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Scout Minimal Damage"))
	UI.SetValue("Rage","AWP","Targeting","Minimum damage",UI.GetValue("Misc", "JAVASCRIPT", "Script items", "AWP Minimal Damage"))
	UI.SetValue("Rage","AUTOSNIPER","Targeting","Minimum damage",UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Autosniper Minimal Damage"))
}

function setMinimumAccuracy(){
	UI.SetValue("Rage","GENERAL","Accuracy","Hitchance",UI.GetValue("Misc", "JAVASCRIPT", "Script items", "General Minimal Hitchance"))
	UI.SetValue("Rage","PISTOL","Accuracy","Hitchance",UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Pistol Minimal Hitchance"))
	UI.SetValue("Rage","HEAVY PISTOL","Accuracy","Hitchance",UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Heavy Pistol Minimal Hitchance"))
	UI.SetValue("Rage","SCOUT","Accuracy","Hitchance",UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Scout Minimal Hitchance"))
	UI.SetValue("Rage","AWP","Accuracy","Hitchance",UI.GetValue("Misc", "JAVASCRIPT", "Script items", "AWP Minimal Hitchance"))
	UI.SetValue("Rage","AUTOSNIPER","Accuracy","Hitchance",UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Autosniper Minimal Hitchance"))
}

function setNormalAccuracy(){
	UI.SetValue("Rage","GENERAL","Accuracy","Hitchance",UI.GetValue("Misc", "JAVASCRIPT", "Script items", "General Normal Hitchance"))
	UI.SetValue("Rage","PISTOL","Accuracy","Hitchance",UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Pistol Normal Hitchance"))
	UI.SetValue("Rage","HEAVY PISTOL","Accuracy","Hitchance",UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Heavy Pistol Normal Hitchance"))
	UI.SetValue("Rage","SCOUT","Accuracy","Hitchance",UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Scout Normal Hitchance"))
	UI.SetValue("Rage","AWP","Accuracy","Hitchance",UI.GetValue("Misc", "JAVASCRIPT", "Script items", "AWP Normal Hitchance"))
	UI.SetValue("Rage","AUTOSNIPER","Accuracy","Hitchance",UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Autosniper Normal Hitchance"))
}

function setYOLOMode(){
	UI.SetValue("Rage","GENERAL","Targeting","Minimum damage",101)
	UI.SetValue("Rage","PISTOL","Targeting","Minimum damage",101)
	UI.SetValue("Rage","HEAVY PISTOL","Targeting","Minimum damage",101)
	UI.SetValue("Rage","SCOUT","Targeting","Minimum damage",101)
	UI.SetValue("Rage","AWP","Targeting","Minimum damage",101)
	UI.SetValue("Rage","AUTOSNIPER","Targeting","Minimum damage",101)
	UI.SetValue("Rage","GENERAL","Accuracy","Hitchance",75)
	UI.SetValue("Rage","PISTOL","Accuracy","Hitchance",75)
	UI.SetValue("Rage","HEAVY PISTOL","Accuracy","Hitchance",75)
	UI.SetValue("Rage","SCOUT","Accuracy","Hitchance",75)
	UI.SetValue("Rage","AWP","Accuracy","Hitchance",75)
	UI.SetValue("Rage","AUTOSNIPER","Accuracy","Hitchance",75)
}

function onRoundStart(){
aa=1
should_control=true
}

function onRoundEnd(){
	if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Disable Anti-Aim On Round End")){
aa=0
should_control=false
	}
}

function Choke(){
	if(should_control){
	UserCMD.Choke()
	}
}

function Send(){
	if(should_control){
		UserCMD.Send()
	}
}

function onUnload(){
	setMultiPoint(default_multi)
	AntiAim.SetOverride(0)
}


saveDefaultMultiPoint()
Cheat.RegisterCallback("player_say", "onPlayerSay")
Cheat.RegisterCallback("ragebot_fire", "onRagebotFire")
Cheat.RegisterCallback("CreateMove", "onCreateMove")
Cheat.RegisterCallback("Draw", "onDraw")
Cheat.RegisterCallback("player_hurt", "onPlayerHurt")
Cheat.RegisterCallback("weapon_fire","onWeaponFire")
Cheat.RegisterCallback("bullet_impact","onBulletImpact")
Cheat.RegisterCallback("player_spawned","onPlayerSpawned")
Cheat.RegisterCallback("round_end", "onRoundEnd");
Cheat.RegisterCallback("round_start", "onRoundStart");
Cheat.RegisterCallback("Unload","onUnload")