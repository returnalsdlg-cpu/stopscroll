const banco = [
    "¿Es el celular lo primero que tocas al despertar?",
    "¿Sientes ansiedad si sales de casa sin él?",
    "¿Lo usas en clase para redes sociales?",
    "¿Has descuidado tareas por estar en internet?",
    "¿Te genera estrés tener poca batería?",
    "¿Ignoras a personas por mirar la pantalla?",
    "¿Sientes que el tiempo vuela al usar el móvil?",
    "¿Te lo llevas al baño siempre?",
    "¿Usas el celular justo antes de dormir?",
    "¿Has intentado usarlo menos sin éxito?"
];

let actual = 0;
let score = 0;

function update() {
    if (actual < banco.length) {
        document.getElementById('pregunta-texto').innerText = banco[actual];
        document.getElementById('counter').innerText = `${actual + 1} / 10`;
        document.getElementById('progress-bar').style.width = `${(actual / banco.length) * 100}%`;
    } else {
        finish();
    }
}

function check(val) {
    if (val) score++;
    actual++;
    update();
}

function finish() {
    let res = "";
    if (score >= 8) res = "DEPENDENCIA CRÍTICA: Necesitas un détox digital urgente.";
    else if (score >= 5) res = "RIESGO ALTO: El celular está controlando tu tiempo.";
    else res = "EQUILIBRIO SALUDABLE: Tienes buen control de tu vida digital.";

    document.getElementById('test-box').innerHTML = `
        <h2 style="font-size: 4rem; margin-bottom: 10px; color: white;">${score}/10</h2>
        <p style="font-weight: 700; margin-bottom: 30px; font-size: 1.1rem; color: #ccc;">${res}</p>
        <button class="btn-action" onclick="location.reload()">REINTENTAR</button>
    `;
}

window.onload = update;
