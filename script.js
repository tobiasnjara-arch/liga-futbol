// 1. Lógica para filtrar las rondas en fixture.html
function cambiarRonda(rondaId) {
    // Ocultar todas las rondas de partidos
    const rondas = document.querySelectorAll('.ronda');
    rondas.forEach(ronda => {
        ronda.style.display = 'none';
    });

    // Mostrar únicamente la ronda seleccionada
    document.getElementById(rondaId).style.display = 'block';

    // Quitar la clase activa de todos los botones
    const botones = document.querySelectorAll('.btn-filtro');
    botones.forEach(boton => {
        boton.classList.remove('activo');
    });
    
    // Sumar la clase activa al botón que fue clickeado
    event.target.classList.add('activo');
}

// 2. Lógica para validar el formulario en contacto.html
function validarFormulario(event) {
    event.preventDefault(); // Evita que la página se recargue automáticamente

    const equipo = document.getElementById('nombreEquipo').value.trim();
    const delegado = document.getElementById('delegado').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const alerta = document.getElementById('mensaje-alerta');

    // Validación: si alguno de los campos está vacío
    if (equipo === "" || delegado === "" || telefono === "") {
        alerta.textContent = "⚠️ Por favor, completá todos los campos obligatorios.";
        alerta.className = "alerta error";
        alerta.style.display = "block";
    } else {
        // Si está todo correcto
        alerta.textContent = "⚽ ¡Inscripción enviada con éxito! Nos contactaremos a la brevedad.";
        alerta.className = "alerta exito";
        alerta.style.display = "block";
        
        // Reiniciar el formulario para limpiarlo
        document.getElementById('form-inscripcion').reset();
    }
}