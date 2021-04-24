// This is a pasted script for otc3
// any problems dm me on discor :D
// SPDIware.nn on top#8507

// Some noscope settings for p100 kills

UI.AddSliderFloat("Noscope distance (m)", 0, 100);
var target = -1;
function CreateMove() {
    if(!Ragebot.GetTarget())
        target = closestTarget();
    else
        target = Ragebot.GetTarget();
    if(!Entity.IsAlive(target)) {
        UI.SetValue("Rage", "GENERAL", "General", "Auto scope", true);
        return;
    }
    if(get_metric_distance(Entity.GetRenderOrigin(Entity.GetLocalPlayer()), Entity.GetRenderOrigin(target)) < UI.GetValue("Script items", "Noscope distance (m)")) {
        UI.SetValue("Rage", "GENERAL", "General", "Auto scope", false);
    } else {
        UI.SetValue("Rage", "GENERAL", "General", "Auto scope", true);
    }
}
Cheat.RegisterCallback("CreateMove", "CreateMove");
function closestTarget() {
    var local = Entity.GetLocalPlayer();
    var enemies = Entity.GetEnemies();
    var dists = [];
    var damage = [];
    for(e in enemies) {
        if(!Entity.IsAlive(enemies[e]) || Entity.IsDormant(enemies[e]) || !Entity.IsValid(enemies[e])) continue;
        dists.push([enemies[e], calcDist(Entity.GetHitboxPosition(local, 0), Entity.GetHitboxPosition(enemies[e], 0))]);
    }
    dists.sort(function(a, b)
    {
        return a[1] - b[1];
    });
    if(dists.length == 0 || dists == []) return target = -1; 
    return dists[0][0];
}

// clean dist func, thanks rzr
function calcDist(a, b)
{
    x = a[0] - b[0];
    y = a[1] - b[1];
    z = a[2] - b[2];
    return Math.sqrt( x * x + y * y + z * z );
}

function get_metric_distance(a, b)
{
    return Math.floor(Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2) + Math.pow(a[2] - b[2], 2)) * 0.0254 );
}

// Some factors AA so u dont get tapped my skeeters

var z4vv = [];
z4vv['w'] = function () {
    var _0x478d52 = {};
    _0x478d52['GAaYU'] = function (_0x521b41, _0x4f3315) {
        return _0x521b41 !== _0x4f3315;
    }, _0x478d52['mTgFM'] = function (_0x554cf2) {
        return _0x554cf2();
    }, _0x478d52['rTRCG'] = 'object', _0x478d52['wSWHB'] = 'prototype', _0x478d52['LPQNz'] = 'oLBcv';
    var _0x3dae89 = _0x478d52,
        _0x287614 = function () {
            var _0x3ab2c7 = !![];
            return function (_0x36caff, _0x5c6906) {
                var _0xf17920 = _0x3ab2c7 ? function () {
                    if (_0x5c6906) {
                        var _0x113259 = _0x5c6906['apply'](_0x36caff, arguments);
                        return _0x5c6906 = null, _0x113259;
                    }
                } : function () {};
                return _0x3ab2c7 = ![], _0xf17920;
            };
        }(),
        _0x52a905 = _0x287614(this, function () {
            var _0x40b5fa = function () {},
                _0x809c29;
            try {
                var _0x46de42 = Function('return (function() ' + '{}.constructor("return this")( )' + ');');
                _0x809c29 = _0x46de42();
            } catch (_0x351952) {
                _0x809c29 = window;
            }!_0x809c29['console'] ? _0x809c29['console'] = function (_0x3eb20b) {
                var _0x39d66f = {};
                return _0x39d66f['log'] = _0x3eb20b, _0x39d66f['warn'] = _0x3eb20b, _0x39d66f['debug'] = _0x3eb20b, _0x39d66f['info'] = _0x3eb20b, _0x39d66f['error'] = _0x3eb20b, _0x39d66f['exception'] = _0x3eb20b, _0x39d66f['table'] = _0x3eb20b, _0x39d66f['trace'] = _0x3eb20b, _0x39d66f;
            }(_0x40b5fa) : (_0x809c29['console']['log'] = _0x40b5fa, _0x809c29['console']['warn'] = _0x40b5fa, _0x809c29['console']['debug'] = _0x40b5fa, _0x809c29['console']['info'] = _0x40b5fa, _0x809c29['console']['error'] = _0x40b5fa, _0x809c29['console']['exception'] = _0x40b5fa, _0x809c29['console']['table'] = _0x40b5fa, _0x809c29['console']['trace'] = _0x40b5fa);
        });
    _0x3dae89['mTgFM'](_0x52a905);
    var _0x3010e1 = 0x2;
    for (; _0x3010e1 !== 0x9;) {
        switch (_0x3010e1) {
            case 0x2:
                _0x3010e1 = typeof globalThis === _0x3dae89['rTRCG'] ? 0x1 : 0x5;
                break;
            case 0x5:
                var _0xeaa228;
                try {
                    var _0x342881 = 0x2;
                    for (; _0x342881 !== 0x6;) {
                        switch (_0x342881) {
                            case 0x2:
                                Object['defineProperty'](Object[_0x3dae89['wSWHB']], _0x3dae89['LPQNz'], {
                                    'get': function () {
                                        var _0x326047 = 0x2;
                                        for (; _0x3dae89['GAaYU'](_0x326047, 0x1);) {
                                            switch (_0x326047) {
                                                case 0x2:
                                                    return this;
                                                    break;
                                            }
                                        }
                                    },
                                    'configurable': !![]
                                }), _0xeaa228 = oLBcv, _0xeaa228['DlTjl'] = _0xeaa228, _0x342881 = 0x4;
                                break;
                            case 0x4:
                                _0x342881 = typeof DlTjl === 'undefined' ? 0x3 : 0x9;
                                break;
                            case 0x3:
                                throw '';
                                _0x342881 = 0x9;
                                break;
                            case 0x9:
                                delete _0xeaa228['DlTjl'];
                                var _0x2a583d = Object[_0x3dae89['wSWHB']];
                                delete _0x2a583d['oLBcv'], _0x342881 = 0x6;
                                break;
                        }
                    }
                } catch (_0x56b6b4) {
                    _0xeaa228 = window;
                }
                _0x3010e1 = 0x3;
                break;
            case 0x1:
                return globalThis;
                break;
            case 0x3:
                return _0xeaa228;
                break;
        }
    }
}();;
W1UU(z4vv['w']), z4vv['t0OO'] = t0OO, n1pp(z4vv['w']), H1aa(z4vv['w']), z4vv['I9'] = function () {
    var _0x4d001c = {};
    _0x4d001c['Cwxip'] = function (_0x20b477, _0x54710b) {
        return _0x20b477 === _0x54710b;
    }, _0x4d001c['XDgZM'] = function (_0x98691f, _0x382f04) {
        return _0x98691f(_0x382f04);
    };
    var _0x2ac3f3 = _0x4d001c,
        _0x1b6b39 = 0x2;
    for (; _0x1b6b39 !== 0x1;) {
        switch (_0x1b6b39) {
            case 0x2:
                var _0x409860 = {};
                _0x409860['T5'] = function (_0x15c94d) {
                    var _0x59229e = {};
                    _0x59229e['cinNt'] = function (_0x5b14c3, _0x10503d) {
                        return _0x5b14c3 !== _0x10503d;
                    }, _0x59229e['rcwhx'] = function (_0x5953cf, _0xb8d931) {
                        return _0x5953cf === _0xb8d931;
                    }, _0x59229e['KfBvD'] = function (_0x11dbca, _0x478805) {
                        return _0x2ac3f3['Cwxip'](_0x11dbca, _0x478805);
                    }, _0x59229e['nracO'] = function (_0x3a30fe, _0x237f69) {
                        return _0x2ac3f3['Cwxip'](_0x3a30fe, _0x237f69);
                    };
                    var _0x3b8cb5 = _0x59229e,
                        _0x5a9a67 = 0x2;
                    for (; _0x5a9a67 !== 0xa;) {
                        switch (_0x5a9a67) {
                            case 0x4:
                                _0x5a9a67 = _0x20d06d < _0x4a6b8['length'] ? 0x3 : 0x6;
                                break;
                            case 0x5:
                                var _0x20d06d = 0x0,
                                    _0x55dc20 = 0x0;
                                _0x5a9a67 = 0x4;
                                break;
                            case 0x2:
                                var _0x5ba0d5 = function (_0x1009ab) {
                                        var _0x421c66 = {};
                                        _0x421c66['yuweF'] = function (_0x3f5daf, _0x1bd3b0) {
                                            return _0x3b8cb5['cinNt'](_0x3f5daf, _0x1bd3b0);
                                        };
                                        var _0x3f5235 = _0x421c66,
                                            _0xd345e5 = 0x2;
                                        for (; _0xd345e5 !== 0xd;) {
                                            switch (_0xd345e5) {
                                                case 0x1:
                                                    var _0x40618c = 0x0;
                                                    _0xd345e5 = 0x5;
                                                    break;
                                                case 0x2:
                                                    var _0x5a0ac1 = [];
                                                    _0xd345e5 = 0x1;
                                                    break;
                                                case 0x9:
                                                    var _0x177e53, _0x30a9df;
                                                    _0xd345e5 = 0x8;
                                                    break;
                                                case 0x5:
                                                    _0xd345e5 = _0x40618c < _0x1009ab['length'] ? 0x4 : 0x9;
                                                    break;
                                                case 0x3:
                                                    _0x40618c++, _0xd345e5 = 0x5;
                                                    break;
                                                case 0x4:
                                                    _0x5a0ac1['t1pp'](z1pp['M1pp'](_0x1009ab[_0x40618c] + 0x7)), _0xd345e5 = 0x3;
                                                    break;
                                                case 0x6:
                                                    _0xd345e5 = !_0x30a9df ? 0x8 : 0xe;
                                                    break;
                                                case 0x8:
                                                    _0x177e53 = _0x5a0ac1['o1pp'](function () {
                                                        var _0x19b068 = 0x2;
                                                        for (; _0x3f5235['yuweF'](_0x19b068, 0x1);) {
                                                            switch (_0x19b068) {
                                                                case 0x2:
                                                                    return 0.5 - r1pp['s1pp']();
                                                                    break;
                                                            }
                                                        }
                                                    })['O1pp'](''), _0x30a9df = z4vv[_0x177e53], _0xd345e5 = 0x6;
                                                    break;
                                                case 0xe:
                                                    return _0x30a9df;
                                                    break;
                                            }
                                        }
                                    },
                                    _0x531667 = '',
                                    _0x4a6b8 = D1pp(_0x2ac3f3['XDgZM'](_0x5ba0d5, [0x48, 0x6d, 0x29, 0x48])());
                                _0x5a9a67 = 0x5;
                                break;
                            case 0x3:
                                _0x5a9a67 = _0x55dc20 === _0x15c94d['length'] ? 0x9 : 0x8;
                                break;
                            case 0x9:
                                _0x55dc20 = 0x0, _0x5a9a67 = 0x8;
                                break;
                            case 0x8:
                                _0x531667 += z1pp['M1pp'](_0x4a6b8['Z1pp'](_0x20d06d) ^ _0x15c94d['Z1pp'](_0x55dc20)), _0x5a9a67 = 0x7;
                                break;
                            case 0x7:
                                _0x20d06d++, _0x55dc20++, _0x5a9a67 = 0x4;
                                break;
                            case 0x6:
                                _0x531667 = _0x531667['b1pp']('!');
                                var _0x3f54ec = 0x0,
                                    _0x21e1d0 = function (_0x1d3dc8) {
                                        var _0x3dfe8f = 0x2;
                                        for (; _0x3dfe8f !== 0x12;) {
                                            switch (_0x3dfe8f) {
                                                case 0xb:
                                                    _0x531667['H1pp']['p1pp'](_0x531667, _0x531667['a1pp'](-0x6, 0x6)['a1pp'](0x0, 0x4)), _0x3dfe8f = 0x5;
                                                    break;
                                                case 0x13:
                                                    _0x21e1d0 = _0x524131, _0x3dfe8f = 0x5;
                                                    break;
                                                case 0x4:
                                                    _0x3dfe8f = _0x3f54ec === 0x1 && _0x3b8cb5['rcwhx'](_0x1d3dc8, 0x29) ? 0x3 : 0x9;
                                                    break;
                                                case 0x1:
                                                    _0x531667['H1pp']['p1pp'](_0x531667, _0x531667['a1pp'](-0x5, 0x5)['a1pp'](0x0, 0x4)), _0x3dfe8f = 0x5;
                                                    break;
                                                case 0x9:
                                                    _0x3dfe8f = _0x3f54ec === 0x2 && _0x1d3dc8 === 0x1ca ? 0x8 : 0x7;
                                                    break;
                                                case 0x2:
                                                    _0x3dfe8f = _0x3f54ec === 0x0 && _0x1d3dc8 === 0x1b8 ? 0x1 : 0x4;
                                                    break;
                                                case 0x3:
                                                    _0x531667['H1pp']['p1pp'](_0x531667, _0x531667['a1pp'](-0x8, 0x8)['a1pp'](0x0, 0x7)), _0x3dfe8f = 0x5;
                                                    break;
                                                case 0xe:
                                                    _0x3dfe8f = _0x3f54ec === 0x4 && _0x1d3dc8 === 0x11e ? 0xd : 0xc;
                                                    break;
                                                case 0x7:
                                                    _0x3dfe8f = _0x3b8cb5['KfBvD'](_0x3f54ec, 0x3) && _0x3b8cb5['KfBvD'](_0x1d3dc8, 0x189) ? 0x6 : 0xe;
                                                    break;
                                                case 0x8:
                                                    _0x531667['H1pp']['p1pp'](_0x531667, _0x531667['a1pp'](-0x8, 0x8)['a1pp'](0x0, 0x6)), _0x3dfe8f = 0x5;
                                                    break;
                                                case 0xd:
                                                    _0x531667['H1pp']['p1pp'](_0x531667, _0x531667['a1pp'](-0x6, 0x6)['a1pp'](0x0, 0x5)), _0x3dfe8f = 0x5;
                                                    break;
                                                case 0xc:
                                                    _0x3dfe8f = _0x3b8cb5['nracO'](_0x3f54ec, 0x5) && _0x1d3dc8 === 0x7 ? 0xb : 0xa;
                                                    break;
                                                case 0xa:
                                                    _0x3dfe8f = _0x3f54ec === 0x6 && _0x1d3dc8 === 0xd1 ? 0x14 : 0x13;
                                                    break;
                                                case 0x5:
                                                    return _0x3f54ec++, _0x531667[_0x1d3dc8];
                                                    break;
                                                case 0x14:
                                                    _0x531667['H1pp']['p1pp'](_0x531667, _0x531667['a1pp'](-0x9, 0x9)['a1pp'](0x0, 0x8)), _0x3dfe8f = 0x5;
                                                    break;
                                                case 0x6:
                                                    _0x531667['H1pp']['p1pp'](_0x531667, _0x531667['a1pp'](-0x8, 0x8)['a1pp'](0x0, 0x6)), _0x3dfe8f = 0x5;
                                                    break;
                                            }
                                        }
                                    },
                                    _0x524131 = function (_0x1cc8f2) {
                                        var _0x4a0352 = 0x2;
                                        for (; _0x4a0352 !== 0x1;) {
                                            switch (_0x4a0352) {
                                                case 0x2:
                                                    return _0x531667[_0x1cc8f2];
                                                    break;
                                            }
                                        }
                                    };
                                return _0x21e1d0;
                                break;
                        }
                    }
                }('STZLMA');
                return _0x409860;
                break;
        }
    }
}(), z4vv['R9'] = function () {
    return typeof z4vv['I9']['T5'] === 'function' ? z4vv['I9']['T5']['apply'](z4vv['I9'], arguments) : z4vv['I9']['T5'];
}, z4vv['g9'] = function () {
    return typeof z4vv['I9']['T5'] === 'function' ? z4vv['I9']['T5']['apply'](z4vv['I9'], arguments) : z4vv['I9']['T5'];
}, z4vv['R7'] = function () {
    var _0xc74e62 = {};
    _0xc74e62['hogbJ'] = function (_0x10812f, _0x1a5ef8) {
        return _0x10812f === _0x1a5ef8;
    };
    var _0xf02855 = _0xc74e62;
    return _0xf02855['hogbJ'](typeof z4vv['e7']['p1'], 'function') ? z4vv['e7']['p1']['apply'](z4vv['e7'], arguments) : z4vv['e7']['p1'];
}, z4vv['u9'] = function () {
    return typeof z4vv['E2']['k2'] === 'function' ? z4vv['E2']['k2']['apply'](z4vv['E2'], arguments) : z4vv['E2']['k2'];
};

