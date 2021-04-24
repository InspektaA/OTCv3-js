function getCustomValue(name)
{
    var value = UI.GetValue("MISC", "JAVASCRIPT", "Script items", name);
    return value;
}
function indicator(cx, cy, r, num_segments, parameter, texts, color)
{
	var oldx, oldy, lastx, lasty;
	parameter = parameter % num_segments;
	for(var ii = 0; ii < num_segments+1; ii++)
    {
        theta = 2 * Math.PI * ii / num_segments;
        x = r * Math.cos(theta);
        y = r * Math.sin(theta);
		if(ii > parameter) {
		if(ii != 0) {
		Render.Line( x + cx, y + cy, oldx , oldy, color ); }
		if(ii == 0) { Render.Line( x + cx, y + cy, lastx, lasty, color ); } }
		if(ii == num_segments) { lastx = oldx; lasty = oldy; }
		oldx = x + cx;
		oldy = y + cy;
    }
	Render.String( cx - (Render.TextSize(texts)[0] / 2), cy - (Render.TextSize(texts)[1] / 2), 0, texts, color );
}
var fps = [ ], fpsend, curtime, oldtime = 0;
function avg_fps()
{
	fps[1] = (Math.floor(1 / Global.Frametime()));
	if(Convar.GetInt("fps_max") == 0) { fps[0] = 300; }
	else { fps[0] = 300 }
	if(fps[1] > 298) { fps[1] = 300 }
	if(fps[1] < 5) { fps[1] = 1 }
	return fps;
}
function time_to_ticks(time) {
    var timer = time / Globals.TickInterval() + .5;
    return timer;
}
var choke;
var sim_time;
function time_to_tick(time) {
    return Math.round(time / Global.TickInterval());
}

function choked() {

		local = Entity.GetLocalPlayer();

        const current_tick = time_to_tick(Entity.GetProp(local, "CBaseEntity", "m_flSimulationTime"));
        const last_tick = sim_time;

        const delta = current_tick - last_tick;

        if (delta > 0 && delta <= 64) {
            choke = delta - 1;
        }
        sim_time = current_tick;
 }
function drawCircle()
{
	var get_fps = avg_fps();
	choked();
	indicator(360, 800, 25, 16, 16 - choke, "chk", [ 255, 0, 255, 255 ]);
	indicator(300, 800, 25, get_fps[0] / 10, (get_fps[0] - get_fps[1])/ 10, get_fps[1].toString(), [ 30, 255, 0, 255 ]);
}
Cheat.RegisterCallback("Draw", "drawCircle");