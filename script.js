:root {
    --bg: #050505;
    --card: #111111;
    --accent: #ffffff;
    --text-dim: #888888;
}

* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { background: var(--bg); color: white; font-family: -apple-system, system-ui, sans-serif; overflow-x: hidden; }

nav { position: fixed; top: 0; width: 100%; padding: 25px 5%; z-index: 100; background: rgba(5,5,5,0.8); backdrop-filter: blur(15px); border-bottom: 1px solid #111; }
.nav-container { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; }
.nav-logo { font-weight: 900; letter-spacing: 2px; text-decoration: none; color: white; font-size: 1.1rem; }
.nav-links a { color: var(--text-dim); text-decoration: none; margin-left: 25px; font-size: 0.75rem; text-transform: uppercase; transition: 0.3s; }
.nav-links a:hover { color: white; }

.hero { height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; background: radial-gradient(circle at center, #111 0%, #050505 100%); }
.title-main { font-size: clamp(3rem, 12vw, 8rem); font-weight: 900; letter-spacing: -5px; line-height: 0.8; }
.subtitle { color: var(--text-dim); font-size: 1.1rem; margin-top: 25px; font-weight: 300; }

.content-section { padding: 80px 10%; max-width: 1400px; margin: 0 auto; }
.section-heading { font-size: 2.5rem; margin-bottom: 50px; font-weight: 800; text-align: center; letter-spacing: -1px; }
.bento-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; }
.bento-item { background: var(--card); padding: 40px; border-radius: 24px; border: 1px solid #222; transition: 0.3s; }
.bento-item:hover { border-color: #444; }
.highlight { background: white; color: black; }
.highlight p { color: #333; }

.test-section { padding: 80px 5%; display: flex; justify-content: center; }
.test-card { background: var(--card); width: 100%; max-width: 700px; padding: 60px 40px; border-radius: 32px; text-align: center; border: 1px solid #222; }
.progress-container { width: 100%; height: 6px; background: #222; border-radius: 10px; margin-bottom: 40px; }
.progress-bar { height: 100%; background: white; width: 0%; transition: 0.6s cubic-bezier(0.22, 1, 0.36, 1); }
#pregunta-texto { font-size: 1.6rem; font-weight: 600; margin-bottom: 40px; min-height: 90px; }
.btn-action { background: white; border: none; padding: 18px 50px; border-radius: 14px; font-weight: 800; cursor: pointer; margin: 0 10px; transition: 0.2s; }
.btn-action:hover { transform: scale(1.05); }

footer { padding: 80px 10%; text-align: center; border-top: 1px solid #111; font-weight: 600; font-size: 0.8rem; }
.location { color: var(--text-dim); font-size: 0.7rem; margin-top: 12px; font-weight: 400; letter-spacing: 1px; }

@media (max-width: 768px) {
    .btn-action { width: 100%; margin: 10px 0; }
    .nav-links { display: none; }
}