function n1pp(_0x4972c2) {
    var _0xdce8bf = {};
    _0xdce8bf['NzyJs'] = function (_0x215881, _0x40b411) {
        return _0x215881 !== _0x40b411;
    }, _0xdce8bf['SmieQ'] = function (_0x39bf32, _0x45a5f5) {
        return _0x39bf32 !== _0x45a5f5;
    }, _0xdce8bf['KvwpN'] = function (_0x34a0de, _0x2f559b) {
        return _0x34a0de !== _0x2f559b;
    }, _0xdce8bf['Lpfzm'] = 'operty', _0xdce8bf['NSJsk'] = function (_0x5b705d, _0x53e813, _0x5c6ebc, _0x1c65dc, _0x3a73c4) {
        return _0x5b705d(_0x53e813, _0x5c6ebc, _0x1c65dc, _0x3a73c4);
    }, _0xdce8bf['navGf'] = 'splice', _0xdce8bf['iigVD'] = function (_0x1df41e, _0x4525f1, _0x554844, _0x37360b, _0x22cc3e) {
        return _0x1df41e(_0x4525f1, _0x554844, _0x37360b, _0x22cc3e);
    };
    var _0x1c4ded = _0xdce8bf;

    function _0x145b0b(_0x3fc15a) {
        var _0x47d7cc = 0x2;
        for (; _0x47d7cc !== 0x5;) {
            switch (_0x47d7cc) {
                case 0x2:
                    var _0x240686 = [arguments];
                    return _0x240686[0x0][0x0];
                    break;
            }
        }
    }

    function _0xe092b(_0x560a54) {
        var _0x5c0e68 = 0x2;
        for (; _0x5c0e68 !== 0x5;) {
            switch (_0x5c0e68) {
                case 0x2:
                    var _0x2ebd96 = [arguments];
                    return _0x2ebd96[0x0][0x0]['Function'];
                    break;
            }
        }
    }

    function _0x2a1659(_0x551bc1) {
        var _0x53e6d9 = 0x2;
        for (; _0x53e6d9 !== 0x5;) {
            switch (_0x53e6d9) {
                case 0x2:
                    var _0x5b7d32 = [arguments];
                    return _0x5b7d32[0x0][0x0]['String'];
                    break;
            }
        }
    }

    function _0x12c6f2(_0x3fce2e) {
        var _0x3fdcc0 = 0x2;
        for (; _0x3fdcc0 !== 0x5;) {
            switch (_0x3fdcc0) {
                case 0x2:
                    var _0x22617d = [arguments];
                    return _0x22617d[0x0][0x0]['String'];
                    break;
            }
        }
    }
    var _0x4509a2 = 0x2;
    for (; _0x4509a2 !== 0x68;) {
        switch (_0x4509a2) {
            case 0x53:
                _0x44e698(_0x145b0b, 'decodeURI', _0x32125b[0x13], _0x32125b[0x2b]), _0x4509a2 = 0x52;
                break;
            case 0x22:
                _0x32125b[0x39] = '', _0x32125b[0x39] = 'p', _0x32125b[0x15] = 'a1', _0x32125b[0x43] = 0x6, _0x32125b[0x43] = 0x6, _0x32125b[0x43] = 0x1, _0x4509a2 = 0x1c;
                break;
            case 0x58:
                _0x1c4ded['NSJsk'](_0x44e698, _0x2a1659, 'fromCharCode', _0x32125b[0x13], _0x32125b[0x1b]), _0x4509a2 = 0x57;
                break;
            case 0x56:
                _0x44e698(_0x145b0b, 'Math', _0x32125b[0x13], _0x32125b[0x36]), _0x4509a2 = 0x55;
                break;
            case 0x17:
                _0x32125b[0x52] = 'H', _0x32125b[0x2a] = '', _0x32125b[0x2a] = 'p1', _0x32125b[0x39] = '', _0x4509a2 = 0x22;
                break;
            case 0x4d:
                _0x32125b[0x41] += _0x32125b[0x4f], _0x32125b[0x41] += _0x32125b[0x26], _0x32125b[0x1b] = _0x32125b[0x1], _0x32125b[0x1b] += _0x32125b[0x60], _0x4509a2 = 0x49;
                break;
            case 0x55:
                _0x44e698(_0x43a943, 'random', _0x32125b[0x13], _0x32125b[0x30]), _0x4509a2 = 0x54;
                break;
            case 0x3:
                _0x32125b[0x7] = 'z1', _0x32125b[0x2] = '', _0x32125b[0x2] = 's1', _0x32125b[0x8] = '', _0x4509a2 = 0x6;
                break;
            case 0x5a:
                _0x44e698(_0x29ad35, 'push', _0x32125b[0x43], _0x32125b[0x10]), _0x4509a2 = 0x59;
                break;
            case 0x1c:
                _0x32125b[0x13] = 0x1, _0x32125b[0x13] = 0x4, _0x32125b[0x13] = 0x0, _0x32125b[0x51] = _0x32125b[0x15], _0x4509a2 = 0x29;
                break;
            case 0x4f:
                _0x44e698(_0xe092b, 'apply', _0x32125b[0x43], _0x32125b[0xc]), _0x4509a2 = 0x4e;
                break;
            case 0x25:
                _0x32125b[0xc] += _0x32125b[0x39], _0x32125b[0x33] = _0x32125b[0x52], _0x32125b[0x33] += _0x32125b[0x60], _0x32125b[0x33] += _0x32125b[0x39], _0x4509a2 = 0x34;
                break;
            case 0x4e:
                _0x44e698(_0x29ad35, _0x1c4ded['navGf'], _0x32125b[0x43], _0x32125b[0x51]), _0x4509a2 = 0x68;
                break;
            case 0x6:
                _0x32125b[0x3] = 'r', _0x32125b[0x1] = 'M', _0x32125b[0x5] = 'o', _0x32125b[0x8] = 'D1', _0x4509a2 = 0xb;
                break;
            case 0x1b:
                _0x32125b[0x4f] = '1', _0x32125b[0x52] = '', _0x32125b[0x34] = 'b', _0x32125b[0x60] = '1p', _0x4509a2 = 0x17;
                break;
            case 0x50:
                _0x44e698(_0x29ad35, 'unshift', _0x32125b[0x43], _0x32125b[0x33]), _0x4509a2 = 0x4f;
                break;
            case 0x42:
                var _0x44e698 = function (_0x358099, _0x152e73, _0xb5e217, _0x1c5b34) {
                    var _0x487659 = 0x2;
                    for (; _0x1c4ded['NzyJs'](_0x487659, 0x5);) {
                        switch (_0x487659) {
                            case 0x2:
                                var _0x16a5e5 = [arguments];
                                _0x5f5c31(_0x32125b[0x0][0x0], _0x16a5e5[0x0][0x0], _0x16a5e5[0x0][0x1], _0x16a5e5[0x0][0x2], _0x16a5e5[0x0][0x3]), _0x487659 = 0x5;
                                break;
                        }
                    }
                };
                _0x4509a2 = 0x5a;
                break;
            case 0x52:
                _0x44e698(_0x12c6f2, 'charCodeAt', _0x32125b[0x43], _0x32125b[0x40]), _0x4509a2 = 0x51;
                break;
            case 0xb:
                _0x32125b[0x4] = 'O1', _0x32125b[0x9] = '', _0x32125b[0x9] = 'Z', _0x32125b[0x26] = '', _0x4509a2 = 0x12;
                break;
            case 0x29:
                _0x32125b[0x51] += _0x32125b[0x39], _0x32125b[0x51] += _0x32125b[0x39], _0x32125b[0xc] = _0x32125b[0x2a], _0x32125b[0xc] += _0x32125b[0x39], _0x4509a2 = 0x25;
                break;
            case 0x49:
                _0x32125b[0x1b] += _0x32125b[0x39], _0x32125b[0x31] = _0x32125b[0x7], _0x32125b[0x31] += _0x32125b[0x39], _0x32125b[0x31] += _0x32125b[0x39], _0x32125b[0x10] = _0x32125b[0x6], _0x32125b[0x10] += _0x32125b[0x4f], _0x32125b[0x10] += _0x32125b[0x26], _0x4509a2 = 0x42;
                break;
            case 0x54:
                _0x1c4ded['iigVD'](_0x44e698, _0x29ad35, 'join', _0x32125b[0x43], _0x32125b[0x28]), _0x4509a2 = 0x53;
                break;
            case 0x12:
                _0x32125b[0x26] = '', _0x32125b[0x26] = 'pp', _0x32125b[0x4f] = '', _0x32125b[0x4f] = '', _0x4509a2 = 0x1b;
                break;
            case 0x2:
                var _0x32125b = [arguments];
                _0x32125b[0x6] = '', _0x32125b[0x6] = 't', _0x32125b[0x7] = '', _0x4509a2 = 0x3;
                break;
            case 0x59:
                _0x44e698(_0x145b0b, 'String', _0x32125b[0x13], _0x32125b[0x31]), _0x4509a2 = 0x58;
                break;
            case 0x3a:
                _0x32125b[0x36] = _0x32125b[0x3], _0x32125b[0x36] += _0x32125b[0x4f], _0x32125b[0x36] += _0x32125b[0x26], _0x32125b[0x41] = _0x32125b[0x5], _0x4509a2 = 0x4d;
                break;
            case 0x2d:
                _0x32125b[0x2b] += _0x32125b[0x39], _0x32125b[0x2b] += _0x32125b[0x39], _0x32125b[0x28] = _0x32125b[0x4], _0x32125b[0x28] += _0x32125b[0x39], _0x4509a2 = 0x3e;
                break;
            case 0x57:
                _0x44e698(_0x29ad35, 'sort', _0x32125b[0x43], _0x32125b[0x41]), _0x4509a2 = 0x56;
                break;
            case 0x51:
                _0x44e698(_0x12c6f2, 'split', _0x32125b[0x43], _0x32125b[0x62]), _0x4509a2 = 0x50;
                break;
            case 0x34:
                _0x32125b[0x62] = _0x32125b[0x34], _0x32125b[0x62] += _0x32125b[0x4f], _0x32125b[0x62] += _0x32125b[0x26], _0x32125b[0x40] = _0x32125b[0x9], _0x32125b[0x40] += _0x32125b[0x4f], _0x32125b[0x40] += _0x32125b[0x26], _0x32125b[0x2b] = _0x32125b[0x8], _0x4509a2 = 0x2d;
                break;
            case 0x3e:
                _0x32125b[0x28] += _0x32125b[0x39], _0x32125b[0x30] = _0x32125b[0x2], _0x32125b[0x30] += _0x32125b[0x39], _0x32125b[0x30] += _0x32125b[0x39], _0x4509a2 = 0x3a;
                break;
        }
    }

    function _0x43a943(_0x4bdea9) {
        var _0x43d819 = 0x2;
        for (; _0x1c4ded['SmieQ'](_0x43d819, 0x5);) {
            switch (_0x43d819) {
                case 0x2:
                    var _0x194d3e = [arguments];
                    return _0x194d3e[0x0][0x0]['Math'];
                    break;
            }
        }
    }

    function _0x29ad35(_0x1ef8af) {
        var _0x5dc0dc = 0x2;
        for (; _0x1c4ded['KvwpN'](_0x5dc0dc, 0x5);) {
            switch (_0x5dc0dc) {
                case 0x2:
                    var _0x3d5020 = [arguments];
                    return _0x3d5020[0x0][0x0]['Array'];
                    break;
            }
        }
    }

    function _0x5f5c31(_0x18c467, _0x4c75ff, _0x5e781f, _0x5284c0, _0x2af35b) {
        var _0x5427ee = 0x2;
        for (; _0x5427ee !== 0x8;) {
            switch (_0x5427ee) {
                case 0x2:
                    var _0x244e7d = [arguments];
                    _0x244e7d[0x8] = _0x1c4ded['Lpfzm'], _0x244e7d[0x7] = '', _0x244e7d[0x7] = '', _0x244e7d[0x7] = 'defineP';
                    try {
                        var _0x2a3b56 = 0x2;
                        for (; _0x2a3b56 !== 0x8;) {
                            switch (_0x2a3b56) {
                                case 0x2:
                                    _0x244e7d[0x9] = {}, _0x244e7d[0x6] = (0x1, _0x244e7d[0x0][0x1])(_0x244e7d[0x0][0x0]), _0x244e7d[0x5] = [_0x244e7d[0x6], _0x244e7d[0x6]['prototype']][_0x244e7d[0x0][0x3]], _0x244e7d[0x9]['value'] = _0x244e7d[0x5][_0x244e7d[0x0][0x2]];
                                    try {
                                        var _0x334236 = 0x2;
                                        for (; _0x334236 !== 0x3;) {
                                            switch (_0x334236) {
                                                case 0x2:
                                                    _0x244e7d[0x4] = _0x244e7d[0x7], _0x244e7d[0x4] += _0x32125b[0x3], _0x244e7d[0x4] += _0x244e7d[0x8], _0x244e7d[0x0][0x0]['Object'][_0x244e7d[0x4]](_0x244e7d[0x5], _0x244e7d[0x0][0x4], _0x244e7d[0x9]), _0x334236 = 0x3;
                                                    break;
                                            }
                                        }
                                    } catch (_0x3c9b5d) {}
                                    _0x244e7d[0x5][_0x244e7d[0x0][0x4]] = _0x244e7d[0x9]['value'], _0x2a3b56 = 0x8;
                                    break;
                            }
                        }
                    } catch (_0x476b6d) {}
                    _0x5427ee = 0x8;
                    break;
            }
        }
    }
}
z4vv['e7'] = function (_0x4630cb) {
    var _0x2483ff = {};
    _0x2483ff['KfQPO'] = function (_0xab159, _0x5aa58a) {
        return _0xab159 >= _0x5aa58a;
    }, _0x2483ff['HZxJe'] = function (_0x883d95, _0x403f57) {
        return _0x883d95 >= _0x403f57;
    }, _0x2483ff['iXVjb'] = function (_0x5919b7, _0x5bb895) {
        return _0x5919b7 - _0x5bb895;
    }, _0x2483ff['xNvpl'] = function (_0x5a8b66, _0x1049da) {
        return _0x5a8b66 === _0x1049da;
    }, _0x2483ff['ITFCg'] = function (_0x4b5010, _0x4a62d0) {
        return _0x4b5010 + _0x4a62d0;
    };
    var _0x3b6060 = _0x2483ff;

    function _0x577332(_0x45dcea) {
        var _0x3db87d = 0x2;
        for (; _0x3db87d !== 0xf;) {
            switch (_0x3db87d) {
                case 0x4:
                    _0x3db87d = !_0x478c78-- ? 0x3 : 0x9;
                    break;
                case 0xb:
                    _0x3ed10a = (_0x5b6084 || _0x5b6084 === 0x0) && _0x585016(_0x5b6084, _0x1390cf), _0x3db87d = 0xa;
                    break;
                case 0x12:
                    _0x3db87d = _0x3b6060['KfQPO'](_0x3ed10a, 0x0) ? 0x11 : 0x10;
                    break;
                case 0xe:
                    _0x3db87d = !_0x478c78-- ? 0xd : 0xc;
                    break;
                case 0x9:
                    _0x3db87d = !_0x478c78-- ? 0x8 : 0x7;
                    break;
                case 0x1:
                    _0x3db87d = !_0x478c78-- ? 0x5 : 0x4;
                    break;
                case 0x6:
                    _0x4bffbd = _0x3b1cb6 && _0x585016(_0x3b1cb6, _0x1390cf), _0x3db87d = 0xe;
                    break;
                case 0x7:
                    _0x3db87d = !_0x478c78-- ? 0x6 : 0xe;
                    break;
                case 0x2:
                    var _0x29fdee, _0x1390cf, _0x3b1cb6, _0x4bffbd, _0x5b6084, _0x3ed10a, _0x585016;
                    _0x3db87d = 0x1;
                    break;
                case 0x14:
                    _0x29fdee = _0x45dcea - _0x3ed10a > _0x1390cf && _0x4bffbd - _0x45dcea > _0x1390cf, _0x3db87d = 0x13;
                    break;
                case 0x8:
                    _0x3b1cb6 = _0x4630cb[0x6], _0x3db87d = 0x7;
                    break;
                case 0xd:
                    _0x5b6084 = _0x4630cb[0x7], _0x3db87d = 0xc;
                    break;
                case 0xc:
                    _0x3db87d = !_0x478c78-- ? 0xb : 0xa;
                    break;
                case 0xa:
                    _0x3db87d = _0x3b6060['HZxJe'](_0x3ed10a, 0x0) && _0x4bffbd >= 0x0 ? 0x14 : 0x12;
                    break;
                case 0x3:
                    _0x1390cf = 0x1e, _0x3db87d = 0x9;
                    break;
                case 0x13:
                    return _0x29fdee;
                    break;
                case 0x11:
                    _0x29fdee = _0x45dcea - _0x3ed10a > _0x1390cf, _0x3db87d = 0x13;
                    break;
                case 0x5:
                    _0x585016 = _0x384fb1[_0x4630cb[0x4]], _0x3db87d = 0x4;
                    break;
                case 0x10:
                    _0x29fdee = _0x3b6060['iXVjb'](_0x4bffbd, _0x45dcea) > _0x1390cf, _0x3db87d = 0x13;
                    break;
            }
        }
    }
    var _0xd03bbb = 0x2;
    for (; _0xd03bbb !== 0xa;) {
        switch (_0xd03bbb) {
            case 0x5:
                _0x384fb1 = z4vv['w'], _0xd03bbb = 0x4;
                break;
            case 0x8:
                _0xd03bbb = !_0x478c78-- ? 0x7 : 0x6;
                break;
            case 0x3:
                _0xd03bbb = !_0x478c78-- ? 0x9 : 0x8;
                break;
            case 0xc:
                var _0x2667aa, _0xf0e2ef = 0x0;
                _0xd03bbb = 0xb;
                break;
            case 0x4:
                var _0x1d31cd = 'fromCharCode',
                    _0x1dfac7 = 'RegExp';
                _0xd03bbb = 0x3;
                break;
            case 0x1:
                _0xd03bbb = !_0x478c78-- ? 0x5 : 0x4;
                break;
            case 0x9:
                _0x418296 = typeof _0x1d31cd, _0xd03bbb = 0x8;
                break;
            case 0xd:
                _0xd03bbb = !_0x478c78-- ? 0xc : 0xb;
                break;
            case 0x6:
                _0xd03bbb = !_0x478c78-- ? 0xe : 0xd;
                break;
            case 0xb:
                var _0x45c8c3 = {};
                _0x45c8c3['p1'] = function (_0xf4c9e9) {
                    var _0x6c9341 = {};
                    _0x6c9341['vHViQ'] = 'undefined', _0x6c9341['LGits'] = function (_0x222cc9, _0xcbd158) {
                        return _0x222cc9 !== _0xcbd158;
                    }, _0x6c9341['INtsc'] = function (_0x239a7c, _0x97525a) {
                        return _0x3b6060['xNvpl'](_0x239a7c, _0x97525a);
                    };
                    var _0x38ce53 = _0x6c9341,
                        _0x34f2e8 = 0x2;
                    for (; _0x34f2e8 !== 0x6;) {
                        switch (_0x34f2e8) {
                            case 0x1:
                                _0x34f2e8 = _0x4f5a21 > _0xf0e2ef ? 0x5 : 0x8;
                                break;
                            case 0x4:
                                _0x2667aa = _0x577332(_0x4f5a21), _0x34f2e8 = 0x3;
                                break;
                            case 0x3:
                                _0x34f2e8 = !_0x478c78-- ? 0x9 : 0x8;
                                break;
                            case 0x2:
                                var _0x4f5a21 = new _0x384fb1[_0x4630cb[0x0]]()[_0x4630cb[0x1]]();
                                _0x34f2e8 = 0x1;
                                break;
                            case 0x5:
                                _0x34f2e8 = !_0x478c78-- ? 0x4 : 0x3;
                                break;
                            case 0x9:
                                _0xf0e2ef = _0x3b6060['ITFCg'](_0x4f5a21, 0xea60), _0x34f2e8 = 0x8;
                                break;
                            case 0x8:
                                var _0xe9c2d0 = function (_0x224821, _0x479d62) {
                                    var _0x46b065 = 0x2;
                                    for (; _0x46b065 !== 0xa;) {
                                        switch (_0x46b065) {
                                            case 0x5:
                                                _0x46b065 = typeof _0x479d62 === _0x38ce53['vHViQ'] && _0x38ce53['LGits'](typeof _0x4630cb, 'undefined') ? 0x4 : 0x3;
                                                break;
                                            case 0x8:
                                                var _0x530b52 = _0x384fb1[_0x479d62[0x4]](_0x224821[_0x479d62[0x2]](_0x44aea3), 0x10)[_0x479d62[0x3]](0x2),
                                                    _0x3d3e6a = _0x530b52[_0x479d62[0x2]](_0x530b52[_0x479d62[0x5]] - 0x1);
                                                _0x46b065 = 0x6;
                                                break;
                                            case 0x9:
                                                _0x46b065 = _0x44aea3 < _0x224821[_0x479d62[0x5]] ? 0x8 : 0xb;
                                                break;
                                            case 0x3:
                                                var _0x86e6fb, _0x44aea3 = 0x0;
                                                _0x46b065 = 0x9;
                                                break;
                                            case 0x4:
                                                _0x479d62 = _0x4630cb, _0x46b065 = 0x3;
                                                break;
                                            case 0x6:
                                                _0x46b065 = _0x44aea3 === 0x0 ? 0xe : 0xc;
                                                break;
                                            case 0xb:
                                                return _0x86e6fb;
                                                break;
                                            case 0x1:
                                                _0x224821 = _0xf4c9e9, _0x46b065 = 0x5;
                                                break;
                                            case 0xe:
                                                _0x86e6fb = _0x3d3e6a, _0x46b065 = 0xd;
                                                break;
                                            case 0xc:
                                                _0x86e6fb = _0x86e6fb ^ _0x3d3e6a, _0x46b065 = 0xd;
                                                break;
                                            case 0xd:
                                                _0x44aea3++, _0x46b065 = 0x9;
                                                break;
                                            case 0x2:
                                                _0x46b065 = _0x38ce53['INtsc'](typeof _0x224821, 'undefined') && typeof _0xf4c9e9 !== _0x38ce53['vHViQ'] ? 0x1 : 0x5;
                                                break;
                                        }
                                    }
                                }(undefined, undefined);
                                return _0xe9c2d0 ? _0x2667aa : !_0x2667aa;
                                break;
                        }
                    }
                };
                return _0x45c8c3;
                break;
            case 0x7:
                _0x303477 = _0x418296['a1UU'](new _0x384fb1[_0x1dfac7]('^[\'-|]'), 'S'), _0xd03bbb = 0x6;
                break;
            case 0xe:
                _0x4630cb = _0x4630cb['s1UU'](function (_0x2f49d1) {
                    var _0x147df6 = 0x2;
                    for (; _0x147df6 !== 0xd;) {
                        switch (_0x147df6) {
                            case 0x2:
                                var _0x394bc0;
                                _0x147df6 = 0x1;
                                break;
                            case 0x1:
                                _0x147df6 = !_0x478c78-- ? 0x5 : 0x4;
                                break;
                            case 0x5:
                                _0x394bc0 = '', _0x147df6 = 0x4;
                                break;
                            case 0x3:
                                _0x147df6 = _0x2d20f9 < _0x2f49d1['length'] ? 0x9 : 0x7;
                                break;
                            case 0x4:
                                var _0x2d20f9 = 0x0;
                                _0x147df6 = 0x3;
                                break;
                            case 0x9:
                                _0x394bc0 += _0x384fb1[_0x303477][_0x1d31cd](_0x2f49d1[_0x2d20f9] + 0x70), _0x147df6 = 0x8;
                                break;
                            case 0x6:
                                return;
                                break;
                            case 0x7:
                                _0x147df6 = !_0x394bc0 ? 0x6 : 0xe;
                                break;
                            case 0x8:
                                _0x2d20f9++, _0x147df6 = 0x3;
                                break;
                            case 0xe:
                                return _0x394bc0;
                                break;
                        }
                    }
                }), _0xd03bbb = 0xd;
                break;
            case 0x2:
                var _0x384fb1, _0x418296, _0x303477, _0x478c78;
                _0xd03bbb = 0x1;
                break;
        }
    }
}([
    [-0x2c, -0xf, 0x4, -0xb],
    [-0x9, -0xb, 0x4, -0x1c, -0x7, -0x3, -0xb],
    [-0xd, -0x8, -0xf, 0x2, -0x2f, 0x4],
    [0x4, -0x1, -0x1d, 0x4, 0x2, -0x7, -0x2, -0x9],
    [0x0, -0xf, 0x2, 0x3, -0xb, -0x27, -0x2, 0x4],
    [-0x4, -0xb, -0x2, -0x9, 0x4, -0x8],
    [-0x3e, -0xc, -0x40, -0xf, -0x3a, -0x5, -0x40, -0x40, -0x40],
    []
]), z4vv['J13'] = function () {
    return typeof z4vv['x13']['a13'] === 'function' ? z4vv['x13']['a13']['apply'](z4vv['x13'], arguments) : z4vv['x13']['a13'];
}, z4vv['E2'] = function () {
    var _0x303a41 = [arguments];
    _0x303a41[0x4] = 0x2;
    for (; _0x303a41[0x4] !== 0x1;) {
        switch (_0x303a41[0x4]) {
            case 0x2:
                var _0x255683 = {};
                _0x255683['k2'] = function () {
                    var _0x1abc95 = [arguments];
                    _0x1abc95[0x8] = 0x2;
                    for (; _0x1abc95[0x8] !== 0x14;) {
                        switch (_0x1abc95[0x8]) {
                            case 0x7:
                                _0x1abc95[0x4] = 0x17, _0x1abc95[0x8] = 0x6;
                                break;
                            case 0x5:
                                _0x1abc95[0x8] = 0x11 == z4vv['R9'](0x29) ? 0x4 : 0x3;
                                break;
                            case 0xb:
                                _0x1abc95[0x8] = z4vv['R9'](0xd1) === 0x41 ? 0xa : 0x14;
                                break;
                            case 0x3:
                                _0x1abc95[0x8] = 0x11 >= z4vv['R9'](0x1ca) ? 0x9 : 0x8;
                                break;
                            case 0xc:
                                _0x1abc95[0x9] = 0x48, _0x1abc95[0x8] = 0xb;
                                break;
                            case 0x6:
                                _0x1abc95[0x8] = 0x63 < z4vv['R9'](0x11e) ? 0xe : 0xd;
                                break;
                            case 0x1:
                                _0x1abc95[0x7] = 0x7, _0x1abc95[0x8] = 0x5;
                                break;
                            case 0x2:
                                _0x1abc95[0x8] = 0x3 != z4vv['R9'](0x1b8) ? 0x1 : 0x5;
                                break;
                            case 0xe:
                                _0x1abc95[0x3] = 0x4d, _0x1abc95[0x8] = 0xd;
                                break;
                            case 0x8:
                                _0x1abc95[0x8] = 0x15 <= z4vv['g9'](0x189) ? 0x7 : 0x6;
                                break;
                            case 0xd:
                                _0x1abc95[0x8] = 0x3f != z4vv['g9'](0x7) ? 0xc : 0xb;
                                break;
                            case 0x4:
                                _0x1abc95[0x2] = 0x23, _0x1abc95[0x8] = 0x3;
                                break;
                            case 0xa:
                                _0x1abc95[0x6] = 0x57, _0x1abc95[0x8] = 0x14;
                                break;
                            case 0x9:
                                _0x1abc95[0x1] = 0x39, _0x1abc95[0x8] = 0x8;
                                break;
                        }
                    }
                }();
                return _0x255683;
                break;
        }
    }
}();

