            function move(src, dest) {
/*01*/          g.cells[dest].className = g.cells[src].className;
/*02*/          g.cells[src].className = "e";
/*03*/          return (g.cells[dest].ser = g.ser) != g.ser;
            }

/*04*/      window.onload = function() {
/*05*/          g = {
                    w: 15,
                    h: 15,
                    ser: 0,
                    rules: {
                        od: function() {
/*06*/                      [[0, g.w, g.w], [g.w, (v = [-1, 1][g.ci]), g.w + v], [g.w, -v, g.w - v]].every(function(vs) {
/*07*/                          return ("wod".indexOf(g.cells[i + vs[0]].className) > -1 && g.cells[g.d = i + vs[1]].className == "e" && g.cells[i + vs[2]].className == "e") ? move(i, g.d) : true;
                            });
                        },
                        trbluvcm: function(o) {
/*08*/                      ([(m = (o >> 1) - 1), 0].every(function(dv) {
/*09*/                          return (g.cells[g.d = i + [-g.w, 1, g.w, -1][nv = (g.ci + dv) & 3]].className == "e") ? move(i, g.d, g.cells[i].className = g.k.charAt(nv + o)) : true;
                            })) ? g.cells[i].className = g.k.charAt(((g.ci - m) & 3) + o) : false;
                        },
                        qfkj: function() {
/*10*/                      ("esd".indexOf(g.cells[g.d = i + (nv = [[0, 0], [-g.w, 1], [1, 2], [g.w, 1], [-1, 3]][g.mouse ? (Math.abs(g.dx = (g.mouse.x >> 4) - (i % g.w)) > Math.abs(g.dy = (g.mouse.y >> 4) - Math.floor(i / g.w)) ? (g.dx > 0 ? 2 : 4) : (g.dy > 0 ? 3 : (g.dy < 0 ? 1 : 0))) : 0])[0]].className) > -1) ? move(i, g.d, g.cells[i].className = g.k.charAt(nv[1])) : g.cells[i].className = g.k.charAt(0);
                        }
                    },
                    cells: document.getElementsByTagName("td"),
                    maze: document.getElementById("maze")
                };

/*11*/          document.getElementById("cap").onmousedown = function(event) {
/*12*/              g.mouse = {
                        x: (g.evt = window.event || event).layerX || g.evt.x,
                        y: g.evt.layerY || g.evt.y
                    };
                };

/*13*/          setInterval(function() {
/*14*/              g.maze.className = "f_" + (++g.ser & 7);

/*15*/              for (i = 0; i < g.h * g.w; i++) {
/*16*/                  for (g.k in g.rules) {
/*17*/                      (g.cells[i].ser != g.ser) ? ((g.ci = g.k.indexOf(g.cells[i].className)) > -1 ? g.rules[g.k](g.ci & 4) : false) : false;
                        }
                    }
                }, 100);
            }

/*18*/      Array.prototype.every = Array.prototype.every || function(callback, that) {
/*19*/          for (var i = 0; i < this.length && callback.call(that || this, this[i]); i++);
/*20*/          return i == this.length;
            }
