// Capturamos el botón y el input del HTML
const buttonText = document.getElementById('buttonText');
const inputText = document.getElementById('inputText');

// Agregamos un evento 'click' al botón para guardar el texto
buttonText.addEventListener('click', () => {
    // Obtenemos el valor del input
    const inputValue = inputText.value;

    // Guardamos el valor en localStorage
    localStorage.setItem('datoGuardado', inputValue);

    // Podemos mostrar una alerta opcional si queremos
    alert('Dato guardado en localStorage: ' + inputValue);
});