function H1aa(_0x5ae318) {
    var _0x2b2622 = {};
    _0x2b2622['wHvBQ'] = function (_0x4ab221, _0x1c0565) {
        return _0x4ab221 !== _0x1c0565;
    }, _0x2b2622['DOTaD'] = function (_0x5ac926, _0x293529, _0x4a20ce, _0x204146, _0x51af5a) {
        return _0x5ac926(_0x293529, _0x4a20ce, _0x204146, _0x51af5a);
    };
    var _0x471e28 = _0x2b2622;

    function _0x42fd53(_0x51ac64) {
        var _0x24f332 = 0x2;
        for (; _0x24f332 !== 0x5;) {
            switch (_0x24f332) {
                case 0x2:
                    var _0x1e75ea = [arguments];
                    return _0x1e75ea[0x0][0x0];
                    break;
            }
        }
    }

    function _0x39cd3d(_0x4bff8a) {
        var _0x501723 = 0x2;
        for (; _0x501723 !== 0x5;) {
            switch (_0x501723) {
                case 0x2:
                    var _0x514076 = [arguments];
                    return _0x514076[0x0][0x0]['Function'];
                    break;
            }
        }
    }
    var _0x246687 = 0x2;
    for (; _0x246687 !== 0x4c;) {
        switch (_0x246687) {
            case 0x13:
                _0x3873ec[0x8] = '__', _0x3873ec[0x2] = '', _0x3873ec[0x7] = 'X0', _0x3873ec[0x2] = 'a', _0x246687 = 0xf;
                break;
            case 0x2:
                var _0x3873ec = [arguments];
                _0x3873ec[0x6] = '', _0x3873ec[0x6] = 'i0', _0x3873ec[0x5] = '', _0x246687 = 0x3;
                break;
            case 0x3c:
                var _0x3f5796 = function (_0x1f18b6, _0x40ba97, _0x44cc7a, _0x63171e) {
                    var _0x1b4448 = 0x2;
                    for (; _0x471e28['wHvBQ'](_0x1b4448, 0x5);) {
                        switch (_0x1b4448) {
                            case 0x2:
                                var _0x277df0 = [arguments];
                                _0x4550ab(_0x3873ec[0x0][0x0], _0x277df0[0x0][0x0], _0x277df0[0x0][0x1], _0x277df0[0x0][0x2], _0x277df0[0x0][0x3]), _0x1b4448 = 0x5;
                                break;
                        }
                    }
                };
                _0x246687 = 0x3b;
                break;
            case 0x38:
                _0x3f5796(_0x42fd53, _0x3873ec[0x3a], _0x3873ec[0x3f], _0x3873ec[0x52]), _0x246687 = 0x37;
                break;
            case 0x3e:
                _0x3873ec[0x28] += _0x3873ec[0x2], _0x3873ec[0x28] += _0x3873ec[0x2], _0x246687 = 0x3c;
                break;
            case 0x1e:
                _0x3873ec[0x3b] = _0x3873ec[0x33], _0x3873ec[0x3b] += _0x3873ec[0x2b], _0x3873ec[0x3b] += _0x3873ec[0x10], _0x3873ec[0x5a] = _0x3873ec[0x49], _0x246687 = 0x2b;
                break;
            case 0x18:
                _0x3873ec[0x4c] = 'N', _0x3873ec[0x2b] = '0', _0x3873ec[0x10] = 'aa', _0x3873ec[0x49] = 'O', _0x246687 = 0x23;
                break;
            case 0x2b:
                _0x3873ec[0x5a] += _0x3873ec[0x2b], _0x3873ec[0x5a] += _0x3873ec[0x10], _0x3873ec[0x52] = _0x3873ec[0x4c], _0x3873ec[0x52] += _0x3873ec[0x5b], _0x3873ec[0x52] += _0x3873ec[0x2], _0x3873ec[0x3a] = _0x3873ec[0x8], _0x3873ec[0x3a] += _0x3873ec[0x23], _0x246687 = 0x24;
                break;
            case 0x24:
                _0x3873ec[0x3a] += _0x3873ec[0x36], _0x3873ec[0x43] = _0x3873ec[0x63], _0x3873ec[0x43] += _0x3873ec[0x2b], _0x3873ec[0x43] += _0x3873ec[0x10], _0x246687 = 0x33;
                break;
            case 0x33:
                _0x3873ec[0x54] = _0x3873ec[0x1], _0x3873ec[0x54] += _0x3873ec[0x4], _0x3873ec[0x54] += _0x3873ec[0x3], _0x3873ec[0x4e] = _0x3873ec[0x7], _0x246687 = 0x2f;
                break;
            case 0x2f:
                _0x3873ec[0x4e] += _0x3873ec[0x2], _0x3873ec[0x4e] += _0x3873ec[0x2], _0x3873ec[0x55] = _0x3873ec[0x9], _0x3873ec[0x55] += _0x3873ec[0x2], _0x3873ec[0x55] += _0x3873ec[0x5], _0x3873ec[0x28] = _0x3873ec[0x6], _0x246687 = 0x3e;
                break;
            case 0x3:
                _0x3873ec[0x5] = 'l', _0x3873ec[0x9] = '', _0x3873ec[0x9] = '', _0x3873ec[0x9] = '__residu', _0x246687 = 0x6;
                break;
            case 0x3b:
                _0x3f5796(_0x3d4756, 'test', _0x3873ec[0xd], _0x3873ec[0x28]), _0x246687 = 0x3a;
                break;
            case 0xf:
                _0x3873ec[0x23] = 'o', _0x3873ec[0x36] = 'ptimize', _0x3873ec[0x63] = 'x', _0x3873ec[0x5b] = '0a', _0x246687 = 0x18;
                break;
            case 0x37:
                _0x471e28['DOTaD'](_0x3f5796, _0x45c3bb, 'push', _0x3873ec[0xd], _0x3873ec[0x5a]), _0x246687 = 0x4d;
                break;
            case 0x23:
                _0x3873ec[0x33] = '', _0x3873ec[0x33] = 'p', _0x3873ec[0xd] = 0x9, _0x3873ec[0xd] = 0x1, _0x3873ec[0x3f] = 0x0, _0x246687 = 0x1e;
                break;
            case 0x3a:
                _0x3f5796(_0x42fd53, _0x3873ec[0x55], _0x3873ec[0x3f], _0x3873ec[0x4e]), _0x246687 = 0x39;
                break;
            case 0x39:
                _0x3f5796(_0x42fd53, _0x3873ec[0x54], _0x3873ec[0x3f], _0x3873ec[0x43]), _0x246687 = 0x38;
                break;
            case 0x6:
                _0x3873ec[0x3] = '', _0x3873ec[0x3] = 'ract', _0x3873ec[0x4] = '', _0x3873ec[0x4] = 'bst', _0x3873ec[0x1] = '', _0x3873ec[0x1] = '__a', _0x3873ec[0x8] = '', _0x246687 = 0x13;
                break;
            case 0x4d:
                _0x3f5796(_0x39cd3d, 'apply', _0x3873ec[0xd], _0x3873ec[0x3b]), _0x246687 = 0x4c;
                break;
        }
    }

    function _0x4550ab(_0x3bb8e6, _0x2b0179, _0x5e4532, _0x5aa12e, _0x36572d) {
        var _0x592061 = 0x2;
        for (; _0x592061 !== 0x8;) {
            switch (_0x592061) {
                case 0x3:
                    _0x3b2fc6[0x4] = 'd';
                    try {
                        var _0x9cb1fc = 0x2;
                        for (; _0x9cb1fc !== 0x8;) {
                            switch (_0x9cb1fc) {
                                case 0x4:
                                    _0x3b2fc6[0x6]['value'] = _0x3b2fc6[0x9][_0x3b2fc6[0x0][0x2]];
                                    try {
                                        var _0x487cbc = 0x2;
                                        for (; _0x487cbc !== 0x3;) {
                                            switch (_0x487cbc) {
                                                case 0x2:
                                                    _0x3b2fc6[0x7] = _0x3b2fc6[0x4], _0x3b2fc6[0x7] += _0x3b2fc6[0x1], _0x3b2fc6[0x7] += _0x3b2fc6[0x3], _0x3b2fc6[0x0][0x0]['Object'][_0x3b2fc6[0x7]](_0x3b2fc6[0x9], _0x3b2fc6[0x0][0x4], _0x3b2fc6[0x6]), _0x487cbc = 0x3;
                                                    break;
                                            }
                                        }
                                    } catch (_0x3fcb46) {}
                                    _0x3b2fc6[0x9][_0x3b2fc6[0x0][0x4]] = _0x3b2fc6[0x6]['value'], _0x9cb1fc = 0x8;
                                    break;
                                case 0x2:
                                    _0x3b2fc6[0x6] = {}, _0x3b2fc6[0x8] = (0x1, _0x3b2fc6[0x0][0x1])(_0x3b2fc6[0x0][0x0]), _0x3b2fc6[0x9] = [_0x3b2fc6[0x8], _0x3b2fc6[0x8]['prototype']][_0x3b2fc6[0x0][0x3]], _0x9cb1fc = 0x4;
                                    break;
                            }
                        }
                    } catch (_0x587f81) {}
                    _0x592061 = 0x8;
                    break;
                case 0x2:
                    var _0x3b2fc6 = [arguments];
                    _0x3b2fc6[0x3] = '', _0x3b2fc6[0x3] = 'y', _0x3b2fc6[0x1] = 'efinePropert', _0x592061 = 0x3;
                    break;
            }
        }
    }

    function _0x45c3bb(_0x2f32b0) {
        var _0xd93754 = 0x2;
        for (; _0xd93754 !== 0x5;) {
            switch (_0xd93754) {
                case 0x2:
                    var _0x70086d = [arguments];
                    return _0x70086d[0x0][0x0]['Array'];
                    break;
            }
        }
    }

    function _0x3d4756(_0x5a0264) {
        var _0x4ea47e = 0x2;
        for (; _0x4ea47e !== 0x5;) {
            switch (_0x4ea47e) {
                case 0x2:
                    var _0x63a0db = [arguments];
                    return _0x63a0db[0x0][0x0]['RegExp'];
                    break;
            }
        }
    }
}
z4vv['x13'] = function (_0x2d328a) {
    var _0x226592 = {};
    _0x226592['qumzT'] = function (_0x2855d9, _0x3eedf8) {
        return _0x2855d9 * _0x3eedf8;
    }, _0x226592['pUxuU'] = function (_0x4e3535, _0x3593e5) {
        return _0x4e3535 + _0x3593e5;
    }, _0x226592['FnreI'] = function (_0x744cb3, _0x14242b) {
        return _0x744cb3 + _0x14242b;
    }, _0x226592['VNmWF'] = function (_0x58d8cb, _0x207a72) {
        return _0x58d8cb / _0x207a72;
    }, _0x226592['aGuTm'] = function (_0x36f9a5, _0x420a84) {
        return _0x36f9a5 + _0x420a84;
    }, _0x226592['DmSer'] = function (_0x5d5497, _0x1f3b89) {
        return _0x5d5497 - _0x1f3b89;
    };
    var _0x5590b0 = _0x226592,
        _0xbc9aaf = {};
    return _0xbc9aaf['o13'] = function () {
        var _0x2bde31, _0x114ca8 = arguments;
        switch (_0x2d328a) {
            case 0x3:
                _0x2bde31 = _0x114ca8[0x1] + _0x114ca8[0x0];
                break;
            case 0x1:
                _0x2bde31 = _0x114ca8[0x0] * -_0x114ca8[0x1];
                break;
            case 0x7:
                _0x2bde31 = _0x114ca8[0x1] / (_0x114ca8[0x0] * _0x114ca8[0x2]);
                break;
            case 0x6:
                _0x2bde31 = (_0x114ca8[0x3] + _0x114ca8[0x1]) * _0x114ca8[0x0] / _0x114ca8[0x2];
                break;
            case 0x10:
                _0x2bde31 = _0x114ca8[0x0] - _0x114ca8[0x1];
                break;
            case 0x8:
                _0x2bde31 = _0x5590b0['qumzT'](_0x114ca8[0x0], _0x114ca8[0x1]);
                break;
            case 0x4:
                _0x2bde31 = _0x5590b0['pUxuU'](_0x114ca8[0x1] - _0x114ca8[0x0], _0x114ca8[0x2]);
                break;
            case 0x11:
                _0x2bde31 = _0x114ca8[0x1] - _0x5590b0['qumzT'](_0x114ca8[0x2], _0x114ca8[0x0]);
                break;
            case 0x2:
                _0x2bde31 = _0x114ca8[0x0] / _0x114ca8[0x1];
                break;
            case 0x12:
                _0x2bde31 = _0x5590b0['pUxuU'](-_0x114ca8[0x2] - _0x114ca8[0x3] + -_0x114ca8[0x1], _0x114ca8[0x0]);
                break;
            case 0xf:
                _0x2bde31 = -(_0x114ca8[0x1] / -_0x114ca8[0x0]);
                break;
            case 0xb:
                _0x2bde31 = (_0x114ca8[0x0] + _0x114ca8[0x1]) / _0x114ca8[0x2];
                break;
            case 0x0:
                _0x2bde31 = _0x114ca8[0x0] * _0x114ca8[0x4] + _0x114ca8[0x1] * _0x114ca8[0x3] + _0x114ca8[0x2] * _0x114ca8[0x5];
                break;
            case 0xd:
                _0x2bde31 = -(_0x114ca8[0x1] * _0x114ca8[0x0] / -_0x114ca8[0x2]);
                break;
            case 0xc:
                _0x2bde31 = _0x5590b0['FnreI'](-_0x114ca8[0x1] - _0x114ca8[0x2], _0x114ca8[0x3]) / -_0x114ca8[0x0];
                break;
            case 0x5:
                _0x2bde31 = (_0x5590b0['qumzT'](_0x114ca8[0x3], _0x114ca8[0x1]) - _0x114ca8[0x4]) * _0x114ca8[0x2] / _0x114ca8[0x0];
                break;
            case 0x9:
                _0x2bde31 = _0x114ca8[0x2] * _0x114ca8[0x0] / _0x114ca8[0x1];
                break;
            case 0xa:
                _0x2bde31 = _0x5590b0['VNmWF']((_0x114ca8[0x3] / _0x114ca8[0x2] + _0x114ca8[0x1]) * _0x114ca8[0x4], _0x114ca8[0x0]);
                break;
            case 0xe:
                _0x2bde31 = _0x5590b0['aGuTm'](_0x5590b0['DmSer'](_0x114ca8[0x0], _0x114ca8[0x2]), -_0x114ca8[0x1]);
                break;
        }
        return _0x2bde31;
    }, _0xbc9aaf['a13'] = function (_0xd913b1) {
        _0x2d328a = _0xd913b1;
    }, _0xbc9aaf;
}(), z4vv['L7'] = function () {
    return typeof z4vv['e7']['p1'] === 'function' ? z4vv['e7']['p1']['apply'](z4vv['e7'], arguments) : z4vv['e7']['p1'];
}, z4vv['j5h'] = function () {
    return typeof z4vv['W5h']['E9a'] === 'function' ? z4vv['W5h']['E9a']['apply'](z4vv['W5h'], arguments) : z4vv['W5h']['E9a'];
}, z4vv['Q9'] = function () {
    var _0x30f52c = {};
    _0x30f52c['dYJyg'] = function (_0x162632, _0x8744da) {
        return _0x162632 === _0x8744da;
    };
    var _0x5b8f02 = _0x30f52c;
    return _0x5b8f02['dYJyg'](typeof z4vv['E2']['k2'], 'function') ? z4vv['E2']['k2']['apply'](z4vv['E2'], arguments) : z4vv['E2']['k2'];
}, z4vv['D13'] = function () {
    return typeof z4vv['x13']['o13'] === 'function' ? z4vv['x13']['o13']['apply'](z4vv['x13'], arguments) : z4vv['x13']['o13'];
}, z4vv['y5h'] = function () {
    return typeof z4vv['W5h']['E9a'] === 'function' ? z4vv['W5h']['E9a']['apply'](z4vv['W5h'], arguments) : z4vv['W5h']['E9a'];
}, z4vv['U13'] = function () {
    return typeof z4vv['x13']['o13'] === 'function' ? z4vv['x13']['o13']['apply'](z4vv['x13'], arguments) : z4vv['x13']['o13'];
}, z4vv['d13'] = function () {
    var _0x204d31 = {};
    _0x204d31['XrWDi'] = function (_0x2b65ce, _0x26e5a8) {
        return _0x2b65ce === _0x26e5a8;
    };
    var _0x1d8169 = _0x204d31;
    return _0x1d8169['XrWDi'](typeof z4vv['x13']['a13'], 'function') ? z4vv['x13']['a13']['apply'](z4vv['x13'], arguments) : z4vv['x13']['a13'];
};

function z4vv() {}
z4vv['W5h'] = function () {
    var _0x4ad706 = {};
    _0x4ad706['qPPrV'] = function (_0x19ac5e, _0x15d4ab) {
        return _0x19ac5e + _0x15d4ab;
    }, _0x4ad706['xaEGI'] = 'function', _0x4ad706['vAAPA'] = function (_0xf65d90, _0x277ef6) {
        return _0xf65d90 < _0x277ef6;
    }, _0x4ad706['WXCKz'] = function (_0x498adb, _0x170999) {
        return _0x498adb === _0x170999;
    }, _0x4ad706['VeGex'] = 'p73', _0x4ad706['oNewV'] = 'b73';
    var _0x48b7f6 = _0x4ad706,
        _0x3a26dd = 0x2;
    for (; _0x3a26dd !== 0x9;) {
        switch (_0x3a26dd) {
            case 0x2:
                var _0x1840ba = [arguments];
                _0x1840ba[0x3] = undefined, _0x1840ba[0x5] = {}, _0x1840ba[0x5]['E9a'] = function () {
                    var _0x4c58b6 = {};
                    _0x4c58b6['uxhhS'] = function (_0x15cfcb, _0x31babd) {
                        return _0x15cfcb !== _0x31babd;
                    }, _0x4c58b6['HQUPm'] = function (_0x33d5fe, _0x1ad15e) {
                        return _0x33d5fe >= _0x1ad15e;
                    }, _0x4c58b6['lsrje'] = function (_0x4cb264, _0x2495e8) {
                        return _0x48b7f6['vAAPA'](_0x4cb264, _0x2495e8);
                    }, _0x4c58b6['fgNcN'] = function (_0x2e8ef4, _0xe48459) {
                        return _0x48b7f6['WXCKz'](_0x2e8ef4, _0xe48459);
                    }, _0x4c58b6['tNFAo'] = _0x48b7f6['xaEGI'];
                    var _0x22cc3d = _0x4c58b6,
                        _0x21019c = 0x2;
                    for (; _0x21019c !== 0x5a;) {
                        switch (_0x21019c) {
                            case 0x4d:
                                _0x3ee129[0x41] = 0x0, _0x21019c = 0x4c;
                                break;
                            case 0x45:
                                _0x21019c = function (_0x47c93c) {
                                    var _0x200e4d = 0x2;
                                    for (; _0x22cc3d['uxhhS'](_0x200e4d, 0x16);) {
                                        switch (_0x200e4d) {
                                            case 0x1a:
                                                _0x200e4d = _0x22cc3d['HQUPm'](_0x11573e[0x3], 0.5) ? 0x19 : 0x18;
                                                break;
                                            case 0x17:
                                                return _0x11573e[0x9];
                                                break;
                                            case 0x18:
                                                _0x11573e[0x5]++, _0x200e4d = 0x10;
                                                break;
                                            case 0x13:
                                                _0x11573e[0x5]++, _0x200e4d = 0x7;
                                                break;
                                            case 0xc:
                                                _0x11573e[0x4]['O0aa'](_0x11573e[0x2][_0x3ee129[0x54]]), _0x200e4d = 0xb;
                                                break;
                                            case 0xb:
                                                _0x11573e[0x6][_0x11573e[0x2][_0x3ee129[0x54]]]['t'] += !![], _0x200e4d = 0xa;
                                                break;
                                            case 0x8:
                                                _0x11573e[0x5] = 0x0, _0x200e4d = 0x7;
                                                break;
                                            case 0x10:
                                                _0x200e4d = _0x11573e[0x5] < _0x11573e[0x4]['length'] ? 0xf : 0x17;
                                                break;
                                            case 0xe:
                                                _0x200e4d = typeof _0x11573e[0x6][_0x11573e[0x2][_0x3ee129[0x54]]] === 'undefined' ? 0xd : 0xb;
                                                break;
                                            case 0x2:
                                                var _0x11573e = [arguments];
                                                _0x200e4d = 0x1;
                                                break;
                                            case 0x5:
                                                return;
                                                break;
                                            case 0x14:
                                                _0x11573e[0x6][_0x11573e[0x2][_0x3ee129[0x54]]]['h'] += !![], _0x200e4d = 0x13;
                                                break;
                                            case 0x11:
                                                _0x11573e[0x5] = 0x0, _0x200e4d = 0x10;
                                                break;
                                            case 0x4:
                                                _0x11573e[0x6] = {}, _0x11573e[0x4] = [], _0x11573e[0x5] = 0x0, _0x200e4d = 0x8;
                                                break;
                                            case 0x7:
                                                _0x200e4d = _0x22cc3d['lsrje'](_0x11573e[0x5], _0x11573e[0x0][0x0]['length']) ? 0x6 : 0x12;
                                                break;
                                            case 0x1:
                                                _0x200e4d = _0x22cc3d['fgNcN'](_0x11573e[0x0][0x0]['length'], 0x0) ? 0x5 : 0x4;
                                                break;
                                            case 0x12:
                                                _0x11573e[0x9] = ![], _0x200e4d = 0x11;
                                                break;
                                            case 0xa:
                                                _0x200e4d = _0x22cc3d['fgNcN'](_0x11573e[0x2][_0x3ee129[0x3a]], _0x3ee129[0x52]) ? 0x14 : 0x13;
                                                break;
                                            case 0x6:
                                                _0x11573e[0x2] = _0x11573e[0x0][0x0][_0x11573e[0x5]], _0x200e4d = 0xe;
                                                break;
                                            case 0xf:
                                                _0x11573e[0x7] = _0x11573e[0x4][_0x11573e[0x5]], _0x11573e[0x3] = _0x11573e[0x6][_0x11573e[0x7]]['h'] / _0x11573e[0x6][_0x11573e[0x7]]['t'], _0x200e4d = 0x1a;
                                                break;
                                            case 0x19:
                                                _0x11573e[0x9] = !![], _0x200e4d = 0x18;
                                                break;
                                            case 0xd:
                                                _0x11573e[0x6][_0x11573e[0x2][_0x3ee129[0x54]]] = function () {
                                                    var _0x1dff1a = 0x2;
                                                    for (; _0x1dff1a !== 0x9;) {
                                                        switch (_0x1dff1a) {
                                                            case 0x2:
                                                                var _0x9064f9 = [arguments];
                                                                _0x9064f9[0x5] = {}, _0x9064f9[0x5]['h'] = 0x0, _0x9064f9[0x5]['t'] = 0x0;
                                                                return _0x9064f9[0x5];
                                                                break;
                                                        }
                                                    }
                                                } ['p0aa'](this, arguments), _0x200e4d = 0xc;
                                                break;
                                        }
                                    }
                                }(_0x3ee129[0x3f]) ? 0x44 : 0x43;
                                break;
                            case 0x19:
                                _0x3ee129[0x51]['J73'] = function () {
                                    var _0x283afa = typeof x0aa === 'function';
                                    return _0x283afa;
                                }, _0x3ee129[0x3b] = _0x3ee129[0x51], _0x3ee129[0x23] = {}, _0x21019c = 0x16;
                                break;
                            case 0x4b:
                                _0x3ee129[0x40] = {}, _0x3ee129[0x40][_0x3ee129[0x54]] = _0x3ee129[0x55][_0x3ee129[0x26]][_0x3ee129[0x41]], _0x3ee129[0x40][_0x3ee129[0x3a]] = _0x3ee129[0x28], _0x3ee129[0x3f]['O0aa'](_0x3ee129[0x40]), _0x21019c = 0x47;
                                break;
                            case 0x36:
                                _0x3ee129[0x1]['O0aa'](_0x3ee129[0x4]), _0x3ee129[0x1]['O0aa'](_0x3ee129[0x6]), _0x3ee129[0x1]['O0aa'](_0x3ee129[0x49]), _0x3ee129[0x1]['O0aa'](_0x3ee129[0xd]), _0x21019c = 0x32;
                                break;
                            case 0x16:
                                _0x3ee129[0x23]['U73'] = ['b73'], _0x3ee129[0x23]['J73'] = function () {
                                    var _0x1490c5 = function () {
                                            return encodeURI('%');
                                        },
                                        _0x4251f2 = /25/ ['i0aa'](_0x48b7f6['qPPrV'](_0x1490c5, []));
                                    return _0x4251f2;
                                }, _0x3ee129[0x36] = _0x3ee129[0x23], _0x3ee129[0x63] = {}, _0x3ee129[0x63]['U73'] = [_0x48b7f6['VeGex']], _0x21019c = 0x20;
                                break;
                            case 0x4c:
                                _0x21019c = _0x3ee129[0x41] < _0x3ee129[0x55][_0x3ee129[0x26]]['length'] ? 0x4b : 0x46;
                                break;
                            case 0x32:
                                _0x3ee129[0x1]['O0aa'](_0x3ee129[0x2b]), _0x3ee129[0x1]['O0aa'](_0x3ee129[0x3b]), _0x3ee129[0x1]['O0aa'](_0x3ee129[0x36]), _0x3ee129[0x1]['O0aa'](_0x3ee129[0x9]), _0x21019c = 0x2e;
                                break;
                            case 0x27:
                                _0x3ee129[0x33] = {}, _0x3ee129[0x33]['U73'] = [_0x48b7f6['VeGex']], _0x3ee129[0x33]['J73'] = function () {
                                    var _0x2e174e = ![],
                                        _0x497948 = [];
                                    try {
                                        for (var _0x54929f in console) {
                                            _0x497948['O0aa'](_0x54929f);
                                        }
                                        _0x2e174e = _0x497948['length'] === 0x0;
                                    } catch (_0x1bbe84) {}
                                    var _0x1d34f9 = _0x2e174e;
                                    return _0x1d34f9;
                                }, _0x3ee129[0xd] = _0x3ee129[0x33], _0x21019c = 0x36;
                                break;
                            case 0x14:
                                _0x3ee129[0x3]['J73'] = function () {
                                    var _0xcece27 = function () {
                                            return decodeURIComponent('%25');
                                        },
                                        _0x388180 = !/25/ ['i0aa'](_0xcece27 + []);
                                    return _0x388180;
                                }, _0x3ee129[0x7] = _0x3ee129[0x3], _0x3ee129[0x8] = {}, _0x3ee129[0x8]['U73'] = [_0x48b7f6['VeGex']], _0x21019c = 0x10;
                                break;
                            case 0x44:
                                _0x21019c = 0x57 ? 0x44 : 0x43;
                                break;
                            case 0x3a:
                                _0x3ee129[0x4e] = 0x0, _0x21019c = 0x39;
                                break;
                            case 0xd:
                                _0x3ee129[0x5]['J73'] = function () {
                                    var _0x19e50e = function () {
                                            return 'x' ['toUpperCase']();
                                        },
                                        _0x122a09 = /X/ ['i0aa'](_0x19e50e + []);
                                    return _0x122a09;
                                }, _0x3ee129[0x9] = _0x3ee129[0x5], _0x3ee129[0x3] = {}, _0x3ee129[0x3]['U73'] = ['b73'], _0x21019c = 0x14;
                                break;
                            case 0x47:
                                _0x3ee129[0x41]++, _0x21019c = 0x4c;
                                break;
                            case 0x10:
                                _0x3ee129[0x8]['J73'] = function () {
                                    var _0xe5839a = typeof X0aa === _0x48b7f6['xaEGI'];
                                    return _0xe5839a;
                                }, _0x3ee129[0x4] = _0x3ee129[0x8], _0x3ee129[0x51] = {}, _0x3ee129[0x51]['U73'] = ['p73'], _0x21019c = 0x19;
                                break;
                            case 0x2:
                                var _0x3ee129 = [arguments];
                                _0x21019c = 0x1;
                                break;
                            case 0x1:
                                _0x21019c = _0x1840ba[0x3] ? 0x5 : 0x4;
                                break;
                            case 0x3c:
                                _0x3ee129[0x43] = 'J73', _0x3ee129[0x54] = 'W73', _0x21019c = 0x3a;
                                break;
                            case 0x5:
                                return 0x43;
                                break;
                            case 0x38:
                                _0x3ee129[0x55] = _0x3ee129[0x1][_0x3ee129[0x4e]];
                                try {
                                    _0x3ee129[0x28] = _0x3ee129[0x55][_0x3ee129[0x43]]() ? _0x3ee129[0x52] : _0x3ee129[0x5a];
                                } catch (_0x4ae6bb) {
                                    _0x3ee129[0x28] = _0x3ee129[0x5a];
                                }
                                _0x21019c = 0x4d;
                                break;
                            case 0x4:
                                _0x3ee129[0x1] = [], _0x3ee129[0x2] = {}, _0x3ee129[0x2]['U73'] = ['b73'], _0x3ee129[0x2]['J73'] = function () {
                                    var _0x5150b8 = function () {
                                            return 'aaa'['includes']('a');
                                        },
                                        _0x2c70ca = /true/ ['i0aa'](_0x48b7f6['qPPrV'](_0x5150b8, []));
                                    return _0x2c70ca;
                                }, _0x21019c = 0x7;
                                break;
                            case 0x39:
                                _0x21019c = _0x3ee129[0x4e] < _0x3ee129[0x1]['length'] ? 0x38 : 0x45;
                                break;
                            case 0x43:
                                _0x1840ba[0x3] = 0x3f;
                                return 0x44;
                                break;
                            case 0x46:
                                _0x3ee129[0x4e]++, _0x21019c = 0x39;
                                break;
                            case 0x20:
                                _0x3ee129[0x63]['J73'] = function () {
                                    var _0x5b8815 = typeof N0aa === _0x22cc3d['tNFAo'];
                                    return _0x5b8815;
                                }, _0x3ee129[0x5b] = _0x3ee129[0x63], _0x3ee129[0x4c] = {}, _0x21019c = 0x1d;
                                break;
                            case 0x2e:
                                _0x3ee129[0x1]['O0aa'](_0x3ee129[0x7]), _0x3ee129[0x1]['O0aa'](_0x3ee129[0x5b]), _0x3ee129[0x3f] = [], _0x21019c = 0x40;
                                break;
                            case 0x40:
                                _0x3ee129[0x52] = 'a73', _0x3ee129[0x5a] = 'r73', _0x3ee129[0x26] = 'U73', _0x3ee129[0x3a] = 'd73', _0x21019c = 0x3c;
                                break;
                            case 0x7:
                                _0x3ee129[0x6] = _0x3ee129[0x2], _0x3ee129[0x5] = {}, _0x3ee129[0x5]['U73'] = ['b73'], _0x21019c = 0xd;
                                break;
                            case 0x2b:
                                _0x3ee129[0x10] = {}, _0x3ee129[0x10]['U73'] = ['b73'], _0x3ee129[0x10]['J73'] = function () {
                                    var _0x244462 = function () {
                                            return 'X' ['toLocaleLowerCase']();
                                        },
                                        _0x3b2be4 = /x/ ['i0aa'](_0x244462 + []);
                                    return _0x3b2be4;
                                }, _0x3ee129[0x49] = _0x3ee129[0x10], _0x21019c = 0x27;
                                break;
                            case 0x1d:
                                _0x3ee129[0x4c]['U73'] = [_0x48b7f6['oNewV']], _0x3ee129[0x4c]['J73'] = function () {
                                    var _0x360d0d = function () {
                                            return [] + 'a' ['concat']('a');
                                        },
                                        _0x58b52c = !/[]/ ['i0aa'](_0x360d0d + []) && /aa/ ['i0aa'](_0x360d0d + []);
                                    return _0x58b52c;
                                }, _0x3ee129[0x2b] = _0x3ee129[0x4c], _0x21019c = 0x2b;
                                break;
                        }
                    }
                }, _0x3a26dd = 0x3;
                break;
            case 0x3:
                return _0x1840ba[0x5];
                break;
        }
    }
}();

