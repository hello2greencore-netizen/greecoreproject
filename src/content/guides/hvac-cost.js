(function(){
var D = {"S": {"acf": {"range": [11000, 27300], "sizes": [{"label": "1.5 tons", "lo": 11000, "hi": 19750}, {"label": "2 tons", "lo": 11500, "hi": 20750}, {"label": "2.5 tons", "lo": 12000, "hi": 22250}, {"label": "3 tons", "lo": 12750, "hi": 23250}, {"label": "3.5 tons", "lo": 13500, "hi": 25250}, {"label": "4 tons", "lo": 14500, "hi": 27000}, {"label": "5 tons", "lo": 15250, "hi": 27300}], "start": false, "note": ""}, "f80": {"range": [5400, 8700], "sizes": [{"label": "40,000 BTU", "lo": 5400, "hi": 8000}, {"label": "60\u201370,000 BTU", "lo": 5750, "hi": 8000}, {"label": "80\u201390,000 BTU", "lo": 6000, "hi": 8500}, {"label": "100\u2013110,000 BTU", "lo": 6500, "hi": 8700}], "start": false, "note": ""}, "f95": {"range": [7400, 13200], "sizes": [{"label": "40,000 BTU", "lo": 7400, "hi": 11250}, {"label": "60,000 BTU", "lo": 8000, "hi": 12750}, {"label": "80,000 BTU", "lo": 8250, "hi": 13000}, {"label": "100,000 BTU", "lo": 8500, "hi": 13200}], "start": false, "note": ""}, "hp": {"range": [12000, 36500], "sizes": [{"label": "1.5 tons", "lo": 12000, "hi": 30000}, {"label": "2 tons", "lo": 14500, "hi": 31250}, {"label": "2.5 tons", "lo": 14750, "hi": 32500}, {"label": "3 tons", "lo": 17250, "hi": 34000}, {"label": "3.5 tons", "lo": 18500, "hi": 34500}, {"label": "4 tons", "lo": 20000, "hi": 35250}, {"label": "5 tons", "lo": 22000, "hi": 36500}], "start": false, "note": ""}, "df": {"range": [9000, 30000], "sizes": [{"label": "1.5 tons", "lo": 9000, "hi": 25000}, {"label": "2 tons", "lo": 9500, "hi": 25000}, {"label": "2.5 tons", "lo": 10250, "hi": 27250}, {"label": "3 tons", "lo": 11500, "hi": 28000}, {"label": "3.5 tons", "lo": 12000, "hi": 29000}, {"label": "4 tons", "lo": 13250, "hi": 29000}, {"label": "5 tons", "lo": 14750, "hi": 30000}], "start": false, "note": ""}, "ms": {"range": [4500, 14000], "sizes": [{"label": "6,000 BTU", "lo": 4500, "hi": 6500}, {"label": "9,000 BTU", "lo": 4500, "hi": 6750}, {"label": "12,000 BTU", "lo": 4750, "hi": 7250}, {"label": "15,000 BTU", "lo": 5250, "hi": 8000}, {"label": "18,000 BTU", "lo": 6000, "hi": 9250}, {"label": "24,000 BTU", "lo": 6500, "hi": 10250}, {"label": "30,000 BTU", "lo": 10250, "hi": 11250}, {"label": "36,000 BTU", "lo": 11250, "hi": 14000}], "start": false, "note": "Multi-room systems are priced after a visit."}, "duct": {"range": [5000, 11000], "sizes": [{"label": "1.5 tons", "lo": 5000, "hi": 6750}, {"label": "2 tons", "lo": 5000, "hi": 6750}, {"label": "2.5 tons", "lo": 5250, "hi": 7000}, {"label": "3 tons", "lo": 5250, "hi": 7000}, {"label": "3.5 tons", "lo": 5750, "hi": 7750}, {"label": "4 tons", "lo": 6250, "hi": 8250}, {"label": "5 tons", "lo": 9000, "hi": 11000}], "start": false, "note": ""}, "tank": {"range": [2850, 4800], "sizes": [{"label": "1\u20132 people", "lo": 2850, "hi": 3500}, {"label": "3\u20134 people", "lo": 2850, "hi": 4800}, {"label": "5 or more", "lo": 3500, "hi": 4800}], "start": false, "note": ""}, "tl": {"range": [6500, 9450], "sizes": [{"label": "1\u20132 people", "lo": 6500, "hi": 7750}, {"label": "3\u20134 people", "lo": 6500, "hi": 9450}, {"label": "5 or more", "lo": 7750, "hi": 9450}], "start": false, "note": ""}, "hpwh": {"range": [6000, 12600], "sizes": [{"label": "1\u20132 people", "lo": 6000, "hi": 11500}, {"label": "3\u20134 people", "lo": 7250, "hi": 12600}, {"label": "5 or more", "lo": 8250, "hi": 12600}], "start": false, "note": ""}}, "MAP": {"acf": [0, 1, 2, 3, 4, 5, 6], "hp": [0, 1, 2, 3, 4, 5, 6], "df": [0, 1, 2, 3, 4, 5, 6], "duct": [0, 1, 2, 3, 4, 5, 6], "f80": [0, 0, 1, 1, 2, 2, 3], "f95": [0, 0, 1, 1, 2, 2, 3]}, "HVAC": ["acf", "f80", "f95", "hp", "df", "duct"], "WATER": ["tank", "tl", "hpwh"], "STEPS": ["1.5 tons", "2 tons", "2.5 tons", "3 tons", "3.5 tons", "4 tons", "5 tons"], "HH": ["1\u20132 people", "3\u20134 people", "5 or more"], "MS": ["6,000 BTU", "9,000 BTU", "12,000 BTU", "15,000 BTU", "18,000 BTU", "24,000 BTU", "30,000 BTU", "36,000 BTU"]}, AX = 40000;
var $ = function(id){ return document.getElementById(id); };
var m = function(n){ return '$' + Math.round(n).toLocaleString('en-US'); };
function bar(id, lo, hi){
  var s = D.S[id];
  var a = $('all-' + id), me = $('mine-' + id);
  a.style.left = (s.range[0] / AX * 100) + '%'; a.style.width = Math.max(1.5, (s.range[1] - s.range[0]) / AX * 100) + '%';
  me.style.left = (lo / AX * 100) + '%'; me.style.width = Math.max(1.5, (hi - lo) / AX * 100) + '%';
}
function show(id, z){
  $('lab-' + id).textContent = 'Typical for ' + z.label;
  $('big-' + id).textContent = z.lo === z.hi ? 'About ' + m(z.lo) : m(z.lo) + '\u2013' + m(z.hi);
  bar(id, z.lo, z.hi);
}
function hvac(){
  var i = Number($('tons').value);
  $('tonslab').textContent = D.STEPS[i];
  $('tons').setAttribute('aria-valuetext', D.STEPS[i]);
  D.HVAC.forEach(function(id){ show(id, D.S[id].sizes[D.MAP[id][i]]); });
}
function water(){
  var i = Number($('hh').value);
  $('hhlab').textContent = D.HH[i];
  $('hh').setAttribute('aria-valuetext', D.HH[i]);
  ['tank', 'tl', 'hpwh'].forEach(function(id){ show(id, D.S[id].sizes[i]); });
}
function ms(){
  var i = Number($('msz').value);
  $('mslab').textContent = D.MS[i];
  $('msz').setAttribute('aria-valuetext', D.MS[i]);
  show('ms', D.S.ms.sizes[i]);
}
$('msz').addEventListener('input', ms);
$('tons').addEventListener('input', hvac);
$('hh').addEventListener('input', water);
hvac(); ms(); water();
})();
