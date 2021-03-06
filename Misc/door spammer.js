var flip = false;
var isInBuyzone = false;

function onEnterBuyzone() {
    var player = Entity.GetEntityFromUserID( Event.GetInt( "userid" ) );
    if ( !player ) return;
    if ( Entity.IsLocalPlayer( player ) ) {
        if ( Event.GetInt( "canbuy" ) ) {
            isInBuyzone = true;
        }
    }
};

function onRoundStart() {
    isInBuyzone = true;
};

function onExitBuyzone() {
    var player = Entity.GetEntityFromUserID( Event.GetInt( "userid" ) );
    if ( !player ) return;
    if ( Entity.IsLocalPlayer( player ) ) {
        isInBuyzone = false;
    }
};

function onClientDisconnect() {
    isInBuyzone = true;
};

function onCreateMove() {
    var localPlayer = Entity.GetLocalPlayer();

    if ( !localPlayer || !Entity.IsAlive( localPlayer ) ) return;
    if ( isInBuyzone ) return;
  
    if ( UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script Items", "[DOORSTUCK] Enable") ) {
        if ( flip ) {
            Global.ExecuteCommand( "+use" );
        } else {
            Global.ExecuteCommand( "-use" );
        }

        flip = !flip;
    } else if ( !UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script Items", "[DOORSTUCK] Enable") && flip ) {
        flip = false;
        Global.ExecuteCommand( "-use" );
    }
}

Global.RegisterCallback( "round_start", "onRoundStart" );
Global.RegisterCallback( "enter_buyzone", "onEnterBuyzone" );
Global.RegisterCallback( "exit_buyzone", "onExitBuyzone" );
Global.RegisterCallback( "client_disconnect", "onClientDisconnect" );
Global.RegisterCallback( "CreateMove", "onCreateMove" );
UI.AddHotkey( "[DOORSTUCK] Enable" );