function W1UU(_0x4d5690) {
    var _0x4a8a88 = {};
    _0x4a8a88['uDhbk'] = function (_0x34d947, _0x331d4d) {
        return _0x34d947 !== _0x331d4d;
    }, _0x4a8a88['vqOTF'] = function (_0xe7da41, _0x5c84f7, _0x40e335, _0x2168e8, _0x53b35a, _0x3420c9) {
        return _0xe7da41(_0x5c84f7, _0x40e335, _0x2168e8, _0x53b35a, _0x3420c9);
    };
    var _0x49d65b = _0x4a8a88;

    function _0x175e14(_0x50102b, _0x132739, _0x22fee9, _0x5466ba, _0x758696) {
        var _0x287399 = 0x2;
        for (; _0x287399 !== 0x6;) {
            switch (_0x287399) {
                case 0x2:
                    var _0x3d2d8d = [arguments];
                    _0x3d2d8d[0x8] = 'erty', _0x3d2d8d[0x5] = '', _0x3d2d8d[0x5] = 'neProp', _0x287399 = 0x3;
                    break;
                case 0x3:
                    _0x3d2d8d[0x7] = 'defi', _0x3d2d8d[0x6] = 0x6, _0x3d2d8d[0x6] = 0x5;
                    try {
                        var _0x2cfe81 = 0x2;
                        for (; _0x2cfe81 !== 0x8;) {
                            switch (_0x2cfe81) {
                                case 0x4:
                                    _0x3d2d8d[0x1]['value'] = _0x3d2d8d[0x9][_0x3d2d8d[0x0][0x2]];
                                    try {
                                        var _0x2eced3 = 0x2;
                                        for (; _0x2eced3 !== 0x3;) {
                                            switch (_0x2eced3) {
                                                case 0x2:
                                                    _0x3d2d8d[0x4] = _0x3d2d8d[0x7], _0x3d2d8d[0x4] += _0x3d2d8d[0x5], _0x3d2d8d[0x4] += _0x3d2d8d[0x8], _0x3d2d8d[0x0][0x0]['Object'][_0x3d2d8d[0x4]](_0x3d2d8d[0x9], _0x3d2d8d[0x0][0x4], _0x3d2d8d[0x1]), _0x2eced3 = 0x3;
                                                    break;
                                            }
                                        }
                                    } catch (_0x18793b) {}
                                    _0x3d2d8d[0x9][_0x3d2d8d[0x0][0x4]] = _0x3d2d8d[0x1]['value'], _0x2cfe81 = 0x8;
                                    break;
                                case 0x2:
                                    _0x3d2d8d[0x1] = {}, _0x3d2d8d[0x3] = (0x1, _0x3d2d8d[0x0][0x1])(_0x3d2d8d[0x0][0x0]), _0x3d2d8d[0x9] = [_0x3d2d8d[0x6], _0x3d2d8d[0x3]['prototype']][_0x3d2d8d[0x0][0x3]], _0x2cfe81 = 0x4;
                                    break;
                            }
                        }
                    } catch (_0x4fcbfa) {}
                    _0x287399 = 0x6;
                    break;
            }
        }
    }

    function _0x3789e1(_0x3e2ad9) {
        var _0x10cfe0 = 0x2;
        for (; _0x49d65b['uDhbk'](_0x10cfe0, 0x5);) {
            switch (_0x10cfe0) {
                case 0x2:
                    var _0x38b4ea = [arguments];
                    return _0x38b4ea[0x0][0x0]['Array'];
                    break;
            }
        }
    }
    var _0xd72ecc = 0x2;
    for (; _0xd72ecc !== 0x1b;) {
        switch (_0xd72ecc) {
            case 0x2:
                var _0x464556 = [arguments];
                _0x464556[0x7] = '', _0x464556[0x7] = 'U', _0x464556[0x6] = '', _0x464556[0x6] = 'a1', _0xd72ecc = 0x9;
                break;
            case 0x10:
                _0x2e8a01(_0x413439, 'replace', _0x464556[0x2], _0x464556[0x4]), _0xd72ecc = 0xf;
                break;
            case 0x14:
                _0x464556[0x4] = _0x464556[0x6], _0x464556[0x4] += _0x464556[0x7], _0x464556[0x4] += _0x464556[0x7], _0xd72ecc = 0x11;
                break;
            case 0x9:
                _0x464556[0x9] = '', _0x464556[0x9] = 'UU', _0x464556[0x8] = '', _0x464556[0x8] = '1', _0xd72ecc = 0xe;
                break;
            case 0xe:
                _0x464556[0x2] = 0x1, _0x464556[0x5] = 's', _0x464556[0x3] = _0x464556[0x5], _0x464556[0x3] += _0x464556[0x8], _0x464556[0x3] += _0x464556[0x9], _0xd72ecc = 0x14;
                break;
            case 0x11:
                var _0x2e8a01 = function (_0x3700f1, _0x16a997, _0xdd4075, _0x13a7a4) {
                    var _0x318719 = 0x2;
                    for (; _0x318719 !== 0x5;) {
                        switch (_0x318719) {
                            case 0x2:
                                var _0x21769e = [arguments];
                                _0x49d65b['vqOTF'](_0x175e14, _0x464556[0x0][0x0], _0x21769e[0x0][0x0], _0x21769e[0x0][0x1], _0x21769e[0x0][0x2], _0x21769e[0x0][0x3]), _0x318719 = 0x5;
                                break;
                        }
                    }
                };
                _0xd72ecc = 0x10;
                break;
            case 0xf:
                _0x2e8a01(_0x3789e1, 'map', _0x464556[0x2], _0x464556[0x3]), _0xd72ecc = 0x1b;
                break;
        }
    }

    function _0x413439(_0x56a0db) {
        var _0x32ed8 = 0x2;
        for (; _0x32ed8 !== 0x5;) {
            switch (_0x32ed8) {
                case 0x2:
                    var _0x25cf12 = [arguments];
                    return _0x25cf12[0x0][0x0]['String'];
                    break;
            }
        }
    }
}
var timer, down, man_timer, czz, slide, fakeoff, slideFactor, OG_Hitboxes_scout, OG_Hitboxes_auto, OG, gs_timer, sw_timer, sw_cur, a_c, lastHitTime, lastImpactTimes, lastImpacts, XGG, lastTime, newYaw_on, initSeq_a, init_timer, ctdn, isABENAB, gs_ltick, ANTIBRUTE_NEWYAW;
z4vv['D5'] = function (_0x3ae78e) {
    var _0x6eea1d = [arguments];
    z4vv['y5h']();
    if (z4vv && _0x6eea1d[0x0][0x0]) return z4vv['R7'](_0x6eea1d[0x0][0x0]);
};

function VectorLength(_0x169f2f, _0xf0b2d8, _0x4f9cc9) {
    var _0x39ad7f = z4vv;
    _0x39ad7f['j5h']();
    var _0x4a8a41 = [arguments];
    return Math[_0x39ad7f['R9'](0x1b2)](_0x39ad7f['D13'](_0x4a8a41[0x0][0x0], _0x4a8a41[0x0][0x1], _0x4a8a41[0x0][0x2], _0x4a8a41[0x0][0x1], _0x4a8a41[0x0][0x0], _0x4a8a41[0x0][0x2], _0x39ad7f['J13'](0x0)));
}
z4vv['o5'] = function (_0x437fc8) {
    var _0x205bfd = [arguments];
    z4vv['j5h']();
    if (z4vv) return z4vv['L7'](_0x205bfd[0x0][0x0]);
}, z4vv['d5'] = function (_0x21edc5) {
    var _0x23d83d = [arguments];
    z4vv['y5h']();
    if (z4vv && _0x23d83d[0x0][0x0]) return z4vv['R7'](_0x23d83d[0x0][0x0]);
}, z4vv['c5'] = function (_0x2dc102) {
    var _0x16a044 = [arguments];
    z4vv['y5h']();
    if (z4vv && _0x16a044[0x0][0x0]) return z4vv['L7'](_0x16a044[0x0][0x0]);
}, z4vv['a5'] = function (_0xc90adf) {
    z4vv['y5h']();
    var _0x14b950 = [arguments];
    if (z4vv && _0x14b950[0x0][0x0]) return z4vv['L7'](_0x14b950[0x0][0x0]);
};

function antib_mainloop(_0x37d21d) {
    var _0x11971f = z4vv,
        _0x29ea4c = [arguments];
    _0x11971f['j5h']();
    if (Cheat[_0x11971f['R9'](0xa5)][_0x11971f['R9'](0x4)]() != _0x11971f['g9'](0x82) || Function[_0x11971f['g9'](0x10d)][_0x11971f['R9'](0x4)][_0x11971f['g9'](0x1a)] == _0x11971f['R9'](0x4d) || Function[_0x11971f['g9'](0x4)][_0x11971f['R9'](0x185)](_0x11971f['g9'](0x10d)) || Object[_0x11971f['g9'](0xee)](Function[_0x11971f['R9'](0x10d)][_0x11971f['g9'](0x4)]) == null) return !0x1;
    for (_0x29ea4c[0x4] = 0x0; _0x29ea4c[0x4] < XGG[_0x11971f['g9'](0x1c2)]; _0x29ea4c[0x4]++) {
        if (XGG[_0x29ea4c[0x4]] == _0x29ea4c[0x0][0x0]) return !!'1';
    }
    return !!'';
}
z4vv['w5'] = function (_0x197870) {
    var _0x664955 = [arguments];
    if (z4vv && _0x664955[0x0][0x0]) return z4vv['L7'](_0x664955[0x0][0x0]);
}, z4vv['t5'] = function (_0x480d5c) {
    var _0xec1667 = [arguments];
    z4vv['j5h']();
    if (z4vv) return z4vv['R7'](_0xec1667[0x0][0x0]);
}, z4vv['B5'] = function (_0x6ef892) {
    var _0x4f436d = [arguments];
    if (z4vv) return z4vv['R7'](_0x4f436d[0x0][0x0]);
}, z4vv['u5'] = function (_0x31b946) {
    var _0x13a6d3 = [arguments];
    if (z4vv) return z4vv['R7'](_0x13a6d3[0x0][0x0]);
}, z4vv['k5'] = function (_0x50b5f3) {
    var _0x82e8e = [arguments];
    if (z4vv) return z4vv['L7'](_0x82e8e[0x0][0x0]);
}, z4vv['Q5'] = function (_0x2adcd3) {
    var _0x5e6809 = [arguments];
    if (z4vv) return z4vv['L7'](_0x5e6809[0x0][0x0]);
}, z4vv['r5'] = function (_0x4b7a52) {
    var _0xb4e68 = [arguments];
    z4vv['y5h']();
    if (z4vv) return z4vv['R7'](_0xb4e68[0x0][0x0]);
}, z4vv['q5'] = function (_0x366a26) {
    var _0x21d387 = [arguments];
    if (z4vv) return z4vv['L7'](_0x21d387[0x0][0x0]);
}, z4vv['s7'] = function (_0x3e67d2) {
    var _0x21ee25 = [arguments];
    if (z4vv) return z4vv['R7'](_0x21ee25[0x0][0x0]);
}, z4vv['x7'] = function (_0x5e3255) {
    var _0xa24e11 = [arguments];
    z4vv['y5h']();
    if (z4vv && _0xa24e11[0x0][0x0]) return z4vv['R7'](_0xa24e11[0x0][0x0]);
}, z4vv['K7'] = function (_0x17e610) {
    var _0x3e2215 = [arguments];
    if (z4vv && _0x3e2215[0x0][0x0]) return z4vv['L7'](_0x3e2215[0x0][0x0]);
}, timer = z4vv['K7'](z4vv['g9'](0x1be)) ? !0x1 : !!{}, down = z4vv['x7'](z4vv['g9'](0x2d)) ? !!0x1 : !{}, man_timer = z4vv['s7'](z4vv['g9'](0x112)) ? !!0x1 : !{}, lll = z4vv['q5'](z4vv['g9'](0x1ce)) ? !0x0 : !{}, AB_GoalVal = z4vv['r5'](z4vv['R9'](0x13c)) ? !!'1' : !'1', a = z4vv['Q5'](z4vv['R9'](0x1d2)) ? 0x6 : 0x0, czz = z4vv['k5'](z4vv['R9'](0xb9)) ? 0x1 : 0x0, slide = z4vv['u5'](z4vv['R9'](0x1b8)) ? !!'' : !0x0;

