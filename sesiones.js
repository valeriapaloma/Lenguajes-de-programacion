// Simulamos los datos de las sesiones para cada fecha
const sesionesPorFecha = {
    '2024-10-01': ['10:00 AM', '12:30 PM', '3:00 PM'],
    '2024-10-02': ['11:00 AM', '2:00 PM', '5:00 PM'],
    '2024-10-03': ['9:00 AM', '1:30 PM', '6:00 PM']
};

// Obtener el título de la película desde la URL (en un proyecto real podríamos obtenerlo del servidor)
const urlParams = new URLSearchParams(window.location.search);
const peliculaSeleccionada = urlParams.get('pelicula');
document.getElementById('movie-title').textContent = peliculaSeleccionada || 'Película seleccionada';

// Función para cargar las sesiones según la fecha seleccionada
function cargarSesiones(fecha) {
    const sessionsList = document.getElementById('sessions-list');
    sessionsList.innerHTML = ''; // Limpiar la lista de sesiones

    const sesiones = sesionesPorFecha[fecha];
    if (sesiones) {
        sesiones.forEach(sesion => {
            const sessionItem = document.createElement('p');
            sessionItem.textContent = `Sesión: ${sesion}`;
            sessionsList.appendChild(sessionItem);
        });
    } else {
        sessionsList.textContent = 'No hay sesiones disponibles para esta fecha.';
    }
}

// Event listener para el cambio de fecha
document.getElementById('date-selector').addEventListener('change', function() {
    cargarSesiones(this.value);
});

// Cargar las sesiones por defecto para la primera fecha
cargarSesiones(document.getElementById('date-selector').value);