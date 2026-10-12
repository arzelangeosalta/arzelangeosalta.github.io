// Arzelan Geo - interacciones del sitio
(function () {
  'use strict';

  var root = document.documentElement;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var WA = '5493516080376';
  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  /* ---------------- Textos ES / EN ---------------- */
  var T = {
    es: {
      'meta.title': 'Arzelan Geo · Agrimensura, topografía e ingeniería · Salta',
      'meta.desc': 'Medimos tu terreno con precisión y lo convertimos en decisiones claras. Agrimensura, topografía, tecnología geoespacial e ingeniería en Salta, Argentina.',
      skip: 'Saltar al contenido',
      'nav.svc': 'Qué hacemos', 'nav.diff': 'Diferencial', 'nav.pro': 'Proyectos', 'nav.team': 'Equipo', 'nav.cta': 'Contacto',
      'hero.eyebrow': 'Agrimensura · Topografía · Ingeniería · Salta',
      'hero.l1': 'Entendemos', 'hero.l2': 'el <em>territorio.</em>', 'hero.l3': 'Desarrollamos', 'hero.l4': '<em>soluciones.</em>',
      'hero.sub': 'Medimos tu terreno con precisión y lo convertimos en decisiones claras. Relevamientos, tecnología geoespacial e ingeniería aplicada, con un equipo que te acompaña de principio a fin.',
      'hero.cta1': 'Conocé nuestras soluciones', 'hero.cta2': 'Hablemos de tu proyecto',
      mq: 'Agrimensura ◉ Topografía ◉ Fotogrametría con dron ◉ GNSS RTK ◉ Modelos 3D ◉ Hidrología ◉ Drenaje ◉ Agro ◉',
      'man.tag': 'Quiénes somos',
      'man.text': 'Detrás de cada obra hay un terreno que conocer. <em>Lo medimos, lo entendemos y te lo explicamos en simple</em>, para que decidas con datos reales y sin sorpresas.',
      'st.1': 'años de experiencia', 'st.2': 'países', 'st.3': 'proyectos',
      'st.note': 'Trayectoria profesional del equipo fundador en agrimensura, minería e ingeniería hidráulica.',
      'svc.tag': 'Qué hacemos', 'svc.title': 'Más que <em>medir.</em>',
      'svc.lead': 'Cada servicio arranca en el campo y termina en algo que podés usar: un plano, un modelo o una solución lista para ejecutar.',
      's1.t': 'Agrimensura', 's1.d': 'Seguridad jurídica y planificación del territorio.', 's1.a': 'Mensuras', 's1.b': 'Subdivisiones y loteos', 's1.c': 'Prescripción adquisitiva', 's1.e': 'Amojonamientos',
      's2.t': 'Topografía', 's2.d': 'Información precisa para construir con confianza.', 's2.a': 'Plani-altimetría', 's2.b': 'Replanteo de obra', 's2.c': 'Movimiento de suelos', 's2.e': 'Control de avance',
      's3.t': 'Tecnología geoespacial', 's3.d': 'Datos precisos para mejores decisiones.', 's3.a': 'Fotogrametría con dron', 's3.b': 'GNSS RTK', 's3.c': 'Modelos 3D', 's3.e': 'GIS',
      's4.t': 'Ingeniería del agua', 's4.d': 'El agua, bajo control antes de que sea un problema.', 's4.a': 'Hidrología', 's4.b': 'Drenaje pluvial', 's4.c': 'Canales', 's4.e': 'Redes de agua',
      's5.t': 'Agro', 's5.d': 'Campos que rinden más, con cada gota en su lugar.', 's5.a': 'Diseño de riego', 's5.b': 'Sistematización de campos', 's5.c': 'Control de erosión',
      'dif.tag': 'Nuestro diferencial', 'dif.a': 'Territorio', 'dif.b': 'Ingeniería', 'dif.live': 'Modelo 3D', 'dif.cap': 'Corte · Relleno · Implantación',
      'dif.h': 'Del dato a la solución técnica.',
      'dif.p': 'No nos quedamos únicamente con el relevamiento. Integramos información del terreno, análisis técnico e ingeniería para acompañar decisiones de diseño, planificación y ejecución.',
      'f1.t': 'Relevamos', 'f1.d': 'Dron y GNSS RTK, referenciados a un punto fijo.',
      'f2.t': 'Analizamos', 'f2.d': 'Modelo 3D, volúmenes, cuencas y caudales.',
      'f3.t': 'Resolvemos', 'f3.d': 'Drenaje, taludes y fundaciones, listos para ejecutar.',
      'tr.m': 'Medido', 'tr.i': 'Interpolado', 'tr.s': 'Supuesto', 'tr.note': 'Cada dato que entregamos dice de dónde viene.',
      'why.tag': 'Por qué elegirnos', 'why.title': 'Precisión técnica, <em>trato cercano.</em>',
      'w1.t': 'Experiencia técnica', 'w1.d': 'Un equipo con años de campo en minería, obras e hidráulica.',
      'w2.t': 'Tecnología de precisión', 'w2.d': 'Dron, GNSS RTK y modelos 3D para ver el terreno como es.',
      'w3.t': 'Atención personalizada', 'w3.d': 'Hablás con quien mide y con quien diseña. Sin intermediarios.',
      'w4.t': 'Respuestas ágiles', 'w4.d': 'Propuestas claras y plazos que se cumplen.',
      'w5.t': 'Compromiso real', 'w5.d': 'Te acompañamos hasta que tu proyecto arranca.',
      'who.tag': 'Acompañamos a', 'who.1': 'Constructoras', 'who.2': 'Empresas mineras', 'who.3': 'Desarrolladoras e inmobiliarias', 'who.4': 'Productores agropecuarios', 'who.5': 'Particulares',
      'pro.tag': 'Proyectos destacados', 'pro.title': 'Caso de <em>aplicación.</em>', 'pro.place': 'Vivienda unifamiliar en ladera · Salta',
      'pro.h': 'Todo definido antes de mover una máquina.',
      'pro.p': 'Relevamos el lote, modelamos la casa sobre el terreno real y resolvimos drenaje, taludes y fundaciones. El cliente llegó a la obra con todo listo para cotizar.',
      'pc.1': 'Relevamiento', 'pc.2': 'Modelo 3D', 'pc.3': 'Drenaje', 'pc.4': 'Fundaciones',
      'team.tag': 'Personas', 'team.title': 'El <em>equipo.</em>',
      'p1.r': 'Dirección técnica', 'p1.d': 'Agrimensura y topografía. Años de campo en relevamientos para minería de litio en la Puna.',
      'p2.r': 'Ingeniería de proyectos', 'p2.d': 'Ingeniero civil en hidrología e hidráulica, con más de 10 años en proyectos internacionales.',
      'p3.r': 'Dirección comercial', 'p3.d': 'Tu primer contacto. Escucha lo que necesitás y te acompaña durante todo el proyecto.',
      'ct.tag': 'Contacto', 'ct.title': 'Tu proyecto, <em>sobre bases firmes.</em>',
      'ct.lead': 'Contanos dónde está el terreno y qué tenés en mente. Te respondemos rápido, con una propuesta clara de alcance, plazos y entregables.',
      'ct.mail': 'Correo',
      'fm.h': 'Pedí tu propuesta', 'fm.name': 'Nombre', 'fm.name.ph': 'Tu nombre', 'fm.place': 'Ubicación', 'fm.place.ph': 'Ej. San Lorenzo, Salta',
      'fm.svc': 'Servicio', 'fm.unsure': 'Todavía no lo sé', 'fm.msg': 'Tu proyecto', 'fm.msg.ph': 'Contanos brevemente qué querés hacer',
      'fm.send': 'Enviar por WhatsApp', 'fm.note': 'Se abre WhatsApp con tu mensaje listo para enviar.',
      'ft.slogan': 'Precisión que impulsa <em>proyectos.</em>',
      'wa.tip': '¿Hablamos?', 'wa.aria': 'Escribinos por WhatsApp',
      'wa.hi': 'Hola Arzelan Geo, ', 'wa.me': 'soy ', 'wa.int': 'Me interesa: ', 'wa.loc': ' Ubicación: ', 'wa.quick': 'Hola Arzelan Geo, quiero consultar por un proyecto.',
      'theme.dark': 'Activar modo nocturno', 'theme.light': 'Activar modo claro'
    },
    en: {
      'meta.title': 'Arzelan Geo · Land surveying, topography and engineering · Salta, Argentina',
      'meta.desc': 'We measure your land with precision and turn it into clear decisions. Land surveying, topography, geospatial technology and engineering in Salta, Argentina.',
      skip: 'Skip to content',
      'nav.svc': 'What we do', 'nav.diff': 'Our edge', 'nav.pro': 'Projects', 'nav.team': 'Team', 'nav.cta': 'Contact',
      'hero.eyebrow': 'Land surveying · Topography · Engineering · Salta',
      'hero.l1': 'We understand', 'hero.l2': 'the <em>land.</em>', 'hero.l3': 'We build', 'hero.l4': '<em>solutions.</em>',
      'hero.sub': 'We measure your land with precision and turn it into clear decisions. Surveying, geospatial technology and applied engineering, with a team that walks with you from start to finish.',
      'hero.cta1': 'Explore our solutions', 'hero.cta2': 'Let’s talk about your project',
      mq: 'Land surveying ◉ Topography ◉ Drone photogrammetry ◉ GNSS RTK ◉ 3D models ◉ Hydrology ◉ Drainage ◉ Agriculture ◉',
      'man.tag': 'Who we are',
      'man.text': 'Behind every project there is a piece of land to understand. <em>We measure it, we read it and we explain it in plain words</em>, so you decide with real data and no surprises.',
      'st.1': 'years of experience', 'st.2': 'countries', 'st.3': 'projects',
      'st.note': 'Professional track record of the founding team in surveying, mining and hydraulic engineering.',
      'svc.tag': 'What we do', 'svc.title': 'More than <em>measuring.</em>',
      'svc.lead': 'Every service starts in the field and ends in something you can use: a plan, a model or a solution ready to build.',
      's1.t': 'Land surveying', 's1.d': 'Legal certainty and land planning.', 's1.a': 'Boundary surveys', 's1.b': 'Subdivisions and lots', 's1.c': 'Adverse possession surveys', 's1.e': 'Boundary staking',
      's2.t': 'Topography', 's2.d': 'Accurate information to build with confidence.', 's2.a': 'Topographic surveys', 's2.b': 'Construction staking', 's2.c': 'Earthworks', 's2.e': 'Progress control',
      's3.t': 'Geospatial technology', 's3.d': 'Accurate data for better decisions.', 's3.a': 'Drone photogrammetry', 's3.b': 'GNSS RTK', 's3.c': '3D models', 's3.e': 'GIS',
      's4.t': 'Water engineering', 's4.d': 'Water under control before it becomes a problem.', 's4.a': 'Hydrology', 's4.b': 'Stormwater drainage', 's4.c': 'Channels', 's4.e': 'Water networks',
      's5.t': 'Agriculture', 's5.d': 'Fields that yield more, with every drop in its place.', 's5.a': 'Irrigation design', 's5.b': 'Land levelling', 's5.c': 'Erosion control',
      'dif.tag': 'Our edge', 'dif.a': 'Land', 'dif.b': 'Engineering', 'dif.live': '3D model', 'dif.cap': 'Cut · Fill · Layout',
      'dif.h': 'From data to engineering solutions.',
      'dif.p': 'We don’t stop at the survey. We bring together field data, technical analysis and engineering to support design, planning and construction decisions.',
      'f1.t': 'We survey', 'f1.d': 'Drone and GNSS RTK, tied to a fixed control point.',
      'f2.t': 'We analyse', 'f2.d': '3D model, volumes, catchments and flows.',
      'f3.t': 'We solve', 'f3.d': 'Drainage, slopes and foundations, ready to build.',
      'tr.m': 'Measured', 'tr.i': 'Interpolated', 'tr.s': 'Assumed', 'tr.note': 'Every piece of data we deliver tells you where it comes from.',
      'why.tag': 'Why choose us', 'why.title': 'Technical precision, <em>personal service.</em>',
      'w1.t': 'Technical experience', 'w1.d': 'A team with years of fieldwork in mining, construction and hydraulics.',
      'w2.t': 'Precision technology', 'w2.d': 'Drone, GNSS RTK and 3D models to see the land as it really is.',
      'w3.t': 'Personal attention', 'w3.d': 'You talk to the people who measure and design. No middlemen.',
      'w4.t': 'Fast answers', 'w4.d': 'Clear proposals and deadlines we keep.',
      'w5.t': 'Real commitment', 'w5.d': 'We stay with you until your project breaks ground.',
      'who.tag': 'We work with', 'who.1': 'Construction companies', 'who.2': 'Mining companies', 'who.3': 'Developers and real estate', 'who.4': 'Farmers and growers', 'who.5': 'Private owners',
      'pro.tag': 'Featured projects', 'pro.title': 'Case <em>study.</em>', 'pro.place': 'Single-family home on a hillside · Salta',
      'pro.h': 'Everything defined before a single machine moved.',
      'pro.p': 'We surveyed the lot, modelled the house on the real terrain and solved drainage, slopes and foundations. The client reached the build stage with everything ready to quote.',
      'pc.1': 'Survey', 'pc.2': '3D model', 'pc.3': 'Drainage', 'pc.4': 'Foundations',
      'team.tag': 'People', 'team.title': 'The <em>team.</em>',
      'p1.r': 'Technical director', 'p1.d': 'Land surveying and topography. Years of fieldwork surveying lithium mining sites in the Puna.',
      'p2.r': 'Project engineering', 'p2.d': 'Civil engineer specialised in hydrology and hydraulics, with 10+ years on international projects.',
      'p3.r': 'Business director', 'p3.d': 'Your first point of contact. Listens to what you need and stays with you throughout the project.',
      'ct.tag': 'Contact', 'ct.title': 'Your project, <em>on solid ground.</em>',
      'ct.lead': 'Tell us where the land is and what you have in mind. We reply fast, with a clear proposal on scope, timeline and deliverables.',
      'ct.mail': 'Email',
      'fm.h': 'Request a proposal', 'fm.name': 'Name', 'fm.name.ph': 'Your name', 'fm.place': 'Location', 'fm.place.ph': 'e.g. San Lorenzo, Salta',
      'fm.svc': 'Service', 'fm.unsure': 'I’m not sure yet', 'fm.msg': 'Your project', 'fm.msg.ph': 'Briefly tell us what you want to do',
      'fm.send': 'Send via WhatsApp', 'fm.note': 'WhatsApp opens with your message ready to send.',
      'ft.slogan': 'Precision that drives <em>projects.</em>',
      'wa.tip': 'Let’s talk', 'wa.aria': 'Message us on WhatsApp',
      'wa.hi': 'Hello Arzelan Geo, ', 'wa.me': 'my name is ', 'wa.int': 'I’m interested in: ', 'wa.loc': ' Location: ', 'wa.quick': 'Hello Arzelan Geo, I would like to ask about a project.',
      'theme.dark': 'Switch to dark mode', 'theme.light': 'Switch to light mode'
    }
  };
  var lang = root.getAttribute('lang') === 'en' ? 'en' : 'es';
  function t(k) { return (T[lang] && T[lang][k]) || T.es[k] || ''; }

  var themeBtn = document.getElementById('theme');
  var send = document.getElementById('f-send');
  var wf = document.querySelector('.wa-float');

  function applyLang(l) {
    lang = l;
    root.setAttribute('lang', l === 'en' ? 'en' : 'es-AR');
    document.querySelectorAll('[data-i18n]').forEach(function (el) { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) { el.innerHTML = t(el.dataset.i18nHtml); });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) { el.placeholder = t(el.dataset.i18nPh); });
    document.querySelectorAll('[data-lang]').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.lang === l ? 'true' : 'false'); });
    document.title = t('meta.title');
    var md = document.querySelector('meta[name="description"]'); if (md) md.content = t('meta.desc');
    wf.setAttribute('aria-label', t('wa.aria'));
    wf.href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(t('wa.quick'));
    updateThemeLabel(); buildWa();
  }
  document.querySelectorAll('[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () { store('ag-lang', b.dataset.lang); applyLang(b.dataset.lang); });
  });

  /* ---------------- Modo nocturno ---------------- */
  function isDark() {
    var a = root.getAttribute('data-theme');
    return a ? a === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  }
  function updateThemeLabel() { themeBtn.setAttribute('aria-label', isDark() ? t('theme.light') : t('theme.dark')); }
  themeBtn.addEventListener('click', function () {
    var next = isDark() ? 'light' : 'dark';
    root.setAttribute('data-theme', next); store('ag-theme', next); updateThemeLabel();
  });

  /* ---------------- Header ---------------- */
  var top = document.getElementById('top');
  function onScroll() { top.classList.toggle('solid', scrollY > 30); }
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* ---------------- Intro + entrada del hero ---------------- */
  var hero = document.getElementById('hero');
  if (!reduce) root.classList.add('js');
  var introOn = root.classList.contains('intro');
  setTimeout(function () { hero.classList.add('go'); }, introOn ? 2150 : 80);
  if (introOn) {
    try { sessionStorage.setItem('ag-intro', '1'); } catch (e) {}
    setTimeout(function () { root.classList.remove('intro'); }, 2900);
  }

  /* ---------------- Terreno en malla (canvas) ---------------- */
  function noise(x, y) {
    return Math.sin(x * 1.3 + Math.sin(y * .7) * 1.6) * .55 + Math.sin(y * 1.9 + x * .4) * .3 +
      Math.sin((x + y) * 2.7) * .12 + Math.cos(x * .5 - y * 1.1) * .45;
  }
  var mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  function terrain(canvas, o) {
    var ctx = canvas.getContext('2d'), w = 0, h = 0, last = 0;
    function size() {
      var dpr = Math.min(devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function draw(tm) {
      ctx.clearRect(0, 0, w, h);
      var rows = o.rows, cols = 64, horizon = h * (o.horizon - mouse.y * .04);
      var tilt = o.follow ? mouse.x * .18 : 0;
      for (var r = 0; r < rows; r++) {
        var z = 1 - r / rows, persp = 1 / (.35 + z * 2.4);
        var yBase = horizon + (h - horizon) * (1 - z) * 1.05;
        ctx.beginPath();
        for (var c = 0; c <= cols; c++) {
          var u = c / cols - .5, wx = u * 9 + tilt * 3, wz = r * .22 + tm * o.speed;
          var e = noise(wx, wz) + Math.max(0, noise(wx * .45 + 3, wz * .45 - 2)) * 1.4;
          var x = w / 2 + (u + tilt * .15) * w * 2.1 * persp, y = yBase - e * h * o.amp * persp;
          if (c) ctx.lineTo(x, y); else ctx.moveTo(x, y);
        }
        var a = Math.pow(1 - z, 1.25);
        ctx.strokeStyle = (r % 6 === 0) ? 'rgba(92,198,135,' + (a * .75) + ')' : 'rgba(255,255,255,' + (a * .32) + ')';
        ctx.lineWidth = r % 6 === 0 ? 1.4 : .8;
        ctx.stroke();
      }
    }
    size(); draw(0);
    addEventListener('resize', function () { size(); draw(last); });
    if (reduce) return;
    var t0 = performance.now();
    (function loop(now) {
      var b = canvas.getBoundingClientRect();
      if (b.bottom > 0 && b.top < innerHeight) {
        mouse.x += (mouse.tx - mouse.x) * .05; mouse.y += (mouse.ty - mouse.y) * .05;
        last = (now - t0) / 1000; draw(last);
      }
      requestAnimationFrame(loop);
    })(t0);
  }
  terrain(document.getElementById('terrain'), { rows: 48, horizon: .52, amp: .16, speed: .22, follow: true });
  terrain(document.getElementById('terrain2'), { rows: 30, horizon: .25, amp: .2, speed: .14 });

  /* ---------------- Mira que sigue al cursor ---------------- */
  var ret = document.getElementById('reticle'), retTxt = document.getElementById('ret-txt');
  function dms(v, pos, neg) {
    var s = v < 0 ? neg : pos; v = Math.abs(v);
    var d = Math.floor(v), mF = (v - d) * 60, m = Math.floor(mF), sec = Math.round((mF - m) * 60) % 60;
    return d + '°' + ('0' + m).slice(-2) + '′' + ('0' + sec).slice(-2) + '″ ' + s;
  }
  hero.addEventListener('pointermove', function (e) {
    var b = hero.getBoundingClientRect(), px = (e.clientX - b.left) / b.width, py = (e.clientY - b.top) / b.height;
    mouse.tx = px - .5; mouse.ty = py - .5;
    if (e.pointerType !== 'mouse') return;
    hero.classList.add('aim');
    ret.style.transform = 'translate(' + (e.clientX - b.left) + 'px,' + (e.clientY - b.top) + 'px)';
    retTxt.textContent = dms(-24.787 - py * .01, 'N', 'S') + ' · ' + dms(-65.42 + px * .012, 'E', lang === 'en' ? 'W' : 'O');
  });
  hero.addEventListener('pointerleave', function () { hero.classList.remove('aim'); mouse.tx = 0; mouse.ty = 0; });

  var alt = document.getElementById('alt');
  if (!reduce) setInterval(function () { alt.textContent = (1312 + Math.round(Math.random() * 6 - 3)).toLocaleString('es-AR'); }, 900);

  /* ---------------- Aparición al hacer scroll + contadores ---------------- */
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: .12 });
    document.querySelectorAll('.rv').forEach(function (el) { io.observe(el); });
    var co = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target, to = +el.dataset.to, plus = !('plain' in el.dataset), t1 = performance.now();
        (function f(tm) {
          var p = Math.min(1, (tm - t1) / 1500), v = Math.round(to * (1 - Math.pow(1 - p, 3)));
          el.innerHTML = (plus ? '<i>+</i>' : '') + v; if (p < 1) requestAnimationFrame(f);
        })(t1);
        co.unobserve(el);
      });
    }, { threshold: .6 });
    document.querySelectorAll('[data-to]').forEach(function (el) { co.observe(el); });
  } else {
    document.querySelectorAll('.rv').forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------------- WhatsApp ---------------- */
  function buildWa() {
    var v = function (id) { return document.getElementById(id).value.trim(); };
    var sel = document.getElementById('f-svc');
    var txt = t('wa.hi') + (v('f-name') ? t('wa.me') + v('f-name') + '. ' : '') + t('wa.int') + sel.options[sel.selectedIndex].text + '.' +
      (v('f-place') ? t('wa.loc') + v('f-place') + '.' : '') + (v('f-msg') ? ' ' + v('f-msg') : '');
    send.href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(txt);
  }
  var form = document.getElementById('f');
  form.addEventListener('input', buildWa); form.addEventListener('change', buildWa);
  form.addEventListener('submit', function (e) { e.preventDefault(); });

  // El botón flotante muestra "¿Hablamos?" unos segundos después de cargar
  setTimeout(function () { wf.classList.add('hint'); setTimeout(function () { wf.classList.remove('hint'); }, 3500); }, introOn ? 5000 : 3000);

  applyLang(lang);
})();
