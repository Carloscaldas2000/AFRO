// Verifica si el DOM está completamente cargado antes de ejecutar cualquier script
document.addEventListener('DOMContentLoaded', function() {
    
    // Ejemplo de función que puedes usar para manejar el registro o inicio de sesión
    function handleFormSubmit(event) {
        event.preventDefault(); // Evita que la página se recargue

        // Captura los valores de los campos de entrada
        const email = event.target.querySelector('input[type="email"]').value;
        const password = event.target.querySelector('input[type="password"]').value;

        // Validación básica
        if (email === '' || password === '') {
            alert('Por favor, complete todos los campos');
            return;
        }

        // Aquí puedes agregar más lógica, como enviar los datos a un servidor
        console.log('Correo:', email);
        console.log('Contraseña:', password);

        // Simulación de respuesta exitosa
        alert('Formulario enviado con éxito');
    }

    // Selecciona los formularios de registro e inicio de sesión
    const registerForm = document.querySelector('form[action="#"]:first-of-type');
    const loginForm = document.querySelector('form[action="#"]:nth-of-type(2)');

    // Asigna la función de manejo a cada formulario
    if (registerForm) {
        registerForm.addEventListener('submit', handleFormSubmit);
    }

    if (loginForm) {
        loginForm.addEventListener('submit', handleFormSubmit);
    }

    // Ejemplo de comportamiento dinámico, como ocultar o mostrar campos
    const passwordFields = document.querySelectorAll('input[type="password"]');
    passwordFields.forEach(field => {
        field.addEventListener('focus', function() {
            this.style.backgroundColor = '#e0f7fa'; // Cambia el fondo cuando el campo esté en foco
        });
        field.addEventListener('blur', function() {
            this.style.backgroundColor = ''; // Restaura el fondo al desenfocar
        });
    });

    // Cargar y mostrar la imagen curlyphoto
    const imageElement = document.createElement('img'); // Crea un elemento de imagen
    imageElement.src = 'src/images/curlyphoto.jpg'; // Establece la ruta de la imagen
    imageElement.alt = 'Foto de cabello curly'; // Añade un texto alternativo para accesibilidad
    imageElement.style.width = '100%'; // Puedes ajustar el tamaño de la imagen
    imageElement.style.maxWidth = '400px'; // Asegúrate de que no exceda un tamaño máximo
    imageElement.style.display = 'block'; // Mostrar como bloque
    imageElement.style.margin = '0 auto'; // Centrar la imagen

    // Inserta la imagen en el contenedor donde quieres mostrarla
    const container = document.querySelector('.wrapper'); // Selecciona el contenedor donde mostrar la imagen
    if (container) {
        container.appendChild(imageElement); // Añade la imagen al final del contenedor
    }

    // Manejo de la carga del video (si tienes un video de fondo)
    const videoElement = document.querySelector('video');
    if (videoElement) {
        videoElement.addEventListener('canplay', function() {
            console.log('El video está listo para ser reproducido');
        });
    }
});