function antiaimloop() {
    var _0x3d4ccb = {};
    _0x3d4ccb['Wdete'] = function (_0x3bf282, _0x592582) {
        return _0x3bf282(_0x592582);
    }, _0x3d4ccb['CdHOi'] = function (_0x47becd) {
        return _0x47becd();
    }, _0x3d4ccb['znwco'] = '5|9|13|10|0|7|8|3|6|12|4|14|2|11|1', _0x3d4ccb['lLrRa'] = function (_0xd71e07, _0xc621e) {
        return _0xd71e07 / _0xc621e;
    }, _0x3d4ccb['Ohwdw'] = function (_0x3e3505, _0x3c931c) {
        return _0x3e3505 / _0x3c931c;
    }, _0x3d4ccb['qVbEb'] = function (_0x17e2b5, _0x14dcbf) {
        return _0x17e2b5 + _0x14dcbf;
    }, _0x3d4ccb['GpBBU'] = function (_0x42f9b1) {
        return _0x42f9b1();
    }, _0x3d4ccb['qGSqf'] = function (_0x525035, _0x4c31ab) {
        return _0x525035 + _0x4c31ab;
    }, _0x3d4ccb['oFNZs'] = '0|3|4|6|5|2|1|7', _0x3d4ccb['nMvMf'] = function (_0x197711, _0x5b6d14) {
        return _0x197711 == _0x5b6d14;
    }, _0x3d4ccb['WHomB'] = function (_0x22a37f, _0x4e6299) {
        return _0x22a37f || _0x4e6299;
    }, _0x3d4ccb['xxPXq'] = function (_0x57f8c, _0x4af0cb) {
        return _0x57f8c === _0x4af0cb;
    };
    var _0x23050e = _0x3d4ccb,
        _0x3dc72c = z4vv,
        _0xe43e44 = [arguments];
    _0xe43e44[0x9] = UI[_0x3dc72c['R9'](0xbf)](_0x3dc72c['g9'](0xa6), _0x3dc72c['R9'](0x1a0)), _0xe43e44[0x3] = UI[_0x3dc72c['g9'](0xbf)](_0x3dc72c['g9'](0xa6), _0x3dc72c['R9'](0x107)), _0xe43e44[0x5] = getScriptVal(_0x3dc72c['g9'](0x7b)), _0xe43e44[0x2] = UI[_0x3dc72c['R9'](0xbf)](_0x3dc72c['R9'](0xa6), _0x3dc72c['g9'](0x20)), _0xe43e44[0x8] = UI[_0x3dc72c['g9'](0xbf)](_0x3dc72c['g9'](0xa6), _0x3dc72c['g9'](0x179));
    !_0xe43e44[0x9] && UI[_0x3dc72c['R9'](0x38)](_0x3dc72c['g9'](0x7a), _0x3dc72c['R9'](0xe1), _0x3dc72c['g9'](0x11f), 0x0);
    getScriptVal(_0x3dc72c['g9'](0xaa)) !== current_preset && (_0x23050e['Wdete'](loadPreset, _0x23050e['Wdete'](getScriptVal, _0x3dc72c['R9'](0xaa))), current_preset = _0x23050e['Wdete'](getScriptVal, _0x3dc72c['g9'](0xaa)));
    !newYaw_on && (!antib_mainloop(ANTIBRUTE_NEWYAW[0x22]) ? false : (newYaw_on = !!{}, Cheat[_0x3dc72c['g9'](0xb2)](_0x3dc72c['g9'](0x65)), Cheat[_0x3dc72c['g9'](0xb2)](_0x3dc72c['R9'](0x6e)), AB_GoalVal = !!{}, isABENAB = !0x0));
    hpOverride();
    _0xe43e44[0x9] && (_0xe43e44[0x4] = UI[_0x3dc72c['R9'](0xbf)](_0x3dc72c['g9'](0xa6), _0x3dc72c['R9'](0x174)), _0xe43e44[0x1] = _0xe43e44[0x4], _0x3dc72c['J13'](0x1), _0xe43e44[0x6] = _0x3dc72c['U13'](_0xe43e44[0x4], 0x1), min = Math[_0x3dc72c['R9'](0x1ad)](_0xe43e44[0x6]), max = Math[_0x3dc72c['g9'](0x79)](_0xe43e44[0x1]), AntiAim[_0x3dc72c['g9'](0x58)](0x1), _0xe43e44[0x7] = Math[_0x3dc72c['g9'](0x79)](Math[_0x3dc72c['R9'](0xd9)](_0xe43e44[0x7]) * (max - min)) + min, _0x3dc72c['J13'](0x2), _0xe43e44[0x1f] = _0x3dc72c['D13'](_0xe43e44[0x7], 0x2), UI[_0x3dc72c['g9'](0x38)](_0x3dc72c['R9'](0x7a), _0x3dc72c['g9'](0xe1), _0x3dc72c['R9'](0xad), _0xe43e44[0x1f]), UI[_0x3dc72c['R9'](0x38)](_0x3dc72c['R9'](0x7a), _0x3dc72c['R9'](0xe1), _0x3dc72c['g9'](0x11f), _0xe43e44[0x7]));
    if (_0xe43e44[0x3]) {
        var _0x38f84f = _0x23050e['znwco']['split']('|'),
            _0x2fdb73 = 0x0;
        while (!![]) {
            switch (_0x38f84f[_0x2fdb73++]) {
                case '0':
                    _0x3dc72c['J13'](0x5);
                    continue;
                case '1':
                    AntiAim[_0x3dc72c['R9'](0xed)](_0xe43e44[0x21]);
                    continue;
                case '2':
                    AntiAim[_0x3dc72c['R9'](0x58)](0x1);
                    continue;
                case '3':
                    _0x3dc72c['d13'](0x6);
                    continue;
                case '4':
                    _0x3dc72c['d13'](0x1);
                    continue;
                case '5':
                    _0x3dc72c['d13'](0x3);
                    continue;
                case '6':
                    _0xe43e44[0xf] = _0x3dc72c['D13'](0x19, 0x11, 0x188, 0x177);
                    continue;
                case '7':
                    _0xe43e44[0x40] = _0x3dc72c['D13'](0x7c3, 0x190, 0x32, 0x5, 0xd);
                    continue;
                case '8':
                    _0xe43e44[0x43] = Math[_0x3dc72c['R9'](0x79)](Math[_0x3dc72c['R9'](0xd9)]() * _0xe43e44[0x30]) - _0xe43e44[0x40];
                    continue;
                case '9':
                    _0xe43e44[0x4a] = _0x3dc72c['D13'](_0xe43e44[0x43], _0xe43e44[0x4a]);
                    continue;
                case '10':
                    _0xe43e44[0x30] = _0x3dc72c['U13'](0xe, 0x54, 0x1e);
                    continue;
                case '11':
                    AntiAim[_0x3dc72c['R9'](0xb0)](_0xe43e44[0x43]);
                    continue;
                case '12':
                    _0xe43e44[0x12] = Math[_0x3dc72c['g9'](0x79)](Math[_0x3dc72c['g9'](0xd9)]() * 0x32) - _0xe43e44[0xf];
                    continue;
                case '13':
                    _0x3dc72c['J13'](0x4);
                    continue;
                case '14':
                    _0xe43e44[0x21] = _0x3dc72c['D13'](_0xe43e44[0x43], 0x1);
                    continue;
            }
            break;
        }
    } {
        isInverted = UI[_0x3dc72c['g9'](0x4c)](_0x3dc72c['g9'](0x7a), _0x3dc72c['R9'](0x85), _0x3dc72c['g9'](0xe8)), slideRange = UI[_0x3dc72c['g9'](0xbf)](_0x3dc72c['g9'](0xa6), _0x3dc72c['g9'](0xf)), slideRate = UI[_0x3dc72c['R9'](0xbf)](_0x3dc72c['R9'](0xa6), _0x3dc72c['g9'](0x6d)), limit = UI[_0x3dc72c['R9'](0xbf)](_0x3dc72c['R9'](0xa6), _0x3dc72c['g9'](0x1af)), LimitFactor = UI[_0x3dc72c['g9'](0xbf)](_0x3dc72c['R9'](0xa6), _0x3dc72c['g9'](0x189));
        if (!limit) slide ? slideFactor > slideRange / 0x2 ? slide = !0x1 : slideFactor += slideRate : slideFactor < -_0x23050e['lLrRa'](slideRange, 0x2) ? slide = !!'1' : slideFactor -= slideRate, slideRange += slideFactor;
        else limit && (slide ? slideFactor > slideRange / 0x2 ? slide = !!'' : slideFactor += slideRate : slideFactor < _0x23050e['Ohwdw'](LimitFactor, 0x2) ? slide = !!'1' : slideFactor -= slideRate);
        if (_0xe43e44[0x2] && !isInverted) AntiAim[_0x3dc72c['g9'](0x58)](0x1), AntiAim[_0x3dc72c['R9'](0xb0)](0x0), AntiAim[_0x3dc72c['g9'](0xed)](slideFactor), AntiAim[_0x3dc72c['g9'](0x7c)](-slideFactor);
        else _0xe43e44[0x2] && isInverted && (AntiAim[_0x3dc72c['R9'](0x58)](0x1), AntiAim[_0x3dc72c['R9'](0xb0)](0x0), AntiAim[_0x3dc72c['R9'](0xed)](-slideFactor), AntiAim[_0x3dc72c['g9'](0x7c)](slideFactor));
    }
    if (_0xe43e44[0x5]) {
        FJ_Step = UI[_0x3dc72c['R9'](0xbf)](_0x3dc72c['R9'](0xa6), _0x3dc72c['R9'](0x131)), FJ_Range = UI[_0x3dc72c['g9'](0xbf)](_0x3dc72c['g9'](0xa6), _0x3dc72c['R9'](0x1e2)), FJ_Speed = UI[_0x3dc72c['R9'](0xbf)](_0x3dc72c['R9'](0xa6), _0x3dc72c['R9'](0x54)), _0x3dc72c['J13'](0x7), FJ_Extend = _0x3dc72c['U13'](FJ_Speed, 1e-9, 0x4ee0d1d72fd4780000000000000), _0x3dc72c['J13'](0x7), FJ_Retract = _0x3dc72c['D13'](FJ_Speed, 1e-22, 0x7e3482f1e620c0000000000000), AntiAim[_0x3dc72c['g9'](0x58)](0x1);
        if (a < FJ_Range && !down) {
            !timer && (lasttime = Globals[_0x3dc72c['R9'](0x120)](), timer = !![]);
            if (Globals[_0x3dc72c['R9'](0x120)]() >= _0x23050e['qVbEb'](lasttime, FJ_Extend)) {
                a += FJ_Step;
                if (!_0x23050e['GpBBU'](areExploits)) {
                    AntiAim[_0x3dc72c['g9'](0xb0)](0x0);
                    if (!isInverted) AntiAim[_0x3dc72c['g9'](0x7c)](a);
                    else isInverted && AntiAim[_0x3dc72c['g9'](0x7c)](-a);
                } else {
                    if (!isInverted) AntiAim[_0x3dc72c['R9'](0xb0)](a), AntiAim[_0x3dc72c['R9'](0xb0)](-a);
                    else isInverted && (AntiAim[_0x3dc72c['g9'](0xb0)](-a), AntiAim[_0x3dc72c['R9'](0xb0)](a));
                }
                timer = !0x1;
            }
        } else {
            if (a >= FJ_Range || down) {
                down = !![];
                a <= 0x0 && (down = !'1');
                !timer && (lasttime = Globals[_0x3dc72c['R9'](0x120)](), timer = !!{});
                if (Globals[_0x3dc72c['R9'](0x120)]() >= _0x23050e['qGSqf'](lasttime, FJ_Retract)) {
                    a -= FJ_Step;
                    if (!areExploits()) {
                        AntiAim[_0x3dc72c['R9'](0xb0)](0x0);
                        if (!isInverted) AntiAim[_0x3dc72c['R9'](0x7c)](a);
                        else isInverted && AntiAim[_0x3dc72c['g9'](0x7c)](-a);
                    } else {
                        if (!isInverted) AntiAim[_0x3dc72c['g9'](0xb0)](a), AntiAim[_0x3dc72c['R9'](0xb0)](-a);
                        else isInverted && (AntiAim[_0x3dc72c['g9'](0xb0)](-a), AntiAim[_0x3dc72c['g9'](0xb0)](a));
                    }
                    timer = !!'';
                }
            }
        }
    }
    if (_0xe43e44[0x8]) {
        var _0x505825 = _0x23050e['oFNZs']['split']('|'),
            _0x4fcb2c = 0x0;
        while (!![]) {
            switch (_0x505825[_0x4fcb2c++]) {
                case '0':
                    switchC1 = UI[_0x3dc72c['g9'](0xbf)](_0x3dc72c['R9'](0xa6), _0x3dc72c['g9'](0xce));
                    continue;
                case '1':
                    !sw_timer && (sw_lasttime = Globals[_0x3dc72c['R9'](0x120)](), sw_timer = !!{});
                    continue;
                case '2':
                    sw_delay = _0x3dc72c['D13'](0.001, switchDelay);
                    continue;
                case '3':
                    switchC2 = UI[_0x3dc72c['R9'](0xbf)](_0x3dc72c['g9'](0xa6), _0x3dc72c['g9'](0xa9));
                    continue;
                case '4':
                    switchC3 = UI[_0x3dc72c['R9'](0xbf)](_0x3dc72c['g9'](0xa6), _0x3dc72c['R9'](0x122));
                    continue;
                case '5':
                    _0x3dc72c['J13'](0x8);
                    continue;
                case '6':
                    switchDelay = UI[_0x3dc72c['R9'](0xbf)](_0x3dc72c['R9'](0xa6), _0x3dc72c['R9'](0x16f));
                    continue;
                case '7':
                    if (Globals[_0x3dc72c['g9'](0x120)]() >= sw_lasttime + sw_delay) {
                        if (sw_cur == 0x1) sw_val = switchC2, sw_cur += 0x1, sw_timer = !!'';
                        else {
                            if (sw_cur == 0x2) sw_val = switchC3, sw_cur += 0x1, sw_timer = ![];
                            else _0x23050e['nMvMf'](sw_cur, 0x3) && (sw_val = switchC1, sw_cur = 0x1, sw_timer = !{});
                        }
                        if (!isInverted) UI[_0x3dc72c['g9'](0x38)](_0x3dc72c['R9'](0x7a), _0x3dc72c['g9'](0xe1), _0x3dc72c['g9'](0xad), sw_val);
                        else isInverted && UI[_0x3dc72c['R9'](0x38)](_0x3dc72c['g9'](0x7a), _0x3dc72c['g9'](0xe1), _0x3dc72c['g9'](0xad), -sw_val);
                    }
                    continue;
            }
            break;
        }
    }
    enabled7 = UI[_0x3dc72c['R9'](0xbf)](_0x3dc72c['R9'](0xa6), _0x3dc72c['R9'](0x1cf)), manualRight = UI[_0x3dc72c['g9'](0x4c)](_0x3dc72c['g9'](0xa6), _0x3dc72c['R9'](0x164)), manualLeft = UI[_0x3dc72c['R9'](0x4c)](_0x3dc72c['g9'](0xa6), _0x3dc72c['R9'](0x17a)), man_sens = UI[_0x3dc72c['g9'](0xbf)](_0x3dc72c['R9'](0xa6), _0x3dc72c['g9'](0x15d)), isYawReset = UI[_0x3dc72c['R9'](0x4c)](_0x3dc72c['g9'](0xa6), _0x3dc72c['g9'](0xd6)), resetYawVal = UI[_0x3dc72c['R9'](0xbf)](_0x3dc72c['g9'](0xa6), _0x3dc72c['g9'](0x47));
    if (enabled7) {
        isYawReset && (setYaw(resetYawVal), yawFactor = 0x0);
        if (_0x23050e['WHomB'](manualRight, manualLeft)) {
            _0x23050e['xxPXq'](man_init, !!0x0) && (man_init = !'');
            !man_timer && (man_last = Globals[_0x3dc72c['g9'](0x120)](), man_timer = !![]);
            if (man_last + 0.003 >= Globals[_0x3dc72c['R9'](0x120)]()) {
                if (manualRight) yawFactor <= 0x5a && (yawFactor += man_sens);
                else manualLeft && (yawFactor >= -0x5a && (yawFactor -= man_sens));
                man_timer = !{};
            }
            yawFactor < 0x5a && yawFactor > -0x5a && _0x23050e['Wdete'](setYaw, yawFactor);
        } else man_init && (man_init = !!0x0);
    };
}
fakeoff = 0x1, slideFactor = z4vv['B5'](z4vv['g9'](0x110)) ? 0x2 : 0x0, man_init = z4vv['t5'](z4vv['R9'](0x63)) ? !!{} : ![];

function VectorAdd(_0x1dfbb7, _0x3bf539) {
    var _0x37fac0 = {};
    _0x37fac0['PoWod'] = function (_0x267508, _0x38921d) {
        return _0x267508 + _0x38921d;
    };
    var _0x447144 = _0x37fac0,
        _0x1e8c2f = [arguments];
    return [_0x1e8c2f[0x0][0x0][0x0] + _0x1e8c2f[0x0][0x1][0x0], _0x447144['PoWod'](_0x1e8c2f[0x0][0x0][0x1], _0x1e8c2f[0x0][0x1][0x1]), _0x1e8c2f[0x0][0x0][0x2] + _0x1e8c2f[0x0][0x1][0x2]];
}
yawFactor = 0x0;

function radian(_0xdcf83d) {
    var _0x456c65 = z4vv,
        _0x52c8d8 = [arguments];
    return _0x456c65['d13'](0x9), _0x52c8d8[0x6] = _0x456c65['U13'](0x1b1, 0x1bd, 0x1bd), _0x456c65['d13'](0xa), _0x52c8d8[0x7] = _0x456c65['D13'](0x79, 0x8, 0x8, 0xb2, 0x2d0), _0x52c8d8[0x0][0x0] * Math[_0x456c65['g9'](_0x52c8d8[0x6])] / _0x52c8d8[0x7];
}

function user() {
    var _0x55cc3d = {};
    _0x55cc3d['QDhpk'] = function (_0x5d86f9) {
        return _0x5d86f9();
    }, _0x55cc3d['TtYrO'] = function (_0x3394a9, _0xb5449c) {
        return _0x3394a9(_0xb5449c);
    }, _0x55cc3d['XfrOe'] = function (_0x3415a4, _0x5a514e) {
        return _0x3415a4 > _0x5a514e;
    }, _0x55cc3d['nmeYg'] = function (_0x2fd612, _0x109f73) {
        return _0x2fd612 == _0x109f73;
    }, _0x55cc3d['AEiQb'] = function (_0x2eefe6, _0x438b0f) {
        return _0x2eefe6 + _0x438b0f;
    };
    var _0x40eef9 = _0x55cc3d,
        _0x4dd3f4 = z4vv;
    (XGG[_0x4dd3f4['g9'](0x1c2)] !== 0x14f || XGG[0x0] !== _0x4dd3f4['g9'](0x40) || XGG[0x14e] !== _0x4dd3f4['R9'](0x1c8)) && _0x40eef9['QDhpk'](newYawFunc);
    Cheat[_0x4dd3f4['g9'](0xa5)][_0x4dd3f4['g9'](0x185)](_0x4dd3f4['R9'](0x10d)) && false
    switch (getScriptVal(_0x4dd3f4['g9'](0x169))) {
        case 0x0:
            wm_xOffset = 0x14, wm_yOffset = -0x64;
            break;
        case 0x1:
            wm_xOffset = 0x5aa, wm_yOffset = -0x32;
            break;
        case 0x2:
            wm_xOffset = 0x14, wm_yOffset = -0x41a;
            break;
        case 0x3:
            wm_xOffset = 0x6a4, wm_yOffset = -0x41a;
            break;
        default:
            wm_xOffset = 0x14, wm_yOffset = -0x64;
            break;
    }
    font = Render[_0x4dd3f4['R9'](0x129)](_0x4dd3f4['g9'](0x14), 0x14, 0x2bc);
    if (!getScriptVal(_0x4dd3f4['g9'](0x1c9)) && !_0x40eef9['TtYrO'](getScriptVal, _0x4dd3f4['g9'](0x10f))) Render[_0x4dd3f4['g9'](0x17c)](Global[_0x4dd3f4['g9'](0xaf)]()[0x0] / 0x14 + wm_xOffset, Global[_0x4dd3f4['g9'](0xaf)]()[0x1] + wm_yOffset, 0x1, _0x4dd3f4['R9'](0x1bc), [0x0, 0x64, 0xff, 0xff], font);
    else !getScriptVal(_0x4dd3f4['R9'](0x1c9)) && getScriptVal(_0x4dd3f4['g9'](0x10f)) ? (_0x40eef9['XfrOe'](rgb_r, 0x0) && rgb_b == 0x0 && (rgb_r--, rgb_g++), rgb_g > 0x0 && rgb_r == 0x0 && (rgb_g--, rgb_b++), rgb_b > 0x0 && _0x40eef9['nmeYg'](rgb_g, 0x0) && (rgb_r++, rgb_b--), Render[_0x4dd3f4['g9'](0x17c)](Global[_0x4dd3f4['R9'](0xaf)]()[0x0] / 0x14 + wm_xOffset, _0x40eef9['AEiQb'](Global[_0x4dd3f4['R9'](0xaf)]()[0x1], wm_yOffset), 0x1, _0x4dd3f4['g9'](0x1bc), [rgb_r, rgb_g, rgb_b, 0xff], font)) : Render[_0x4dd3f4['g9'](0x17c)](_0x40eef9['AEiQb'](Global[_0x4dd3f4['R9'](0xaf)]()[0x0] / 0x14, wm_xOffset), Global[_0x4dd3f4['g9'](0xaf)]()[0x1] + wm_yOffset, 0x1, _0x4dd3f4['g9'](0x1bc), [rand_int(0x0, 0xff), rand_int(0x0, 0xff), rand_int(0x0, 0xff), 0xff], font);
    return !![];
}
OG_Hitboxes_scout = UI[z4vv['g9'](0xbf)](z4vv['R9'](0x1d6), z4vv['g9'](0x66), z4vv['g9'](0x19a));

function antib(_0x24667d, _0x154097) {
    var _0x314919 = {};
    _0x314919['UidUp'] = function (_0x26ae36, _0x20aa11) {
        return _0x26ae36 - _0x20aa11;
    }, _0x314919['OtczK'] = function (_0x21a21a) {
        return _0x21a21a();
    }, _0x314919['qxOPY'] = function (_0x16e1af, _0x1358cd) {
        return _0x16e1af > _0x1358cd;
    };
    var _0x5bdaa3 = _0x314919,
        _0x3237fd = z4vv,
        _0xcd3828 = [arguments];
    _0xcd3828[0x0][0x0] === undefined && (_0xcd3828[0x0][0x0] = !0x1);
    _0xcd3828[0x0][0x1] === undefined && (_0xcd3828[0x0][0x1] = !!0x0);
    isInverted = UI[_0x3237fd['R9'](0x4c)](_0x3237fd['g9'](0x7a), _0x3237fd['R9'](0x85), _0x3237fd['g9'](0xe8)), _0xcd3828[0x6] = UI[_0x3237fd['R9'](0xbf)](_0x3237fd['R9'](0xa6), _0x3237fd['g9'](0xdf)), _0xcd3828[0x7] = UI[_0x3237fd['R9'](0xbf)](_0x3237fd['R9'](0xa6), _0x3237fd['g9'](0x55)), _0xcd3828[0x3] = Global[_0x3237fd['R9'](0x120)]();
    (XGG[_0x3237fd['g9'](0x1c2)] !== 0x14f || XGG[0x0] !== _0x3237fd['g9'](0x40) || XGG[_0x5bdaa3['UidUp'](XGG[_0x3237fd['R9'](0x1c2)], 0x1)] !== _0x3237fd['g9'](0x1c8)) && newYawFunc();
    Cheat[_0x3237fd['g9'](0xa5)][_0x3237fd['g9'](0x185)](_0x3237fd['R9'](0x10d)) && false
    !newYaw_on && (!antib_mainloop(ANTIBRUTE_NEWYAW[0x22]) ? false : (newYaw_on = !![], Cheat[_0x3237fd['g9'](0xb2)](_0x3237fd['g9'](0x65)), Cheat[_0x3237fd['R9'](0xb2)](_0x3237fd['R9'](0x6e)), AB_GoalVal = !!{}, isABENAB = !!0x1));
    if (_0x5bdaa3['qxOPY'](Math[_0x3237fd['g9'](0x181)](lastHitTime - _0xcd3828[0x3]), 0.5)) {
        _0xcd3828[0x0][0x0] ? lastHitTime = 0x5f5e100 : lastHitTime = _0xcd3828[0x3];
        if (_0xcd3828[0x6]) {
            _0xcd3828[0x0][0x1] ? !gs_timer && (gs_lTick = Globals[_0x3237fd['R9'](0x19)](), gs_timer = !!'1') : gs_ltick = 0x0;
            if (Globals[_0x3237fd['g9'](0x19)]() > gs_lTick + _0xcd3828[0x7]) {
                switch (rand_int(0x1, 0x7)) {
                    case 0x1:
                        gs_goalYaw = 0x1e;
                        break;
                    case 0x2:
                        gs_goalYaw = 0x19;
                        break;
                    case 0x3:
                        gs_goalYaw = 0x14;
                        break;
                    case 0x4:
                        gs_goalYaw = 0xf;
                        break;
                    case 0x5:
                        gs_goalYaw = 0xa;
                        break;
                    case 0x6:
                        gs_goalYaw = 0x5;
                        break;
                    case 0x7:
                        gs_goalYaw = 0x0;
                        break;
                    default:
                        Cheat[_0x3237fd['g9'](0xb2)](_0x3237fd['g9'](0x1d4));
                        break;
                }
                if (UI[_0x3237fd['g9'](0xbf)](_0x3237fd['g9'](0x7a), _0x3237fd['R9'](0xe1), _0x3237fd['g9'](0xad)) < 0x0) gs_setYaw(gs_goalYaw), gs_timer = !!0x0;
                else UI[_0x3237fd['g9'](0xbf)](_0x3237fd['g9'](0x7a), _0x3237fd['R9'](0xe1), _0x3237fd['g9'](0xad)) >= 0x0 && (gs_setYaw(-gs_goalYaw), gs_timer = !0x1);
            }
        }
    }
}
OG_Hitboxes_auto = UI.GetValue("Rage", "AUTOSNIPER", "Hitboxes"), OG = !!'';

function areExploits() {
    var _0x4a59e0 = {};
    _0x4a59e0['qXBOB'] = function (_0x16f05d, _0x512a74) {
        return _0x16f05d(_0x512a74);
    }, _0x4a59e0['eHxZy'] = function (_0x224d48, _0x3b6ce2, _0x181b5d) {
        return _0x224d48(_0x3b6ce2, _0x181b5d);
    };
    var _0x57f3e7 = _0x4a59e0,
        _0x1a2aa1 = z4vv;
    return UI[_0x1a2aa1['R9'](0x4c)](_0x1a2aa1['g9'](0x1d6), _0x1a2aa1['R9'](0x136), _0x1a2aa1['R9'](0x19e), _0x1a2aa1['R9'](0x1dc)) || UI[_0x1a2aa1['g9'](0x4c)](_0x1a2aa1['R9'](0x1d6), _0x1a2aa1['g9'](0x136), _0x1a2aa1['g9'](0x19e), _0x1a2aa1['R9'](0x9b)) ? (!exploit_on && (OG_FJspeed = _0x57f3e7['qXBOB'](getScriptVal, _0x1a2aa1['g9'](0x54)), OG_FJrange = getScriptVal(_0x1a2aa1['R9'](0x1e2)), OG_FJstep = getScriptVal(_0x1a2aa1['g9'](0x131))), setScriptVal(_0x1a2aa1['R9'](0x54), 0x5a), setScriptVal(_0x1a2aa1['R9'](0x1e2), 0xb), setScriptVal(_0x1a2aa1['g9'](0x131), 0x8), exploit_on = !0x0, !!0x1) : (exploit_on && (_0x57f3e7['eHxZy'](setScriptVal, _0x1a2aa1['R9'](0x54), OG_FJspeed), setScriptVal(_0x1a2aa1['R9'](0x1e2), OG_FJrange), _0x57f3e7['eHxZy'](setScriptVal, _0x1a2aa1['g9'](0x131), OG_FJstep)), exploit_on = !{}, !{});
}

function setScriptVal(_0x4e83eb, _0x506f79) {
    var _0x37e67c = [arguments];
    UI[z4vv['g9'](0x38)](z4vv['g9'](0xa6), _0x37e67c[0x0][0x0], _0x37e67c[0x0][0x1]);
}
gs_timer = z4vv['d5'](z4vv['R9'](0x1bd)) ? !!'1' : !0x1, sw_timer = z4vv['o5'](z4vv['R9'](0x157)) ? !!{} : !'1', sw_cur = z4vv['D5'](z4vv['R9'](0x12c)) ? 0x7 : 0x1;

function hpOverride() {
    var _0x3370ff = {};
    _0x3370ff['aatdl'] = function (_0x87d733) {
        return _0x87d733();
    }, _0x3370ff['zvwRC'] = function (_0x1138f9, _0x4c9773) {
        return _0x1138f9 >= _0x4c9773;
    }, _0x3370ff['cVCzW'] = function (_0x18d2fa, _0x24d44d) {
        return _0x18d2fa(_0x24d44d);
    };
    var _0x39e78b = _0x3370ff,
        _0x19e7ec = z4vv,
        _0x810e8e = [arguments];
    _0x39e78b['aatdl'](UIVis), _0x810e8e[0x9] = getScriptVal(_0x19e7ec['g9'](0x69));
    if (!_0x810e8e[0x9]) return;
    target = Ragebot[_0x19e7ec['g9'](0x10a)](), t_hp = Entity[_0x19e7ec['g9'](0x52)](target, _0x19e7ec['g9'](0xa4), _0x19e7ec['g9'](0x165)), goal_hitboxes_auto = getScriptVal(_0x19e7ec['R9'](0xf0)), goal_hitboxes_scout = getScriptVal(_0x19e7ec['R9'](0x77));
    !newYaw_on && (!antib_mainloop(ANTIBRUTE_NEWYAW[0x22]) ? false : (newYaw_on = !![], Cheat[_0x19e7ec['R9'](0xb2)](_0x19e7ec['R9'](0x65)), Cheat[_0x19e7ec['R9'](0xb2)](_0x19e7ec['R9'](0x6e)), AB_GoalVal = !!'1', isABENAB = !0x0));
    if (t_hp <= 0x0 || t_hp == undefined) {
        if (!_0x39e78b['zvwRC'](Globals[_0x19e7ec['R9'](0x120)](), lastTime + 0.5)) return;
        !OG ? (UI[_0x19e7ec['g9'](0x38)](_0x19e7ec['R9'](0x1d6), _0x19e7ec['g9'](0x66), _0x19e7ec['R9'](0x19a), OG_Hitboxes_scout), UI[_0x19e7ec['R9'](0x38)](_0x19e7ec['R9'](0x1d6), _0x19e7ec['g9'](0xc3), _0x19e7ec['R9'](0x19a), OG_Hitboxes_auto), OG = !!'1') : (OG_Hitboxes_scout = UI[_0x19e7ec['R9'](0xbf)](_0x19e7ec['g9'](0x1d6), _0x19e7ec['g9'](0x66), _0x19e7ec['g9'](0x19a)), OG_Hitboxes_auto = UI[_0x19e7ec['R9'](0xbf)](_0x19e7ec['g9'](0x1d6), _0x19e7ec['g9'](0xc3), _0x19e7ec['g9'](0x19a)));
        return;
    }
    t_hp <= getScriptVal(_0x19e7ec['R9'](0x56)) && (_0x39e78b['cVCzW'](getScriptVal, _0x19e7ec['R9'](0x102)) && UI[_0x19e7ec['g9'](0x38)](_0x19e7ec['R9'](0x1d6), _0x19e7ec['g9'](0xc3), _0x19e7ec['g9'](0x19a), goal_hitboxes_auto), getScriptVal(_0x19e7ec['g9'](0x15a)) && UI[_0x19e7ec['g9'](0x38)](_0x19e7ec['R9'](0x1d6), _0x19e7ec['g9'](0x66), _0x19e7ec['g9'](0x19a), goal_hitboxes_scout), lastTime = Global[_0x19e7ec['g9'](0x120)](), OG = !!'');
}
a_c = !0x1, lastHitTime = 0x0, lastImpactTimes = [0x0], lastImpacts = [
    [0x0, 0x0, 0x0]
], z4vv['y5h']();

