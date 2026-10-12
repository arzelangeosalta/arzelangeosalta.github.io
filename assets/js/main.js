// Arzelan Geo - interacciones del sitio
(function () {
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var top = document.getElementById('top');
  function onScroll() { top.classList.toggle('solid', window.scrollY > 40); }
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* ---------- wireframe terrain ---------- */
  function noise(x, y) {
    return Math.sin(x * 1.3 + Math.sin(y * .7) * 1.6) * .55 + Math.sin(y * 1.9 + x * .4) * .3 +
           Math.sin((x + y) * 2.7) * .12 + Math.cos(x * .5 - y * 1.1) * .45;
  }
  function terrain(canvas, opts) {
    var ctx = canvas.getContext('2d'), w, h, dpr;
    function size() {
      dpr = Math.min(devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function draw(t) {
      ctx.clearRect(0, 0, w, h);
      var rows = opts.rows, cols = 70, horizon = h * opts.horizon, depth = 1.0;
      for (var pass = 0; pass < 2; pass++) {
        for (var r = 0; r < rows; r++) {
          var z = 1 - r / rows;                  // 1 far .. 0 near
          var persp = 1 / (0.35 + z * 2.4);
          var yBase = horizon + (h - horizon) * (1 - z) * 1.05;
          ctx.beginPath();
          for (var c = 0; c <= cols; c++) {
            var u = c / cols - .5;
            var wx = u * 9, wz = r * .22 + t * opts.speed;
            var e = noise(wx, wz) + Math.max(0, noise(wx * .45 + 3, wz * .45 - 2)) * 1.4;
            var x = w / 2 + u * w * 2.1 * persp;
            var y = yBase - e * h * opts.amp * persp;
            if (c === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
          }
          var a = Math.pow(1 - z, 1.3);
          ctx.strokeStyle = pass === 0 ? 'rgba(200,167,132,' + (a * .55) + ')' : 'rgba(168,240,192,' + (a * .28) + ')';
          ctx.lineWidth = pass === 0 ? 1 : .6;
          if (pass === 1) ctx.translate(0, 3);
          ctx.stroke();
          if (pass === 1) ctx.translate(0, -3);
        }
      }
    }
    size(); addEventListener('resize', function () { size(); draw(last); });
    var last = 0, start = performance.now();
    draw(0);
    if (reduce) return;
    (function loop(now) {
      if (canvas.getBoundingClientRect().bottom > 0 && canvas.getBoundingClientRect().top < innerHeight) {
        last = (now - start) / 1000; draw(last);
      }
      requestAnimationFrame(loop);
    })(start);
  }
  terrain(document.getElementById('terrain'), { rows: 46, horizon: .5, amp: .16, speed: .25 });
  terrain(document.getElementById('terrain2'), { rows: 30, horizon: .2, amp: .22, speed: .15 });

  /* altitude ticker */
  var alt = document.getElementById('alt');
  if (!reduce) setInterval(function () { alt.textContent = (1312 + Math.round(Math.random() * 6 - 3)).toLocaleString('es-AR'); }, 900);

  /* reveal + counters */
  if ('IntersectionObserver' in window && !reduce) {
    document.documentElement.classList.add('js');
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { threshold: .12 });
    document.querySelectorAll('.rv').forEach(function (el) { io.observe(el); });
    var co = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target, to = +el.dataset.to, plus = !('plain' in el.dataset), t0 = performance.now();
        (function f(t) { var p = Math.min(1, (t - t0) / 1400), v = Math.round(to * (1 - Math.pow(1 - p, 3)));
          el.innerHTML = (plus ? '<i>+</i>' : '') + v; if (p < 1) requestAnimationFrame(f); })(t0);
        co.unobserve(el);
      });
    }, { threshold: .6 });
    document.querySelectorAll('[data-to]').forEach(function (el) { co.observe(el); });
  }

  /* form -> WhatsApp */
  var f = document.getElementById('f'), send = document.getElementById('f-send');
  function build() {
    var v = function (id) { return document.getElementById(id).value.trim(); };
    var txt = 'Hola Arzelan Geo, ' + (v('f-name') ? 'soy ' + v('f-name') + '. ' : '') + 'Me interesa: ' + v('f-svc') + '.' +
      (v('f-place') ? ' Ubicación: ' + v('f-place') + '.' : '') + (v('f-msg') ? ' ' + v('f-msg') : '');
    send.href = 'https://wa.me/5493516080376?text=' + encodeURIComponent(txt);
  }
  f.addEventListener('input', build); f.addEventListener('change', build);
  f.addEventListener('submit', function (e) { e.preventDefault(); });
  build();
})();
