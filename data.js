// Recuperamos el dato guardado en localStorage
const datoGuardado = localStorage.getItem('datoGuardado');

// Mostramos el dato en el elemento con id 'data'
const dataElement = document.getElementById('data');
dataElement.textContent = datoGuardado ? datoGuardado : 'No hay dato guardado';