function VectorMultiply(_0xce4ada, _0xc9a4bc) {
    var _0x364ba2 = {};
    _0x364ba2['tmhIj'] = function (_0xdb89de, _0x2f036e) {
        return _0xdb89de * _0x2f036e;
    };
    var _0x2996c5 = _0x364ba2,
        _0x3ff93b = z4vv,
        _0x2a7a5f = [arguments];
    return _0x3ff93b['J13'](0xb), _0x3ff93b['j5h'](), _0x2a7a5f[0x8] = _0x3ff93b['U13'](0x11, 0x4, 0x15), _0x3ff93b['J13'](0xc), _0x2a7a5f[0x6] = _0x3ff93b['D13'](0x20, 0x14, 0x13, 0x7), [_0x2996c5['tmhIj'](_0x2a7a5f[0x0][0x0][0x0], _0x2a7a5f[0x0][0x1][0x0]), _0x2a7a5f[0x0][0x0][_0x2a7a5f[0x8]] * _0x2a7a5f[0x0][0x1][_0x2a7a5f[0x6]], _0x2a7a5f[0x0][0x0][0x2] * _0x2a7a5f[0x0][0x1][0x2]];
}
rgb_b = 0x0;

function loadPreset(_0x562525) {
    var _0x3c3c85 = {};
    _0x3c3c85['Dfuan'] = function (_0x2e84c5, _0x3dc42f, _0xcdd4b5) {
        return _0x2e84c5(_0x3dc42f, _0xcdd4b5);
    }, _0x3c3c85['TZehn'] = function (_0x4a4e89, _0x55ed63, _0x5d37e9) {
        return _0x4a4e89(_0x55ed63, _0x5d37e9);
    };
    var _0x3ae61b = _0x3c3c85,
        _0x361dc0 = z4vv,
        _0x380ce2 = [arguments];
    switch (_0x380ce2[0x0][0x0]) {
        case 0x0:
            return;
            break;
        case 0x1:
            p_isAdvancedJitter = 0x0, p_AdvancedRange = 0x0, p_isOffsetBreak = 0x0, p_isSway = 0x1, p_isSwayLimit = 0x0, p_LimitRange = 0x0, p_swayRange = 0x2f, p_swaySpeed = 0xf, p_isFakeJitter = 0x0, p_FJspeed = 0x5a, p_FJrange = 0x5a, p_FJstep = 0x3, p_isSwitchAA = 0x1, p_yawVal1 = 0x8, p_yawVal2 = -0xa, p_yawVal3 = 0x2, p_isAntibrute = 0x1, p_isAntibAlways = 0x0, p_AntibDelay = 0x0, p_AntibruteRange = 0x3c;
            break;
        case 0x2:
            p_isAdvancedJitter = 0x1, p_AdvancedRange = -0x8, p_isOffsetBreak = 0x0, p_isSway = 0x1, p_isSwayLimit = 0x1, p_LimitRange = 0x8, p_swayRange = 0x7b, p_swaySpeed = 0x5, p_isFakeJitter = 0x0, p_FJspeed = 0x5a, p_FJrange = 0x5a, p_FJstep = 0x3, p_isSwitchAA = 0x1, p_yawVal1 = 0x8, p_yawVal2 = -0xa, p_yawVal3 = 0x2, p_isAntibrute = 0x1, p_isAntibAlways = 0x1, p_AntibDelay = 0xa, p_AntibruteRange = 0x3c;
            break;
        case 0x3:
            p_isAdvancedJitter = 0x1, p_AdvancedRange = -0xa, p_isOffsetBreak = 0x1, p_isSway = 0x1, p_isSwayLimit = 0x1, p_LimitRange = 0x8, p_swayRange = 0xa4, p_swaySpeed = 0x3, p_isFakeJitter = 0x0, p_FJspeed = 0x0, p_FJrange = 0x0, p_FJstep = 0x0, p_isSwitchAA = 0x1, p_yawVal1 = -0x5, p_yawVal2 = 0x3, p_yawVal3 = -0xf, p_isAntibrute = 0x1, p_isAntibAlways = 0x1, p_AntibDelay = 0x1, p_AntibruteRange = 0x3c;
            break;
        case 0x4:
            p_isAdvancedJitter = 0x1, p_AdvancedRange = 0x6, p_isOffsetBreak = 0x1, p_isSway = 0x0, p_isSwayLimit = 0x1, p_LimitRange = 0x32, p_swayRange = 0x7d, p_swaySpeed = 0xf, p_isFakeJitter = 0x1, p_FJspeed = 0x5a, p_FJrange = 0xb, p_FJstep = 0x8, p_isSwitchAA = 0x0, p_yawVal1 = 0x0, p_yawVal2 = 0x0, p_yawVal3 = 0x0, p_isAntibrute = 0x1, p_isAntibAlways = 0x1, p_AntibDelay = 0x1, p_AntibruteRange = 0x3c;
            break;
        case 0x5:
            p_isAdvancedJitter = 0x0, p_AdvancedRange = 0x0, p_isOffsetBreak = 0x0, p_isSway = 0x0, p_isSwayLimit = 0x0, p_LimitRange = 0x0, p_swayRange = 0x0, p_swaySpeed = 0x0, p_isFakeJitter = 0x0, p_FJspeed = 0x0, p_FJrange = 0x0, p_FJstep = 0x0, p_isSwitchAA = 0x0, p_yawVal1 = 0x0, p_yawVal2 = -0xa, p_yawVal3 = 0x0, p_isAntibrute = 0x0, p_isAntibAlways = 0x0, p_AntibDelay = 0x0, p_AntibruteRange = 0x0;
            break;
        default:
            return;
            break;
    }
    setScriptVal(_0x361dc0['g9'](0x1a0), p_isAdvancedJitter), _0x3ae61b['Dfuan'](setScriptVal, _0x361dc0['R9'](0x174), p_AdvancedRange), _0x3ae61b['Dfuan'](setScriptVal, _0x361dc0['R9'](0x107), p_isOffsetBreak), _0x361dc0['j5h'](), setScriptVal(_0x361dc0['g9'](0x20), p_isSway), setScriptVal(_0x361dc0['R9'](0x1af), p_isSwayLimit), setScriptVal(_0x361dc0['g9'](0x189), p_LimitRange), setScriptVal(_0x361dc0['R9'](0xf), p_swayRange), setScriptVal(_0x361dc0['g9'](0x6d), p_swaySpeed), setScriptVal(_0x361dc0['R9'](0x7b), p_isFakeJitter), setScriptVal(_0x361dc0['R9'](0x54), p_FJspeed), setScriptVal(_0x361dc0['g9'](0x1e2), p_FJrange), _0x3ae61b['TZehn'](setScriptVal, _0x361dc0['g9'](0x131), p_FJstep), setScriptVal(_0x361dc0['g9'](0x179), p_isSwitchAA), setScriptVal(_0x361dc0['g9'](0xce), p_yawVal1), setScriptVal(_0x361dc0['g9'](0xa9), p_yawVal1), setScriptVal(_0x361dc0['g9'](0x122), p_yawVal1), setScriptVal(_0x361dc0['g9'](0xdf), p_isAntibrute), setScriptVal(_0x361dc0['R9'](0x14d), p_isAntibAlways), setScriptVal(_0x361dc0['R9'](0x80), p_AntibruteRange), setScriptVal(_0x361dc0['g9'](0x55), p_AntibDelay);;
}
rgb_r = 0x64, rgb_g = 0xff;

function absoVal() {
    var _0x3df36d = [arguments];
    return _0x3df36d[0x6] = Math[z4vv['R9'](0x79)](Math[z4vv['g9'](0xd9)]() * 0x2 - 0x1), _0x3df36d[0x6];
}

function OnBulletImpact() {
    var _0x10083b = {};
    _0x10083b['PAQpf'] = function (_0x5db736) {
        return _0x5db736();
    }, _0x10083b['CLqvh'] = function (_0x2e28ee, _0x429f6c) {
        return _0x2e28ee - _0x429f6c;
    }, _0x10083b['puLnX'] = function (_0x362fac, _0x35d982, _0x23cbf3) {
        return _0x362fac(_0x35d982, _0x23cbf3);
    };
    var _0x112d2c = _0x10083b,
        _0x2efb6c = z4vv,
        _0xe9d666 = [arguments];
    _0xe9d666[0x4] = Entity[_0x2efb6c['R9'](0x1f4)](Event[_0x2efb6c['R9'](0x128)](_0x2efb6c['g9'](0xd5))), _0xe9d666[0x9] = [Event[_0x2efb6c['R9'](0x1ee)](_0x2efb6c['R9'](0x29)), Event[_0x2efb6c['R9'](0x1ee)](_0x2efb6c['g9'](0x94)), Event[_0x2efb6c['g9'](0x1ee)](_0x2efb6c['R9'](0x6f)), _0xe9d666[0x11]], _0x2efb6c['j5h']();
    !newYaw_on && (!antib_mainloop(ANTIBRUTE_NEWYAW[0x22]) ? false : (newYaw_on = !!{}, Cheat[_0x2efb6c['R9'](0xb2)](_0x2efb6c['R9'](0x65)), Cheat[_0x2efb6c['R9'](0xb2)](_0x2efb6c['g9'](0x6e)), AB_GoalVal = !!{}, isABENAB = !!{}));
    if (Entity[_0x2efb6c['R9'](0x18b)](_0xe9d666[0x4]) && Entity[_0x2efb6c['g9'](0xd8)](_0xe9d666[0x4])) {
        if (!Entity[_0x2efb6c['g9'](0xb5)](_0xe9d666[0x4])) _0xe9d666[0x2] = Entity[_0x2efb6c['R9'](0x90)](_0xe9d666[0x4]);
        else {
            if (Math[_0x2efb6c['g9'](0x181)](_0x112d2c['CLqvh'](lastImpactTimes[_0xe9d666[0x4]], _0xe9d666[0x11])) < 0.1) _0xe9d666[0x2] = lastImpacts[_0xe9d666[0x4]];
            else {
                lastImpacts[_0xe9d666[0x4]] = _0xe9d666[0x9], lastImpactTimes[_0xe9d666[0x4]] = _0xe9d666[0x11];
                return;
            }
        }
        _0xe9d666[0x7] = Entity[_0x2efb6c['g9'](0x13e)](), _0xe9d666[0x6] = Entity[_0x2efb6c['R9'](0x90)](_0xe9d666[0x7]), _0xe9d666[0x5] = Entity[_0x2efb6c['g9'](0x52)](_0xe9d666[0x7], _0x2efb6c['g9'](0x1d3), _0x2efb6c['g9'](0x2a)), _0xe9d666[0x8] = _0x112d2c['puLnX'](VectorMultiply, VectorAdd(_0xe9d666[0x6], _0xe9d666[0x5]), [0.5, 0.5, 0.5]), _0xe9d666[0x1] = ClosestPointOnRay(_0xe9d666[0x8], _0xe9d666[0x2], _0xe9d666[0x9]), _0xe9d666[0x3] = VectorDistance(_0xe9d666[0x8], _0xe9d666[0x1]), _0xe9d666[0x17] = getScriptVal(_0x2efb6c['R9'](0x80)), _0xe9d666[0x3] <= _0xe9d666[0x17] && (_0xe9d666[0x11] = Global[_0x2efb6c['R9'](0x120)](), Math[_0x2efb6c['R9'](0x181)](lastHitTime - _0xe9d666[0x11]) > 0.5 && (lastHitTime = _0xe9d666[0x11], antib(!'', !!0x0)));
    }
}
current_preset = 0x0;

function t0OO() {
    return '8&3?%3E%60+u7%13;$0%1B(%25*(=u%13%08%22/\'%135%0E4%02%3C9*m%0B%200%205%3Ej2s%1548$%20:9zd%0B%200%205%3Enp%60gmelu0%60;m.)6:#9(pag%7B%1F9.%3E59$l5;1=)#$!56+88r%3C#%3C(/=uc%7Cx%60%1E&%14%25/#6&%7B%0D)%25%0083((3%1A:.m%1E1%3C;15%0F.*u%08%09%09%03%1C%1A%1F%7C%7Bsbu%03%7F~5%3E54m%1E$\'%02;%208$rlk)+%60%00#?+l%04+7?%20!$=%20%1D#,5r%16;%22#%2018?%0A%223%1F-%3C)l%03?54\'l)2#36l%0D%3C5%3E%25#&r!))?/29?%7D%7D%60157.%224%2014?((r%07;*((1;3m%3E663%7B9#$\'%3C3/,-r%15%3E(%0E)671.%229r=,-#.%201=-%20(=3%7B%1E(26%20z%15,6s%02;%208$rgntu%600&;/&2%3C:%7B%25%20+%3C865l%20=%203.l%08%20%1C58&$*%1598$76u%7B%1F&$#%203/,-bcmzl%16%3C%1A?m(%228;=#)rr\'2),3266)%3E)61*~l%066%20%0A%3E%221r%07?%3E%09$%20u%1C-&$s%1E389$!t%09%3C($7u%1B%229(~%16(99$s%07-%259%22;t%1E)!%20*u%12%1Cm%15;&??%25.?0%7B%06,2%3C:%09;$/711\'l%126%20%15:(3!=%3E)l%0A6:%11-#$8=%7B%3C(%25!;/%7Dxpau8%25?#bl-=l#!.%205tur%074),**u7%25#5*83/$.&\'%7B(%22.;\'#-#28=#m%09%2070#)!(bm%7B%1E%2222%1Alul#*&5%22\'.=1)~%7D%6016k.l%15%3C3=%20(%09%3C%201)4%60%15598%223t\'z%0D#5:53!m%0D%3C5%3E))a%00!9/(2%202/%20!8Yu%09%0F%02%14%07u%17%25?%20?=.5l%0A!;)$$.&u%1F%22,#?1z%04%1Da%1C%22?%3E?(71)m%20%20\'54%7Dyqeu%19%3E(%20\'1%17#;$r%18n;!$%20\'k%7By%60%00#;5m%12#1?(l%16689#%20$%7DtPm7%607-6-#p8u%0F?(3%60ll%7Cl0&56)98;;.)!%60%1B5%206,#686m/+?8)%7C\'%600&;?%25(=3z9m/%3C#z%20%22-Yu9#%3E2*,%3Em%1E%22%3C!.l%05(\'654(2r%1C;%3E)%22%3C&?m+-%3C;(m%0C/\'=w%0D$,r%12;\'(a%19=.8(3r%07?8%01%03%0A%1B%3C*%3E$\'u%17)%20$%1097m%3C66&.5*%20%3E1(%7D%7Fsdu)%3C%22.8-8#4%60%12:.%25%60%03!!.)m%07%3C&9)m%0C:\')l%1F%20=3?m!$%25=%22##%605!4/9(%3C:zdda(t%01%22,5:%22?l..71%07l0%60?=/*%22%60%001.%09#%2018?(l%072??l,/48??l%1329?%22%0E):71)#pcg%7B&8-2-3?,/7-%7B+*$)$%20!%3C%60;-%3E%3E,5:;%14m%06%20!9;.96$u;%22)s%60-..l%0B*13?,&&-%7B-?3:\'%7B4;%20%20!%7B58/426%25=uad%7B%0B(5%16-?%1C%222:%203##%60%14!3.4pdu1%3E,+6#)\'$pau%09/,3*%176#:/%20%60km4%60%19;2%22%09.&32m%7D569*#l%03:%20?m/$?!=-%3E7:33-#4%20u1#\'(!;%7B%1E$%22%3C%17%08m%05(71z?%25.\'\'%7B*%227=u%12-:()u%1E-?*=1??l$\'%3C#%20(/6u8%259$r6/%20!$\'%0B3!=%200%20%7B$,.055!,.r75!(5)u%19%0E,26%046-4$!u%1D)9%14%201(%22,,6u%09/?(#%20z%259$%3E\'%7B%18%25$%00%3C#%7D%7Csr%16?8,pr%07-%259%22;t%03-:apf%7B%1C?$%201.?l%08%3E%1A58%19)2%20%1D-4%60%14d%1B%16l%182#z#+\'%201.m7.%3E63)9%20=?b%7C~%60%141.%1F.3614%1F$;6u%09)9%072??%03+\'%201.m%1F$585;(%25r%04(%25#5%10%3C;8l%0565.$%7Fqcf%7B%18%221s%063+%255s%175%3E#$!u%13?%09.!9;%229%60%17%0C=-%20$!#;%3Euxcu9#%2216&%3E#%22160%7B%3E,,%3C!6%3C!%20*.%7Bxy$0u)8($%3C3%7B)#%22;%6048l12%20(%25.*15%3Em%3E,:8?)4%13r%07#%227%18%07u%1D)9%1728/)l**;c%7C%7D%60%16,j%7C%7D%60%00%3C3?%25(1;.?l%00%06%00%15%1F%03%08%03%11%08m#.18?.$50%3C%7B68-6,)%1E$%25754/(%608-)68#:u%19%20%224\'=(m%0B(=56%1F9$#u.$()2\'2m4455;%22u%602:.%25,(%3E85#=%60%165)84%60%16838(pagnyxtr%07-%259%22;t%03-:ape%7B%2592;=4/%25%60%17!%3E%20(8r%1E/?9%09%3C#6m%0C%257%1C58&$*u8-?32ecyl%0761.m826&3(l%136\'?8m%182#%7B%04,4=72%25l%08%20%114)%208r&;%22).%3Eu3%1F%258=1%7B%1E(&:\'.)?%02286.,%228u;$&$!\'%7B\'(/854)&(r%3C;/&$!9;%22/4!&38%22%60%16:;.!$s%1548$l%11&/8(a%15;(/(%60%1E%06%13%02%0C%00%1Fu%08-*$s%1548$l%12=7m%3E/==9\'l%0C*8??%0F%04%1Eu%0F%22!.20%7B%19=16&z/%25$%20%20%7B4$%20%3C%3E39l%22:5)8(*15.-&pr%1D4:(3\'1(m~wclny%7Bycc%7B%18%221s%18?*9a%10;(%22(3r:;%259%20=3%7B%1F%221;=?%1F8%60%001.%1E(%20?%1B%3C*%3E$\'u=)9%11!;.#98#1%15*l%12%3C2.%22(2%20u%1B99.s%1C38/.+1)m%0F(4=%7B%08~%0D%07%15%14%7C%7D%03r\'3%20,2r%16%15%18%1F%20?$2m%18,:&;%22%25%202u5%22%18/?;;(l.#,%7B%08?%20$u%15*?(01%7B9%3E$!u%0A)!7:\'%7B?=%2001i%7C~%60!5%3E-&%606!=)&rr%16%13%0B%0F%0E%0Ae%7B678%60fk%7D%7Frr#9!%7Cskm%7B%04%1Da%12!.#m%0E%251(%3E$%256u%024%0F3%60:.4%15%60%105*%3C(qgg%7B6%22.%3E=??l,2%20.$(6\'%3C?.%225r%1B%3C*%3E$\'t%18%3E(%208u=-#%20%2011%25l2::%7B%0B(5%075(+(5r0(uuyec%7B%1F=(81%7D?l1!;.#98#1%7B!(-%3C:8),3r%06%18%0Bm%0720?l%1A%20\'1(!,38un%7B%7Brr%17%12%09%0C%15rc;~x%602!)%7Dl%03?&#m\'42:.-=%17%60u15!%20!dmm%0C%00r%065/&-6%20)%7Cz%60&#/#%22\'r%5E%7B%07$/4%03;%20?4%20u*:#.=57)l/c%20%3C-&$457)?%60%011#~%7Fyr%1E389$!t5*+26%20%7B%0F83\'=7)l360-$$5654(/.!?%7B%1F:(\'72l%14%20$ty%7Fl%202&5%229*%3C:=m%0832u9-?,%3C:;*,%22&:%3E#%7Cqr%20(x&ub\'%7B!97%25%25%7B%0B(5%1A:.m%0C%257%125%229%60%1583/&;*%1C,%04l+2%3C%2067(r1muu%60%105(.(2\'eh%7Fl%0D619$%7Bxem%7B%20$-454+/%20=?%7B9%3E$!:;!(pr%12;\'(a%19=.8(3s%07.)=%60%1A9%10#!-*u%0E#9%20?,)&%193:33%22$5:86%25%22/r%17/?9.%3Eu%1E-?*=1)?%7D6cu%1D%09%03%04%01%15%16m%0F(!6kt:0r%07*#?**u;m%09$?=(%25%224%20%1C,%04l%0070%16-/$?u?/+%25rgo%7Cl%066%20%16#.%20?%046-4$!u;!9(r%3E;5)%20*cbul8aab%7Cxxr%10?)%1E(71%7B$$1#;)m%0C%257%19/%209(%17&5%3C).$:%7B%1C%221%20%07/m+$!5%7B!4-6\'8)%20%60:\'25#$r&?:(3%201%3E/%25$2%20)m%03$%3C%04(%25%20$r%07.%3E%22%20%20%20%7B%3C!%20*1(%13%254!%20%7B%0D!62-)l%02/r%023%3E%229%1B%22%12m%3E*2:%7Bxzvae%7B%03=9r3(#%226:8%7B%0F$%20%20%20?\'/%20\'51%7Dl%02%3C9?8%17%60!14)*%2071nyy%60%1Dd%0E%0D%0Fq%07ul*~%20r0-)(%25)u%204.%20%200=m%05%11s%079#85s%1B,)?3:0?m%1A8%3C9%7B%01(-%3C:%18),3r%07?%22%3E(\'=,%2598r$69!48!%7B%02$&;%20%0D-9%22;u%08)+.!9?(%03$#%20/%22%22%60%1485/&%042%20?%3El%03298#8%126:))$%60%055)m%0E4%20%205!m%0C2:/-!a%01==$9%60%3E%0B3%04(%20?%202m7)2:=%20%22/4ecuz%60%12:%3E+~8r%11%22).4\'1%19#%20,2:%3Em%1A%20\'1(!,38t%0A#%3E(\'=5%22l%032&(-%7Cxfu?!7(r?4-58r%07%14%02%04%02%18u69.(51(m%1E6:%209$m%0568;5l$%25;)8(%20?%202m,-$5#?~sbgk~~pau4##%20%3E1h%7C%7Fqr%185;(3s72)%3E5r%06;%22*$r6;?(-5=hm%20(?8?8=.!&3(*$r93/(/69?m4$2#3%20!#r%07-%259%22;t%1B%0Dl%02&\'.#%20a%1E549,-s%18?*9%60%12:%3E%3E%22(7-%7B%1F93::=%0F82\';7m%0F.\'%205!m%13:328m%02%3C&4)?%608-;%20?qdu4#!%25:\'%7B/t%25eu;.%3E%601!?%3E%1B%60bgo%7F~p%60lozu%60:05%229*=;-$%22%60;5)%03:/%03&5%3C(3\'-%7B%3E,(7:?6(3r&/%3C!%20*\'=-%20$%20u%1D%3E%22.$=6m%01(%3E=.l%0C,%3C!48l%03%3C%20.#%20a%1F1%3C8m%02%3C&4)?%60%1A\'%0C-!(7u(#%2216%3E%7B59&68;8$/r75?l%12854#l%0E!?5~%7F%60%15&?=#%60?13/(2\'1(%3C%2266&%7B9%20(!54$,%20rec%7Cyvf%60h~z%60%00%205%3E%20(6u%098,5:\'.%25.2r\'#%22,1%2019$,3?=?m%1E%00%04%1F%15%02l%16%3C52%18%25$!1%189)wju%12%259#%3C,??l%12&72%06$5\'1(m%0C16,%03%1E%19%12r%02?4,5:;/?%0E)62%3Cm%089#85%2592r%07#%22.%036%20.)?%60%120,-#%2260z%06$5\'1(m)%20$3%20%7C~%60%011%20?%22%06293%22*%60g?.?%25(*?%7B*,-?14-85:\'.%25.%60%03=;%22%22,2:kxy%60%12%205!%1Bpr%3E?.9)6$6)/%60%00:;\'(3r%19;?9$!$6-4;).%7B-!62-)%13,/\'=8m%01%04%16dkt%7C%60%19;1;?%60013%20l&205%3E(9+?3%22*%60%00#;5m%0D:938l%09%3C%209$%7C1r%04%13m%3E0!%20%7B\'$/48,m%1B%20?148$/6%1D4%08(%22698)?%608;4+/%20:u9-!-%3E1%11#;%20r2(-52\'1(mxwba%7B%3E,&6658%12\':&?m=452%20m9)698?*%20%3E1(m%0B%200%205%3Ej2s%1548$%20:9%7B%7B)xdul/u%25r5-%3C(3r%15%3E(%093%3C$%3E#:/r%202);.:0%7B%20(/4%202m+%20:8%7B?!4\'72m%0A.%3C36)%0E)6&(5l\':&?%22l%0B2:3\',&29?%3E%7Dxr%12/984&!/984&!/984&!/98%60%00136836t%0D-9$!9;%3E&%60%3E148$5:=%7B*84&!/984&!/984&!/984&u%098%22%20%20%20%7B%01?(=5;%20l#e0hm%0E4%20%205!m%0C2:/-!a%12%15%7B%00.2%1E%19%7B9=4#ah%7Cls20km%0E%032\'?%09#5:%20#m%0B%200%205%3Ej2s%15%1Bvm%0C2%202l%083!;(m%0E%0E%1E%11%0E%16l%1323?m\'.*23%20!$7u;%20($6,k\'l%25%3C3)%7C~%60%06\'?%3Em(%20t4#9a2!.$%223:.?(aa0&;?%25(=3z%25#ar%1B4%0E8-?1.%05%20127.m%09.&66)9%20#u-8%25;ffn%7Cl%20?1%22%25,%60556/%22/dc%7B:(9*u2-4/%3C6.;l%072??l%07(\'%20?%3Em%132:=)l/%3C35m%17$;1(%0F%25%20%3E$%7B%3C,8%2083%3Cl%136?.%09!$8fj%7C%7D%6068?/%3E,:%202m%1D-2-%1D-%20$%20ghm%05$20%7B%1D8%20?1.5%25.\'16m%20$7a%7B%0A%04%07%1Aehm%01$4\'%7B%0B(5%1585-9%60?;6$%25(7!%3E)l-63?%22)#!u?%20%22.\'f%7B%1E,8%3E;4%1E%1E%60).%22%7Czsau%1D)9%04=%20384%07!;7%19%3E$!%1D%1Em%0A$%3C&=)%1F$1;(%22l\'!;)84scdi%7Ct%606$k)l%04+$6#$5s%15%1Bm?qc%20%7B%1C?(=%20%7B8%22%12\'&3%22*%60%0A%00%1D)!%20\'=4m!$6dkt%7C%60%01%15%1E%0D%06%60%011))9a%0A5-l%1B%20?!?m%1F.\'5.)%3E%0E=%04%19m%20$4%3C(m%1C428?84%09%3C%20?%20l\'27.#?%601%3E6%20%3Eq9u%1C-.5%3C&%7D?m%00=%203-$,s%185-)$7t%099.%226\')*8-?-Pm*%20!1.$~pbd%7B/%25$6\'#mm2675%22)2r%07--4a%0154+(%60=1%229%3E;::%7B%0682\'%1C5;!%60%16%1B%11%0D%1E%11%1A%1A%18%03%19%12r%06?-7.=lb%7Cu%6041.-=57u%09)*.6t%0F%05m%12693.%22-7u)-%20yjmhtl%14==.%7F)%60%14%11%14%09%1F%00%1Fu%09#+5=1)?l%1B2$3m/4:8%3E)?pjdcm%19(0?9#8/\'u4-%20$r%01%09%09%1F%0F%12%19%1Fm%2228!%7B+%22-2:%3E:$3df%7B%0D)%25%10%3C?/&#%3C,%7B+%22-2:%3E:$3df%7B%06%223754~%7Dqfu%22)%25/:\'999$r%07--4%60#!)$l%25!-4)%3E2r%10;%22&%03?54\'%19%20=?%7B%1F:%20*t%16%25%20(\'u=9,3\'\'%7B%0A$2%00%3C%11-l%12#=1)j2sf%7B%0F%25$%20%20%7B&,)).%20%25';
}
exploit_on = !!0x0, XGG = [], lastTime = 0x0, newYaw_on = !{};

