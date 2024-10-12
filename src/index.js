document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar los formularios
    const registerForm = document.querySelector('#register-form');
    const loginForm = document.querySelector('#login-form');

    // Manejar el envío del formulario de registro
    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();  // Evitar que se recargue la página
        const email = registerForm.querySelector('input[type="email"]').value;
        const password = registerForm.querySelector('input[type="password"]').value;
        
        // Aquí puedes añadir la lógica para registrar un usuario
        console.log(`Registrando usuario: ${email} con contraseña: ${password}`);
        alert('Registro exitoso');
    });

    // Manejar el envío del formulario de inicio de sesión
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();  // Evitar que se recargue la página
        const email = loginForm.querySelector('input[type="email"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;
        
        // Aquí puedes añadir la lógica para iniciar sesión
        console.log(`Iniciando sesión con: ${email}`);
        alert('Inicio de sesión exitoso');
    });
});
