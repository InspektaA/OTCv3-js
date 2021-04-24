/**
 *
 * Title: Velocity indicator
 * Author: leed
 * Credits: ed for getVelocity function
 *
*/
var SCREEN_SIZE = Global.GetScreenSize()
var x = SCREEN_SIZE[0]
var y = SCREEN_SIZE[1]
var button = "[LEED] Show velocity"
var slider = "Height"
function getVelocity(index)
{
    players = Entity.GetPlayers();
    for (i=0; i < players.length; i++);
    {
        var velocity = Entity.GetProp( index, "CBasePlayer", "m_vecVelocity[0]" );
        var speed = Math.sqrt( velocity[0] * velocity[0] + velocity[1] * velocity[1] );
    }
    
    return speed;
}
function onGround(index)
{
    return Entity.GetProp(index, "CBasePlayer", "m_fFlags") & 1;
}
var lastjumpvelocity = 0;
var lastonground = false;
var color = [108, 195, 18, 255];
function drawVelocity()
{
    var lp = Entity.GetLocalPlayer();
    if (UI.GetValue(button) && Entity.IsValid(lp) && Entity.IsAlive(lp)) {
        var sint = UI.GetValue(slider);
        var velocity = Math.round(getVelocity(lp));
        var isonground = onGround(lp);
        if (!lastonground && isonground)
        {
            if (velocity == lastjumpvelocity)
            {
                color = [255, 255, 255, 255]
            }
            else if (velocity > lastjumpvelocity)
            {
                color = [108, 195, 18, 255]
            }
            else
            {
                color = [245, 185, 66, 255]
            }
            lastjumpvelocity = velocity;
        }
        lastonground = isonground;
        
        var velstr = velocity.toString();
        var lastvelstr = lastjumpvelocity.toString();
        //Walk velocity
        Render.String(x / 2 - 8 * velstr.length, y / 2 + sint, 0, velstr, [108, 195, 18, 255], 4);
        //in-air velocity
        Render.String(x / 2 - 8 * lastvelstr.length, y / 2 + sint - 30, 0, lastvelstr, color, 4);
    }
}
UI.AddLabel("--------------------------------------");
UI.AddCheckbox(button);
UI.AddSliderInt(slider, 0, 1000)
UI.AddLabel("--------------------------------------");
Global.RegisterCallback("Draw", "drawVelocity");