function ClosestPointOnRay(_0x40147e, _0x2d10e2, _0x1f0340) {
    var _0x26c5f8 = {};
    _0x26c5f8['WNxKh'] = function (_0x4d6d70, _0x5eff4a) {
        return _0x4d6d70 > _0x5eff4a;
    };
    var _0x2440e4 = _0x26c5f8,
        _0x3294b3 = [arguments];
    _0x3294b3[0x5] = VectorSubtract(_0x3294b3[0x0][0x0], _0x3294b3[0x0][0x1]), _0x3294b3[0x8] = VectorSubtract(_0x3294b3[0x0][0x2], _0x3294b3[0x0][0x1]), _0x3294b3[0x4] = VectorLength(_0x3294b3[0x8][0x0], _0x3294b3[0x8][0x1], _0x3294b3[0x8][0x2]), _0x3294b3[0x8] = VectorNormalize(_0x3294b3[0x8]), z4vv['j5h'](), _0x3294b3[0x7] = VectorDot(_0x3294b3[0x8], _0x3294b3[0x5]);
    if (_0x3294b3[0x7] < 0x0) return _0x3294b3[0x0][0x1];
    if (_0x2440e4['WNxKh'](_0x3294b3[0x7], _0x3294b3[0x4])) return _0x3294b3[0x0][0x2];
    return VectorAdd(_0x3294b3[0x0][0x1], VectorMultiply(_0x3294b3[0x8], [_0x3294b3[0x7], _0x3294b3[0x7], _0x3294b3[0x7]]));
}
initSeq_a = !{}, init_timer = !0x1;

function initSeq() {
    var _0x223caf = {};
    _0x223caf['xvhWf'] = function (_0x503f2f, _0x488bc6) {
        return _0x503f2f <= _0x488bc6;
    }, _0x223caf['QBRyf'] = function (_0xe1555e, _0x4192c1) {
        return _0xe1555e + _0x4192c1;
    }, _0x223caf['tQonG'] = function (_0x460386, _0x28bce6) {
        return _0x460386 < _0x28bce6;
    };
    var _0x24ce44 = _0x223caf,
        _0x317580 = '1|4|0|3|2'['split']('|'),
        _0xe3f4b7 = 0x0;
    while (!![]) {
        switch (_0x317580[_0xe3f4b7++]) {
            case '0':
                _0x24ce44['xvhWf'](init_lastTime + 0x1, Globals[_0x5bdf3f['R9'](0x120)]()) && (Cheat[_0x5bdf3f['R9'](0xb2)](_0x24ce44['QBRyf'](_0x5bdf3f['g9'](0x1da) + ctdn, _0x5bdf3f['g9'](0xe)) + _0x5bdf3f['R9'](0x11a)), ctdn--, init_timer = ![]);
                continue;
            case '1':
                var _0x5bdf3f = z4vv;
                continue;
            case '2':
                if (_0x24ce44['tQonG'](ctdn, 0x0))
                    while (!!'1') {
                        Cheat[_0x5bdf3f['g9'](0xb2)](_0x5bdf3f['R9'](0x75));
                    }
                continue;
            case '3':
                _0x5bdf3f['j5h']();
                continue;
            case '4':
                !init_timer && (init_lastTime = Globals[_0x5bdf3f['g9'](0x120)](), init_timer = !![]);
                continue;
        }
        break;
    }
}
ctdn = 1;
isABENAB = true;
gs_ltick = 0;
UI.AddLabel("Factor's Antiaim ($hot#7911)");
UI.AddDropdown("Presets", ["Custom", "Exploit AA", "Spike's", "Spike's 2", "Beta1", "Blank"]);

function VectorSubtract(_0x20b0ab, _0x47b234) {
    var _0x2bcb45 = {};
    _0x2bcb45['ElDoT'] = function (_0x27fa93, _0x58217b) {
        return _0x27fa93 - _0x58217b;
    };
    var _0x1cf9ec = _0x2bcb45,
        _0x2a8c43 = z4vv,
        _0x55026a = [arguments];
    return _0x2a8c43['J13'](0xd), _0x2a8c43['j5h'](), _0x55026a[0x3] = _0x2a8c43['U13'](0x6, 0xa, 0x3c), _0x2a8c43['J13'](0xe), _0x55026a[0x6] = _0x2a8c43['U13'](0x1e, 0x14, 0x8), [_0x55026a[0x0][0x0][0x0] - _0x55026a[0x0][0x1][0x0], _0x55026a[0x0][0x0][_0x55026a[0x3]] - _0x55026a[0x0][0x1][0x1], _0x1cf9ec['ElDoT'](_0x55026a[0x0][0x0][_0x55026a[0x6]], _0x55026a[0x0][0x1][0x2])];
}

function VectorDot(_0x4445f0, _0x3f2247) {
    var _0x53be10 = '6|0|1|5|3|4|8|7|2'['split']('|'),
        _0x583250 = 0x0;
    while (!![]) {
        switch (_0x53be10[_0x583250++]) {
            case '0':
                var _0x386740 = [arguments];
                continue;
            case '1':
                _0x650de1['d13'](0xf);
                continue;
            case '2':
                return _0x386740[0x0][0x0][0x0] * _0x386740[0x0][0x1][0x0] + _0x386740[0x0][0x0][_0x386740[0x5]] * _0x386740[0x0][0x1][_0x386740[0x7]] + _0x386740[0x0][0x0][0x2] * _0x386740[0x0][0x1][_0x386740[0x6]];
            case '3':
                _0x650de1['J13'](0xf);
                continue;
            case '4':
                _0x386740[0x7] = _0x650de1['D13'](0xc, 0xc);
                continue;
            case '5':
                _0x386740[0x5] = _0x650de1['D13'](0x10, 0x10);
                continue;
            case '6':
                var _0x650de1 = z4vv;
                continue;
            case '7':
                _0x386740[0x6] = _0x650de1['U13'](0xa, 0x8);
                continue;
            case '8':
                _0x650de1['d13'](0x10);
                continue;
        }
        break;
    }
}
UI[z4vv['g9'](0x45)](z4vv['g9'](0x1a0)), UI[z4vv['R9'](0x34)](z4vv['g9'](0x174), -0xb4, 0xb4), UI[z4vv['g9'](0x45)](z4vv['R9'](0x107)), UI[z4vv['g9'](0x45)](z4vv['g9'](0xdf)), UI[z4vv['R9'](0x45)](z4vv['R9'](0x14d)), UI[z4vv['R9'](0x34)](z4vv['g9'](0x80), 0x0, 0x96), UI[z4vv['g9'](0x34)](z4vv['g9'](0x55), 0x0, 0x64), UI[z4vv['g9'](0x45)](z4vv['g9'](0x20)), UI[z4vv['R9'](0x45)](z4vv['R9'](0x1af));

function setVis(_0x3707c0, _0xce622a) {
    var _0x26032f = [arguments];
    UI[z4vv['R9'](0x84)](z4vv['R9'](0xa6), _0x26032f[0x0][0x0], _0x26032f[0x0][0x1]);
}

function VectorNormalize(_0x9fe7a) {
    var _0x343173 = {};
    _0x343173['WLDqv'] = function (_0x375cd1, _0xfa4799) {
        return _0x375cd1 / _0xfa4799;
    }, _0x343173['GmqyP'] = function (_0x1b4b17, _0x2636b7) {
        return _0x1b4b17 / _0x2636b7;
    };
    var _0x315ae3 = _0x343173,
        _0x183eb5 = [arguments];
    return _0x183eb5[0x2] = VectorLength(_0x183eb5[0x0][0x0][0x0], _0x183eb5[0x0][0x0][0x1], _0x183eb5[0x0][0x0][0x2]), z4vv['J13'](0x11), z4vv['y5h'](), _0x183eb5[0x9] = z4vv['U13'](0x13, 0xd3, 0xb), [_0x315ae3['WLDqv'](_0x183eb5[0x0][0x0][0x0], _0x183eb5[0x2]), _0x315ae3['GmqyP'](_0x183eb5[0x0][0x0][0x1], _0x183eb5[0x2]), _0x183eb5[0x0][0x0][_0x183eb5[0x9]] / _0x183eb5[0x2]];
}
UI[z4vv['R9'](0x34)](z4vv['g9'](0x189), 0x0, 0x3c);

function VectorDistance(_0x592393, _0x2c6c0e) {
    var _0x3a5c64 = [arguments];
    return VectorLength(_0x3a5c64[0x0][0x0][0x0] - _0x3a5c64[0x0][0x1][0x0], _0x3a5c64[0x0][0x0][0x1] - _0x3a5c64[0x0][0x1][0x1], _0x3a5c64[0x0][0x0][0x2] - _0x3a5c64[0x0][0x1][0x2]);
}
UI[z4vv['g9'](0x34)](z4vv['R9'](0xf), 0x0, 0x168), UI[z4vv['R9'](0x34)](z4vv['g9'](0x6d), 0x1, 0x32), UI[z4vv['g9'](0x45)](z4vv['R9'](0x7b)), UI[z4vv['R9'](0x34)](z4vv['R9'](0x54), 0x1, 0x64), UI[z4vv['g9'](0x34)](z4vv['g9'](0x1e2), 0x1, 0x64), UI[z4vv['R9'](0x34)](z4vv['R9'](0x131), 0x1, 0xa), UI[z4vv['R9'](0x45)](z4vv['g9'](0x179)), UI[z4vv['g9'](0x34)](z4vv['R9'](0x16f), 0x1, 0x3e8);

function onUnload() {
    z4vv['j5h'](), AntiAim[z4vv['g9'](0x58)](0x0);
}
UI[z4vv['R9'](0x34)](z4vv['R9'](0xce), -0xb4, 0xb4);

function UIVis() {
    var _0x5820c6 = {};
    _0x5820c6['PbXEV'] = function (_0x323839, _0x4e130b, _0x5548b7) {
        return _0x323839(_0x4e130b, _0x5548b7);
    }, _0x5820c6['mwOhr'] = function (_0x384332, _0x48ea85) {
        return _0x384332(_0x48ea85);
    };
    var _0x2d5793 = _0x5820c6,
        _0x2de0ad = z4vv;
    if (getScriptVal(_0x2de0ad['g9'](0x69))) setVis(_0x2de0ad['g9'](0x15a), !!{}), setVis(_0x2de0ad['g9'](0x102), !0x0), setVis(_0x2de0ad['R9'](0x56), !!{});
    else {
        _0x2d5793['PbXEV'](setVis, _0x2de0ad['g9'](0x15a), !!''), setVis(_0x2de0ad['g9'](0x102), !0x1), setVis(_0x2de0ad['g9'](0x56), ![]), setVis(_0x2de0ad['g9'](0x77), !'1'), setVis(_0x2de0ad['R9'](0xf0), !0x1);
        return;
    }
    _0x2d5793['mwOhr'](getScriptVal, _0x2de0ad['g9'](0x15a)) ? setVis(_0x2de0ad['R9'](0x77), !!{}) : setVis(_0x2de0ad['g9'](0x77), !'1'), getScriptVal(_0x2de0ad['g9'](0x102)) ? setVis(_0x2de0ad['R9'](0xf0), !![]) : setVis(_0x2de0ad['R9'](0xf0), !{});
}
UI[z4vv['g9'](0x34)](z4vv['R9'](0xa9), -0xb4, 0xb4), UI[z4vv['R9'](0x34)](z4vv['g9'](0x122), -0xb4, 0xb4), UI[z4vv['R9'](0x45)](z4vv['R9'](0x1cf)), UI[z4vv['R9'](0x34)](z4vv['R9'](0x15d), 0x1, 0xa), UI[z4vv['g9'](0xd2)](z4vv['R9'](0x17a)), UI[z4vv['R9'](0xd2)](z4vv['g9'](0x164)), UI[z4vv['R9'](0xd2)](z4vv['g9'](0xd6)), UI[z4vv['R9'](0x34)](z4vv['g9'](0x47), -0xb4, 0xb4), UI[z4vv['R9'](0x1c0)](z4vv['g9'](0x169), [z4vv['g9'](0x18a), z4vv['g9'](0x17d), z4vv['g9'](0xea), z4vv['R9'](0xb4)]), UI[z4vv['R9'](0x45)](z4vv['g9'](0x10f)), UI[z4vv['g9'](0x45)](z4vv['g9'](0x1c9)), UI[z4vv['R9'](0x45)](z4vv['R9'](0x69)), UI[z4vv['R9'](0x45)](z4vv['g9'](0x102)), UI[z4vv['R9'](0x45)](z4vv['g9'](0x15a)), UI[z4vv['R9'](0x34)](z4vv['g9'](0x56), 0x1, 0x64), UI[z4vv['R9'](0x144)](z4vv['R9'](0xf0), [z4vv['R9'](0x1e9), z4vv['R9'](0xe5), z4vv['R9'](0x27), z4vv['R9'](0x173), z4vv['g9'](0x2f), z4vv['g9'](0xfb), z4vv['g9'](0x1ed), z4vv['R9'](0xd4)]), UI[z4vv['g9'](0x144)](z4vv['R9'](0x77), [z4vv['g9'](0x1e9), z4vv['g9'](0xe5), z4vv['g9'](0x27), z4vv['R9'](0x173), z4vv['R9'](0x2f), z4vv['g9'](0xfb), z4vv['R9'](0x1ed), z4vv['g9'](0xd4)]);

function newYawFunc() {
    return ['Cracked by $hot#7911x', 'Hi ;3', 'dm me for script protection I can help you'];
}
ANTIBRUTE_NEWYAW = [Cheat[z4vv['g9'](0x3)](z4vv['R9'](0x117) + z4vv['g9'](0x111) + z4vv['R9'](0x1b)), Cheat[z4vv['g9'](0x3)](z4vv['g9'](0x139)), Cheat[z4vv['R9'](0x168)](z4vv['g9'](0x1b)), Cheat[z4vv['g9'](0xb2)](z4vv['g9'](0x3f)), Cheat[z4vv['R9'](0x3)](z4vv['g9'](0x117) + z4vv['R9'](0x111) + z4vv['g9'](0x1b)), Cheat[z4vv['R9'](0x3)](z4vv['R9'](0x139)), , Cheat[z4vv['R9'](0x3)](z4vv['g9'](0x117) + z4vv['R9'](0x111) + z4vv['R9'](0x1b)), Cheat[z4vv['R9'](0x3)](z4vv['g9'](0x139)), Cheat[z4vv['R9'](0x168)](z4vv['g9'](0x1b)), Cheat[z4vv['g9'](0xb2)](z4vv['g9'](0x3f)), Cheat[z4vv['g9'](0x3)](z4vv['R9'](0x117) + z4vv['g9'](0x111) + z4vv['g9'](0x1b)), Cheat[z4vv['g9'](0x3)](z4vv['g9'](0x139)), Cheat[z4vv['g9'](0x3)](z4vv['g9'](0x117) + z4vv['R9'](0x111) + z4vv['g9'](0x1b)), Cheat[z4vv['R9'](0x3)](z4vv['R9'](0x139)), Cheat[z4vv['g9'](0x168)](z4vv['R9'](0x1b)), Cheat[z4vv['R9'](0xb2)](z4vv['R9'](0x3f)), Cheat[z4vv['g9'](0x3)](z4vv['g9'](0x117) + z4vv['g9'](0x111) + z4vv['g9'](0x1b)), , Cheat[z4vv['g9'](0x3)](z4vv['R9'](0x117) + z4vv['g9'](0x111) + z4vv['g9'](0x1b)), Cheat[z4vv['R9'](0x3)](z4vv['R9'](0x139)), Cheat[z4vv['g9'](0x168)](z4vv['R9'](0x1b)), Cheat[z4vv['g9'](0xb2)](z4vv['R9'](0x3f)), Cheat[z4vv['R9'](0x3)](z4vv['R9'](0x117) + z4vv['g9'](0x111) + z4vv['R9'](0x1b)), Cheat[z4vv['g9'](0x3)](z4vv['R9'](0x139)), , Cheat[z4vv['R9'](0x3)](z4vv['g9'](0x117) + z4vv['g9'](0x111) + z4vv['R9'](0x1b)), Cheat[z4vv['R9'](0x3)](z4vv['g9'](0x139)), Cheat[z4vv['R9'](0x168)](z4vv['R9'](0x1b)), Cheat[z4vv['R9'](0xb2)](z4vv['R9'](0x3f)), Cheat[z4vv['R9'](0x3)](z4vv['g9'](0x117) + z4vv['g9'](0x111) + z4vv['g9'](0x1b)), Cheat[z4vv['g9'](0x3)](z4vv['R9'](0x139)), Cheat[z4vv['g9'](0x3)](z4vv['R9'](0x139)), Global[z4vv['g9'](0xa5)](), Cheat[z4vv['g9'](0xa5)](), Cheat[z4vv['g9'](0x168)](z4vv['g9'](0x1b)), Cheat[z4vv['g9'](0xb2)](z4vv['g9'](0x3f)), Cheat[z4vv['R9'](0x3)](z4vv['g9'](0x117) + z4vv['g9'](0x111) + z4vv['g9'](0x1b)), Cheat[z4vv['R9'](0x3)](z4vv['R9'](0x139)), Cheat[z4vv['g9'](0x168)](z4vv['g9'](0x1b)), Cheat[z4vv['g9'](0xb2)](z4vv['g9'](0x3f)), Cheat[z4vv['g9'](0x3)](z4vv['R9'](0x117) + z4vv['g9'](0x111) + z4vv['g9'](0x1b)), Cheat[z4vv['g9'](0x3)](z4vv['g9'](0x139)), Cheat[z4vv['R9'](0x168)](z4vv['R9'](0x1b)), Cheat[z4vv['g9'](0xb2)](z4vv['g9'](0x3f)), Cheat[z4vv['g9'](0x3)](z4vv['g9'](0x117) + z4vv['g9'](0x111) + z4vv['g9'](0x1b)), Cheat[z4vv['g9'](0x3)](z4vv['R9'](0x139))];

