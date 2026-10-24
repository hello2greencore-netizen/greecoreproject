(function () {
  var COUNTY = { Sonoma: { heat: 29, cool: 96 }, Marin: { heat: 32, cool: 88 }, Napa: { heat: 31, cool: 98 }, 'San Francisco': { heat: 40, cool: 79 } };
  var TOWN = {
    Petaluma: 'Sonoma', 'Santa Rosa': 'Sonoma', 'Rohnert Park': 'Sonoma', Cotati: 'Sonoma', Sonoma: 'Sonoma', Sebastopol: 'Sonoma', Windsor: 'Sonoma', Healdsburg: 'Sonoma',
    Novato: 'Marin', 'San Rafael': 'Marin', 'Mill Valley': 'Marin', 'San Anselmo': 'Marin', Fairfax: 'Marin', Tiburon: 'Marin',
    Napa: 'Napa', 'San Francisco': 'San Francisco'
  };
  var ERA = {
    pre60: { attic: 'none', walls: 'none', win: 'single' }, '60s': { attic: 'some', walls: 'some', win: 'single' },
    '80s': { attic: 'some', walls: 'some', win: 'double' }, '00s': { attic: 'good', walls: 'modern', win: 'lowe' },
    'new': { attic: 'good', walls: 'modern', win: 'lowe' }
  };
  var U_ATTIC = { none: 0.20, some: 0.06, good: 0.032 };
  var U_WALL = { none: 0.24, some: 0.09, modern: 0.065 };
  var WIN = { single: { u: 1.0, shgc: 0.7 }, double: { u: 0.55, shgc: 0.6 }, lowe: { u: 0.32, shgc: 0.25 } };
  var WIN_FRAC = { few: 0.10, avg: 0.15, lots: 0.22 };
  var SOLAR = { shade: 30, some: 48, full: 62 };
  var ACH = { drafty: 0.9, avg: 0.55, tight: 0.35 };
  var DUCT = { attic: { old: [0.25, 0.30], sealed: [0.12, 0.18] }, crawl: { old: [0.20, 0.15], sealed: [0.10, 0.08] },
    inside: { old: [0.03, 0.03], sealed: [0.02, 0.02] }, none: { old: [0, 0], sealed: [0, 0] } };
  var TIPS = {
    'Air leaks': 'Air sealing is often the cheapest way to shrink the system you need.',
    'Windows': 'Window upgrades or good shades can lower both heating and cooling needs.',
    'Attic / ceiling': 'Adding attic insulation often lets a smaller system do the job.',
    'Walls': 'Older homes without wall insulation lose a lot here. Blown-in insulation can help.',
    'Floor': 'Insulating under the floor makes rooms over a crawlspace more comfortable.',
    'Ducts': 'Sealing and insulating ducts can cut what you pay to heat and cool the house.'
  };
  var SIZES = [1.5, 2, 2.5, 3, 3.5, 4, 5];
  var FURN = [40000, 60000, 80000, 100000, 120000];
  var $ = function (id) { return document.getElementById(id); };

  var townSel = $('town');
  Object.keys(TOWN).forEach(function (t) { var o = document.createElement('option'); o.textContent = t; o.value = t; townSel.appendChild(o); });

  function v(id) { return $(id).value; }
  function up(t) { for (var i = 0; i < SIZES.length; i++) if (SIZES[i] >= t - 0.001) return SIZES[i]; return 5; }
  function down(t) { for (var i = SIZES.length - 1; i >= 0; i--) if (SIZES[i] <= t + 0.001) return SIZES[i]; return 1.5; }
  function r500(n) { return Math.round(n / 500) * 500; }
  function comma(n) { return r500(n).toLocaleString('en-US'); }
  function tt(a, b) { return a === b ? a + ' tons' : a + '–' + b + ' tons'; }

  function calc() {
    var climate = COUNTY[TOWN[v('town')]] || COUNTY.Sonoma;
    var era = ERA[v('era')];
    var atticKey = v('attic') === 'unknown' ? era.attic : v('attic');
    var wallKey = v('walls') === 'unknown' ? era.walls : v('walls');
    var winKey = v('win') === 'unknown' ? era.win : v('win');
    var sqft = Math.max(300, Math.min(8000, Number(v('sqft')) || 1800));
    var stories = Number(v('stories')) || 1;
    var vault = v('ceiling') === 'vault';
    var h = vault ? 11 : Number(v('ceiling'));
    var footprint = sqft / stories;
    var perimeter = 4 * Math.sqrt(footprint) * 1.15;
    var winArea = sqft * WIN_FRAC[v('winAmt')];
    var wallNet = Math.max(0, perimeter * h * stories - winArea);
    var ceilArea = footprint * (vault ? 1.1 : 1);
    var volume = sqft * h;
    var w = WIN[winKey];
    var dtH = 70 - climate.heat, dtC = Math.max(0, climate.cool - 75);

    var walls = wallNet * U_WALL[wallKey] * dtH;
    var ceiling = ceilArea * U_ATTIC[atticKey] * dtH;
    var floorLoss = v('floor') === 'slab' ? perimeter * 0.7 * dtH : footprint * (v('floor') === 'crawlins' ? 0.04 : 0.07) * dtH;
    var windows = winArea * w.u * dtH;
    var air = volume * ACH[v('draft')] * 0.018 * dtH;
    var heatSub = walls + ceiling + floorLoss + windows + air;
    var dF = DUCT[v('ducts')][v('dcond')];
    var ductsH = heatSub * dF[0];
    var heat = heatSub + ductsH;

    var coolSens = (wallNet * U_WALL[wallKey] * (dtC + 8) + ceilArea * U_ATTIC[atticKey] * (dtC + 30) + winArea * w.u * dtC +
      winArea * w.shgc * SOLAR[v('sun')] + volume * ACH[v('draft')] * 0.5 * 0.018 * dtC + (Number(v('people')) || 2) * 230 + 1200) * (1 + dF[1]);
    var cool = coolSens * 1.1;

    var capFactor = 0.9 - Math.max(0, climate.cool - 95) * 0.01;
    var need = cool / capFactor / 12000;
    var acMin = up(need * 0.92);
    var acMax = Math.max(up(need), down(need * 1.15));
    var hpHeatNeed = heat / (12000 * 0.9);
    var hpHeatTons = up(hpHeatNeed);
    var hpCoolMax = Math.max(acMax, down(need * 1.25));
    var hpTons = Math.max(acMax, hpHeatTons);
    var big = need > 5 || hpHeatNeed > 5;
    var hpHeatSets = !big && hpHeatTons > hpCoolMax;
    // Green Core sizing: step every recommendation up one size (half ton; one furnace size).
    function bump(t) { var i = SIZES.indexOf(t); return i >= 0 && i < SIZES.length - 1 ? SIZES[i + 1] : 6; }
    acMin = bump(acMin); acMax = bump(acMax); hpTons = bump(hpTons);
    if (acMax > 5 || hpTons > 5) { big = true; hpHeatSets = false; }
    var sizeTop = big ? 99 : Math.max(acMax, hpTons);
    var sizeText = big ? '5+ tons' : tt(acMin, sizeTop);
    function furnIn(afue) { for (var i = 0; i < FURN.length; i++) if (FURN[i] * afue >= heat) return FURN[Math.min(i + 1, FURN.length - 1)]; return 120000; }

    $('rTown').textContent = 'Your sizing results · ' + v('town');
    $('rSize').textContent = sizeText;
    $('rSub').textContent = big ? (sqft >= 2500 ? 'Homes this size usually get two systems or zones' : 'High for the size. Insulation, air sealing and duct fixes could bring this down a lot')
      : 'about ' + (Math.round(sqft / acMax / 10) * 10).toLocaleString('en-US') + ' sq ft per ton';
    $('rAc').textContent = big ? 'Over 5 tons' : tt(acMin, acMax);
    // Send them to the cost guide with this size already picked on its slider.
    $('rCost').href = '/guides/hvac-cost?tons=' + (big ? 5 : sizeTop) + '#hv-h';
    $('rHp').textContent = big ? 'Over 5 tons' : hpHeatSets ? hpTons + ' tons' : tt(acMin, hpTons);
    $('rFurn').textContent = Math.round(furnIn(0.8) / 1000) + 'k (80%) · ' + Math.round(furnIn(0.96) / 1000) + 'k (96%)';
    $('rHpNote').hidden = !hpHeatSets;
    $('rCool').innerHTML = 'Cooling load on a ' + climate.cool + '°F day: <strong>' + comma(cool * 0.88) + '–' + comma(cool * 1.12) + ' BTU/hr</strong>';
    $('rHeat').innerHTML = 'Heating load on a ' + climate.heat + '°F night: <strong>' + comma(heat * 0.88) + '–' + comma(heat * 1.12) + ' BTU/hr</strong>';

    var parts = [['Air leaks', air], ['Windows', windows], ['Attic / ceiling', ceiling], ['Walls', walls], ['Floor', floorLoss], ['Ducts', ductsH]]
      .map(function (p) { return { label: p[0], v: p[1], pct: Math.round(p[1] / heat * 100) }; })
      .sort(function (a, b) { return b.v - a.v; });
    $('rBars').innerHTML = parts.map(function (p) {
      return '<div class="bar"><div class="lbl"><span>' + p.label + '</span><span>' + p.pct + '%</span></div><div class="track"><div class="fill" style="width:' + p.pct + '%"></div></div></div>';
    }).join('');
    $('rTip').textContent = 'Biggest loss: ' + parts[0].label.toLowerCase() + '. ' + TIPS[parts[0].label];
    var ductOut = v('ducts') === 'attic' || v('ducts') === 'crawl';
    var ductPct = Math.round(ductsH / heat * 100);
    $('rDuctPct').hidden = !ductOut;
    $('rDuctPct').textContent = v('dcond') === 'old'
      ? 'Based on your answers, your ducts account for about ' + ductPct + '% of the heat your home loses on a cold night.'
      : 'Based on your answers, your sealed ducts account for about ' + ductPct + '% of the heat your home loses on a cold night.';

    var qType = v('qType');
    $('wrapTons').hidden = qType !== 'tons';
    $('wrapBtu').hidden = qType !== 'furnace';
    $('wrapAfue').hidden = qType !== 'furnace';
    var title = '', text = '', cls = 'ok';
    if (qType === 'tons') {
      var q = Number(v('qTons'));
      if (q >= sizeTop + 1) { title = 'Larger than our sizing'; cls = 'bad'; text = q + ' tons is above the ' + sizeText + ' we’d look at for this home. Ask how the size was worked out, and which rooms and windows it assumed.'; }
      else if (q > sizeTop) { title = 'A little larger'; cls = 'warn'; text = q + ' tons is a half ton above our range. That can be fine with a variable-speed system, but it’s worth asking how it was sized.'; }
      else if (big) { title = sqft >= 2500 ? 'Ask about two systems' : 'High load for the size'; cls = 'warn'; text = sqft >= 2500 ? 'This home likely needs more than one system. Ask whether ' + q + ' tons is one of two systems or zones.' : 'This home’s load is high for its size. Ask whether insulation, air sealing or duct work was considered before sizing.'; }
      else if (q < acMin - 0.25) { title = 'Smaller than our sizing'; cls = 'bad'; text = q + ' tons is below the ' + sizeText + ' we’d look at. That can work if the home is better insulated than average, but ask how it was sized.'; }
      else { title = 'In a normal range'; text = q + ' tons fits the ' + sizeText + ' we’d look at for this home.'; }
    } else if (qType === 'furnace') {
      var out = Number(v('qBtu')) * Number(v('afue')), r = out / heat;
      if (r > 1.6) { title = 'Larger than our sizing'; cls = 'bad'; text = 'That furnace puts out about ' + comma(out) + ' BTU/hr, roughly ' + Math.round((r - 1) * 100) + '% more than this home needs. Oversized furnaces short-cycle. Ask how it was sized.'; }
      else if (r < 0.95) { title = 'Smaller than our sizing'; cls = 'bad'; text = 'That furnace puts out about ' + comma(out) + ' BTU/hr, under what this home needs. Ask how it was sized for your coldest nights.'; }
      else { title = 'In a normal range'; text = 'That furnace puts out about ' + comma(out) + ' BTU/hr, which covers what this home needs with normal margin.'; }
    }
    $('rVerdict').hidden = qType === 'none';
    $('rVT').textContent = title; $('rVT').className = 't ' + cls; $('rVX').textContent = text;
  }

  $('f').addEventListener('input', calc);
  $('f').addEventListener('change', calc);
  $('f').addEventListener('submit', function (e) { e.preventDefault(); });
  calc();
})();
