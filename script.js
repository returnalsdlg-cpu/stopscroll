let puntos = 0;
function responder(si) {
    if(si) puntos++;
    document.getElementById('pregunta').innerText = "Test Finalizado";
    document.querySelector('.btn').style.display = 'none';
    const r = document.getElementById('res');
    r.innerText = puntos > 0 ? "Atención: Tienes indicios de dependencia." : "¡Bien! Tienes un uso equilibrado.";
}