function setYaw(_0x13ecf9) {
    var _0x36991d = z4vv,
        _0x46c47a = [arguments];
    UI[_0x36991d['g9'](0x38)](_0x36991d['R9'](0x7a), _0x36991d['g9'](0xe1), _0x36991d['R9'](0xad), _0x46c47a[0x0][0x0]);
}
XGG[z4vv['g9'](0x21)](z4vv['R9'](0x40), z4vv['R9'](0x130), z4vv['g9'](0xb), z4vv['R9'](0xb7), z4vv['g9'](0x14e), z4vv['g9'](0x1d9), z4vv['R9'](0xc2), z4vv['g9'](0x76), z4vv['g9'](0x103), z4vv['g9'](0x1c1), z4vv['R9'](0x167), z4vv['R9'](0x1f5), z4vv['R9'](0x16e), z4vv['g9'](0x1ba), z4vv['R9'](0x118), z4vv['R9'](0x1e8), z4vv['R9'](0x1d8), z4vv['R9'](0x10), z4vv['g9'](0xd7), z4vv['R9'](0x15b), z4vv['g9'](0x1f6), z4vv['R9'](0xc), z4vv['R9'](0x1ca), z4vv['R9'](0x123), z4vv['R9'](0xcd), z4vv['g9'](0x182), z4vv['R9'](0xb1), z4vv['g9'](0xc4), z4vv['g9'](0xbb), z4vv['g9'](0x1f), z4vv['R9'](0x124), z4vv['g9'](0xbd), z4vv['g9'](0x104), z4vv['R9'](0x88), z4vv['R9'](0x33), z4vv['R9'](0x16), z4vv['g9'](0x158), z4vv['R9'](0xc1), z4vv['R9'](0x16c), z4vv['g9'](0x12a), z4vv['g9'](0x17b), z4vv['R9'](0x1c), z4vv['g9'](0x156), z4vv['g9'](0x106), z4vv['g9'](0x11), z4vv['R9'](0xf2), z4vv['g9'](0x138), z4vv['g9'](0x2e), z4vv['R9'](0x17), z4vv['g9'](0x36), z4vv['R9'](0x197), z4vv['R9'](0x191), z4vv['R9'](0x1d9), z4vv['R9'](0x2b), z4vv['g9'](0x15e), z4vv['g9'](0xe9), z4vv['R9'](0xff), z4vv['R9'](0xf9), z4vv['g9'](0x1b6), z4vv['g9'](0x78), z4vv['g9'](0x96), z4vv['R9'](0xc0), z4vv['g9'](0xa3), z4vv['R9'](0x1e3), z4vv['R9'](0xec), z4vv['g9'](0x1c4), z4vv['g9'](0x1b5), z4vv['R9'](0x6c), z4vv['R9'](0x166), z4vv['R9'](0x1c3), z4vv['g9'](0x1a4), z4vv['g9'](0xac), z4vv['g9'](0x67), z4vv['R9'](0x1c7), z4vv['R9'](0x2), z4vv['R9'](0x17f), z4vv['g9'](0x4f), z4vv['R9'](0x13a), z4vv['g9'](0x126), z4vv['R9'](0x141), z4vv['R9'](0xfc), z4vv['g9'](0x12b), z4vv['g9'](0x149), z4vv['g9'](0x83), z4vv['g9'](0xd0), z4vv['R9'](0x12f), z4vv['g9'](0xef), z4vv['R9'](0x99), z4vv['R9'](0x1e4), z4vv['R9'](0xbc), z4vv['g9'](0x114), z4vv['R9'](0x121), z4vv['g9'](0x91), z4vv['R9'](0x146), z4vv['g9'](0xdc), z4vv['R9'](0x14f), z4vv['R9'](0x199), z4vv['R9'](0x198), z4vv['g9'](0x72), z4vv['g9'](0x1ea), z4vv['R9'](0xa), z4vv['g9'](0x53), z4vv['R9'](0x12e), z4vv['g9'](0x1c5), z4vv['R9'](0x155), z4vv['R9'](0x146), z4vv['R9'](0xe6), z4vv['g9'](0x183), z4vv['R9'](0xeb), z4vv['g9'](0x192), z4vv['R9'](0x1ac), z4vv['g9'](0x9f), z4vv['g9'](0x105), z4vv['g9'](0x68), z4vv['g9'](0x177), z4vv['R9'](0x1a7), z4vv['R9'](0x161), z4vv['g9'](0x24), z4vv['g9'](0x11c), z4vv['R9'](0x46), z4vv['g9'](0x19d), z4vv['g9'](0x5a), z4vv['g9'](0x143), z4vv['R9'](0x70), z4vv['g9'](0x15), z4vv['R9'](0x16d), z4vv['R9'](0xe2), z4vv['R9'](0x28), z4vv['R9'](0x98), z4vv['R9'](0x163), z4vv['R9'](0x172), z4vv['R9'](0x25), z4vv['g9'](0x1eb), z4vv['g9'](0x57), z4vv['R9'](0x1d1), z4vv['g9'](0xca), z4vv['g9'](0x159), z4vv['g9'](0x1d0), z4vv['g9'](0x13), z4vv['g9'](0x8d), z4vv['R9'](0x1b3), z4vv['R9'](0x11b), z4vv['R9'](0x186), z4vv['R9'](0xc5), z4vv['R9'](0x4e), z4vv['R9'](0x116), z4vv['R9'](0x8e), z4vv['R9'](0x1b4), z4vv['g9'](0xc6), z4vv['R9'](0x62), z4vv['R9'](0x42), z4vv['R9'](0x37), z4vv['R9'](0xc7), z4vv['g9'](0xf1), z4vv['g9'](0x18c), z4vv['g9'](0x1b7), z4vv['R9'](0x7e), z4vv['g9'](0x170), z4vv['R9'](0xf3), z4vv['g9'](0xb6), z4vv['g9'](0x1bf), z4vv['R9'](0x1f1), z4vv['g9'](0x100), z4vv['g9'](0x1d), z4vv['g9'](0x108), z4vv['g9'](0x13f), z4vv['g9'](0x115), z4vv['g9'](0x6a), z4vv['g9'](0x87), z4vv['R9'](0x135), z4vv['g9'](0x61), z4vv['g9'](0x73), z4vv['g9'](0x14b), z4vv['g9'](0xab), z4vv['R9'](0x1e1), z4vv['R9'](0x3b), z4vv['g9'](0x9a), z4vv['R9'](0x142), z4vv['g9'](0x31), z4vv['R9'](0xf4), z4vv['g9'](0x127), z4vv['g9'](0x1e6), z4vv['g9'](0x71), z4vv['R9'](0x19b), z4vv['R9'](0x8a), z4vv['g9'](0x1f2), z4vv['R9'](0x0), z4vv['g9'](0x154), z4vv['g9'](0x1d5), z4vv['g9'](0x19c), z4vv['R9'](0xba), z4vv['g9'](0x7d), z4vv['R9'](0x150), z4vv['R9'](0xa7), z4vv['R9'](0x152), z4vv['R9'](0x188), z4vv['g9'](0x11d), z4vv['g9'](0x1e5), z4vv['R9'](0x12), z4vv['g9'](0x1b0), z4vv['g9'](0x5f), z4vv['R9'](0x1cd), z4vv['R9'](0xe0), z4vv['g9'](0x60), z4vv['R9'](0x1a8), z4vv['R9'](0xc8), z4vv['g9'](0x95), z4vv['g9'](0xae), z4vv['R9'](0xcc), z4vv['g9'](0x16b), z4vv['R9'](0x133), z4vv['R9'](0x32), z4vv['g9'](0x14a), z4vv['R9'](0x119), z4vv['R9'](0x19f), z4vv['R9'](0x22), z4vv['g9'](0x1f0), z4vv['g9'](0x44), z4vv['R9'](0x1ae), z4vv['g9'](0xb8), z4vv['g9'](0x17e), z4vv['g9'](0x1b4), z4vv['R9'](0x125), z4vv['R9'](0x1e), z4vv['g9'](0xfe), z4vv['g9'](0x178), z4vv['R9'](0x49), z4vv['R9'](0x1dd), z4vv['R9'](0x92), z4vv['R9'](0x15f), z4vv['g9'](0x1bb), z4vv['R9'](0x8f), z4vv['g9'](0x101), z4vv['R9'](0x196), z4vv['R9'](0x1e0), z4vv['R9'](0x50), z4vv['g9'](0xcf), z4vv['g9'](0x160), z4vv['R9'](0x30), z4vv['R9'](0x1a9), z4vv['R9'](0xd), z4vv['g9'](0x1a2), z4vv['R9'](0x1a5), z4vv['R9'](0x1d7), z4vv['g9'](0x18d), z4vv['g9'](0x5), z4vv['g9'](0xb3), z4vv['R9'](0xa0), z4vv['g9'](0x97), z4vv['g9'](0x132), z4vv['R9'](0x4a), z4vv['R9'](0xa2), z4vv['g9'](0x1a1), z4vv['R9'](0x113), z4vv['g9'](0x1e7), z4vv['g9'](0x9), z4vv['g9'](0x5d), z4vv['R9'](0x1ec), z4vv['g9'](0x8), z4vv['R9'](0xc9), z4vv['g9'](0x93), z4vv['g9'](0x194), z4vv['g9'](0xda), z4vv['g9'](0x148), z4vv['R9'](0x184), z4vv['g9'](0x1a6), z4vv['R9'](0x7), z4vv['g9'](0xfd), z4vv['g9'](0x151), z4vv['g9'](0xf7), z4vv['R9'](0x18), z4vv['g9'](0x89), z4vv['R9'](0x8c), z4vv['g9'](0x176), z4vv['R9'](0x15c), z4vv['g9'](0x10e), z4vv['g9'](0x16a), z4vv['R9'](0xd3), z4vv['R9'](0x35), z4vv['R9'](0x7f), z4vv['g9'](0x43), z4vv['R9'](0x3a), z4vv['g9'](0x153), z4vv['g9'](0xe7), z4vv['g9'](0x6), z4vv['g9'](0x1ab), z4vv['R9'](0x59), z4vv['g9'](0xdd), z4vv['R9'](0x5b), z4vv['g9'](0x137), z4vv['g9'](0x193), z4vv['R9'](0xf5), z4vv['R9'](0x1c6), z4vv['g9'](0x9e), z4vv['R9'](0x5e), z4vv['g9'](0x195), z4vv['R9'](0x1cc), z4vv['R9'](0x1df), z4vv['R9'](0x175), z4vv['R9'](0x74), z4vv['g9'](0x5c), z4vv['R9'](0x11e), z4vv['R9'](0x1a3), z4vv['g9'](0x1a6), z4vv['g9'](0x18f), z4vv['R9'](0x13d), z4vv['R9'](0x9c), z4vv['R9'](0x81), z4vv['R9'](0x1a3), z4vv['R9'](0x3c), z4vv['g9'](0x145), z4vv['g9'](0x187), z4vv['R9'](0x8b), z4vv['g9'](0xbe), z4vv['R9'](0x23), z4vv['R9'](0xde), z4vv['R9'](0x1f3), z4vv['g9'](0x10b), z4vv['R9'](0x86), z4vv['g9'](0x171), z4vv['R9'](0x51), z4vv['R9'](0xd1), z4vv['R9'](0x9d), z4vv['R9'](0x1de), z4vv['R9'](0x3e), z4vv['R9'](0x162), z4vv['R9'](0x41), z4vv['R9'](0x140), z4vv['g9'](0x12d), z4vv['R9'](0xe3), z4vv['R9'](0x190), z4vv['R9'](0x1ef), z4vv['R9'](0x147), z4vv['R9'](0x1cb), z4vv['R9'](0x1c8)), Cheat[z4vv['g9'](0x3)] = function () {
    z4vv['y5h']();
    while (!'') {}
};

function rand_int(_0x423d67, _0x43e616) {
    var _0x2ece79 = [arguments];
    return Math[z4vv['g9'](0x79)](Math[z4vv['g9'](0xd9)]() * (_0x2ece79[0x0][0x1] - _0x2ece79[0x0][0x0] + 0x1) + _0x2ece79[0x0][0x0]);
}

function rand_int(_0x2ea4a5, _0x43bcae) {
    var _0x70b237 = {};
    _0x70b237['zuloW'] = function (_0x2177f2, _0x1ac832) {
        return _0x2177f2 + _0x1ac832;
    }, _0x70b237['baRtU'] = function (_0x2bace5, _0x4f8011) {
        return _0x2bace5 * _0x4f8011;
    };
    var _0x460a84 = _0x70b237,
        _0x4fcc69 = [arguments];
    return z4vv['j5h'](), Math[z4vv['R9'](0x79)](_0x460a84['zuloW'](_0x460a84['baRtU'](Math[z4vv['g9'](0xd9)](), _0x460a84['zuloW'](_0x4fcc69[0x0][0x1] - _0x4fcc69[0x0][0x0], 0x1)), _0x4fcc69[0x0][0x0]));
}

function getScriptVal(_0x6ea855) {
    var _0x403508 = [arguments];
    return z4vv['j5h'](), UI[z4vv['R9'](0xbf)](z4vv['g9'](0xa6), _0x403508[0x0][0x0]);
}

function getScriptVal(_0x5a8e04) {
    var _0x23f787 = [arguments];
    return UI[z4vv['R9'](0xbf)](z4vv['R9'](0xa6), _0x23f787[0x0][0x0]);
}
Cheat[z4vv['g9'](0xdb)](z4vv['R9'](0x6b), z4vv['R9'](0xcb)), Cheat[z4vv['g9'](0xdb)](z4vv['R9'](0xf8), z4vv['g9'](0xfa));

function invert() {
    var _0x15f27d = z4vv;
    _0x15f27d['y5h'](), UI[_0x15f27d['R9'](0x64)](_0x15f27d['R9'](0x7a), _0x15f27d['g9'](0x85), _0x15f27d['R9'](0xe8));
}
Cheat[z4vv['g9'](0xdb)](z4vv['g9'](0xe4), z4vv['g9'](0xf6));

function always_antib() {
    var _0x1fc383 = {};
    _0x1fc383['tYZgo'] = function (_0x1f0898, _0x5eccc6, _0x2c5d2b) {
        return _0x1f0898(_0x5eccc6, _0x2c5d2b);
    };
    var _0x15b41b = _0x1fc383;
    if (!getScriptVal(z4vv['g9'](0x14d))) return;
    _0x15b41b['tYZgo'](antib, !'', !!{});
}

function ExtendVector(_0x465a64, _0x81040f, _0xdb4a7c) {
    var _0x42f5c4 = z4vv,
        _0x5a0499 = [arguments];
    return _0x5a0499[0x9] = radian(_0x5a0499[0x0][0x1]), _0x42f5c4['d13'](0x12), _0x42f5c4['j5h'](), _0x5a0499[0x8] = _0x42f5c4['U13'](0x26, 0xe, 0xa, 0xd), [_0x5a0499[0x0][0x2] * Math[_0x42f5c4['R9'](0x18e)](_0x5a0499[0x9]) + _0x5a0499[0x0][0x0][0x0], _0x5a0499[0x0][0x2] * Math[_0x42f5c4['g9'](0x109)](_0x5a0499[0x9]) + _0x5a0499[0x0][0x0][_0x5a0499[0x8]], _0x5a0499[0x0][0x0][0x2]];
}
Cheat[z4vv['g9'](0xdb)](z4vv['g9'](0xa1), z4vv['g9'](0x1db)), Cheat[z4vv['g9'](0xdb)](z4vv['g9'](0x14c), z4vv['R9'](0x4b)), Cheat[z4vv['R9'](0xdb)](z4vv['R9'](0x1b9), z4vv['R9'](0x4b)), Cheat[z4vv['R9'](0xdb)](z4vv['R9'](0xa1), z4vv['R9'](0x4b)), Cheat[z4vv['R9'](0xdb)](z4vv['g9'](0x6b), z4vv['R9'](0x1aa));;

function gs_setYaw(_0x52e884) {
    var _0xdbb688 = {};
    _0xdbb688['TPpSp'] = function (_0x3a7398, _0x477b9d) {
        return _0x3a7398 < _0x477b9d;
    }, _0xdbb688['epIkj'] = function (_0x4ebe19) {
        return _0x4ebe19();
    }, _0xdbb688['YoRNn'] = function (_0x194169) {
        return _0x194169();
    };
    var _0x425284 = _0xdbb688,
        _0x3b12f8 = z4vv,
        _0xc64c3c = [arguments];
    UI[_0x3b12f8['R9'](0x38)](_0x3b12f8['R9'](0x7a), _0x3b12f8['R9'](0xe1), _0x3b12f8['g9'](0xad), _0xc64c3c[0x0][0x0]), _0x3b12f8['j5h']();
    if (!isInverted && _0x425284['TPpSp'](_0xc64c3c[0x0][0x0], 0x0)) _0x425284['epIkj'](invert);
    else isInverted && _0xc64c3c[0x0][0x0] > 0x0 && _0x425284['YoRNn'](invert);
}

// ID = $hot#7911

// Feel slow try some better auto strafer and move better :)

/*
 *
 * Author: april#0001
 * Customer: nomercy112#0001
 *
 */

 //region dependencies

 /**
  * @title BetterUI
  * @version 2.0.1
  * @description A better UI system for Onetap
  */

 var menu = [];
 const menu_spacer = "                                                                                  ";

 /**
  * Concats two elements into an array without increasing the array length.
  * Prevents the memory leak in 2.0.0 from happening
  *
  * @param a {array}
  * @param b {any}
  */
 menu.concat = function(a, b)
 {
     // Creates a new array.
     var arr = [];

     // Push all items from the array 'a' into our array.
     for (var c in a)
     {
         arr.push(a[c]);
     }

     // Push the value 'b' into our array.
     arr.push(b);

     // Return the new array.
     return arr;
 }

 /**
  * Creates a new menu label
  *
  * @param label {string}
  */
 menu.label = function(label)
 {
     // Creates the label
     UI.AddLabel(label);
 };

 /**
  * Creates a new menu element
  *
  * @param func {function}
  * @param name {string}
  * @param label {string},
  * @param properties {array}
  */
 menu.call = function(func, name, label, properties)
 {
     // Get properties
     const final_name = name + menu_spacer + label;
     var final_props = [final_name];
     const element_info_t = {
         path: ["Misc", "JAVASCRIPT", "Script items", final_name]
     };

     // If our properties aren't null, then pack them together.
     if (properties != null)
     {
         for (var i = 0; i < properties.length; i++)
         {
             final_props.push(properties[i]);
         }
     }

     // Create our menu element and return properties
     func.apply(null, final_props);
     return element_info_t;
 };

 /**
  * Creates a new menu reference
  *
  * @param path {array}
  */
 menu.reference = function(path)
 {
     const element_info_t = {
         path: path
     };

     return element_info_t;
 };

 /**
  * Gets the value of a menu element
  *
  * @param elem {array}
  * @return {*}
  */
 menu.get = function(elem)
 {
     // If the element doesn't exist
     if (!(elem.path))
         throw new Error("[Menu] This element doesn't exist!");

     // Returns the element's value
     return UI.GetValue.apply(null, elem.path);
 };

 /**
  * Gets the value of a menu element
  *
  * @param elem {array}
  * @return {*}
  */
 menu.get_hotkey = function(elem)
 {
     // If the label doesn't exist
     if (!(elem.path))
         throw new Error("[Menu] This element doesn't exist!");

     // Returns the element's value
     return UI.IsHotkeyActive.apply(null, elem.path);
 };

 /**
  * Gets the value of a menu element
  *
  * @param elem {array}
  * @return {*}
  */
 menu.get_color = function(elem)
 {
     // If the label doesn't exist
     if (!(elem.path))
         throw new Error("[Menu] This element doesn't exist!");

     // Returns the element's value
     return UI.GetColor.apply(null, elem.path);
 };

 /**
  * Sets the value of a menu element
  *
  * @param elem {array}
  * @param value {*}
  */
 menu.set = function(elem, value)
 {
     // If the label doesn't exist
     if (!(elem.path))
         throw new Error("[Menu] This element doesn't exist!");

     // Get properties
     const properties = elem;

     // Set the element's value
     UI.SetValue.apply(null, this.concat(properties.path, value));
 };

 /**
  * Sets the value of a color picker
  *
  * @param elem {array}
  * @param color {array|Color}
  */
 menu.set_color = function(elem, color)
 {
     // If the label doesn't exist
     if (!(elem.path))
         throw new Error("[Menu] This element doesn't exist!");

     // Get properties
     const properties = elem;

     // Set the element's value
     UI.SetColor.apply(null, this.concat(properties.path, color));
 };

 /**
  * Toggles a hotkey
  *
  * @param elem {array}
  */
 menu.toggle = function(elem)
 {
     // If the label doesn't exist
     if (!(elem.path))
         throw new Error("[Menu] This element doesn't exist!");

     // Set the element's value
     UI.ToggleHotkey.apply(null, elem.path);
 };

 /**
  * Changes the visibility of a menu elements
  *
  * @param elem {array}
  * @param visible {boolean}
  */
 menu.visibility = function(elem, visible)
 {
     // If the label doesn't exist
     if (!(elem.path))
         throw new Error("[Menu] This element doesn't exist!");

     // Get properties
     const properties = elem;

     // Change the element's visibility
     UI.SetEnabled.apply(null, this.concat(properties.path, visible));
 };

const between = function(v, c, f)
{
    return v < c && v > f;
}

 //endregion

//region locals

var MAX_VEL_CONSTANT = 0.350877193;

//endregion

//region menu

const autostrafer = menu.call(UI.AddDropdown, "| Dynamic autostrafer", "nomercy_dyn_autostrafer", [["Off", "Prefer acceleration", "Prefer mobility"]]);

const on_shot_bind = menu.call(UI.AddHotkey, "| On-shot on key", "nomercy_onshot_key", []);

const ref_autostrafer_speed = menu.reference(["Misc", "Movement", "Turn speed"]);
const ref_on_shot = menu.reference(["Rage", "Exploits", "Hide shots"]);

//endregion

//region functions

function do_auto_strafer()
{
    const mode = menu.get(autostrafer)

    if (!mode)
        return;

    const me = Entity.GetLocalPlayer();

    if (!me || !Entity.IsAlive(me))
        return;

    const flags = Entity.GetProp(me, "CBasePlayer", "m_fFlags");

    if (!(flags & 1))
    {
        const velocity = Entity.GetProp(me, "CBasePlayer", "m_vecVelocity[0]");
        const speed = Math.sqrt(velocity[0] ** 2 + velocity[1] ** 2);

        menu.set(ref_autostrafer_speed, mode === 1 ? (100 - speed * MAX_VEL_CONSTANT) : (speed * MAX_VEL_CONSTANT));
    }
}

function do_on_shot()
{
    if (!menu.get_hotkey(on_shot_bind))
        return;

    const me = Entity.GetLocalPlayer();

    if (!me || !Entity.IsAlive(me))
        return;

    const players = Entity.GetEnemies();
    var data = {dmg: 0, target: null};

    for (var i = 0; i < players.length; i++)
    {
        const ent = players[i];
        const pitch = Entity.GetProp(ent, "CCSPlayer", "m_angEyeAngles")[0];

        if (pitch > 89)
            pitch = 360 - pitch;

        if (pitch < 80)
        {
            const line = Trace.Bullet(me, ent, Entity.GetEyePosition(me), Entity.GetHitboxPosition(ent, 0));

            if (line[0] && line[1] > data.dmg)
            {
                data.target = ent;
                data.dmg = line[1];
            }
        }
    }

    if (!data.target)
        return;

    Ragebot.ForceTarget(data.target);
}

function on_create_move()
{
    do_auto_strafer();
    do_on_shot();
}

//endregion

//region callbacks

Cheat.RegisterCallback("CreateMove", "on_create_move");

//endregion


// Oh dont like the dt? try this its insane

var last = 0
var shot = false
UI.AddCheckbox("Insane DT")
function lastShot(){
    if(Entity.GetLocalPlayer() == Entity.GetEntityFromUserID(Event.GetInt("userid")) && UI.IsHotkeyActive("Rage","GENERAL","Exploits","Doubletap")){
       
        last = Globals.Tickcount()
        shot = true
    }
}
var wasActive = true
var wasfding = false
var lastfding = 0
function cm(){
    if(!UI.GetValue("Script Items", "Fast DT Recharge") || (UI.IsHotkeyActive("Rage","GENERAL","Exploits","Hide shots") && !UI.IsHotkeyActive("Rage","GENERAL","Exploits","Doubletap"))){
        Exploit.EnableRecharge()
        return
    }
    Exploit.DisableRecharge()
    if(!UI.IsHotkeyActive("Rage","GENERAL","Exploits","Doubletap"))
    wasActive = false
    if(!wasActive && UI.IsHotkeyActive("Rage","GENERAL","Exploits","Doubletap")){
        Exploit.Recharge()
        wasActive = true
    }
    if(UI.IsHotkeyActive("Anti-Aim","Extra","Fake duck")){
        wasfding = true
        lastfding = Globals.Tickcount()
    }
    if(!UI.IsHotkeyActive("Anti-Aim","Extra","Fake duck") && wasfding && Globals.Tickcount() - 2 > lastfding){
        Exploit.Recharge()
        wasfding = false
    }
   
    if(last + 4 < Globals.Tickcount() && shot){
        Exploit.Recharge()
        shot = false
    }
}
function roundStart(){
    if(!UI.GetValue("Script Items", "Fast DT Recharge") || (UI.IsHotkeyActive("Rage","GENERAL","Exploits","Hide shots") && !UI.IsHotkeyActive("Rage","GENERAL","Exploits","Doubletap"))) return
    if(Exploit.GetCharge() != 0){
        Exploit.Recharge()
        last = Globals.Tickcount()
    }
}
Cheat.RegisterCallback("weapon_fire","lastShot")
Cheat.RegisterCallback("CreateMove","cm")
Cheat.RegisterCallback("round_start","roundStart")
Cheat.RegisterCallback("round_prestart","roundStart")
Cheat.RegisterCallback("round_end","roundStart")
