/* Reset básico */
body, h1, h2, p, input, form {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    height: 100vh;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
}

/* Estilos para la imagen */
.image-container {
    margin-top: 20px;
    max-width: 100%;
    height: auto;
}

.image-container img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.container {
    background-color: rgba(0, 0, 0, 0.8);
    padding: 20px;
    border-radius: 10px;
    color: white;
    width: 300px;
    margin: 20px 0;
}

input[type="email"], input[type="password"] {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: none;
    border-radius: 5px;
}

input[type="submit"] {
    background-color: #6a0dad;
    color: white;
    border: none;
    padding: 10px;
    width: 100%;
    border-radius: 5px;
    cursor: pointer;
}

input[type="submit"]:hover {
    background-color: #5b0b8e;
}

@media (max-width: 600px) {
    .container {
        width: 100%;
        max-width: 90%;
    }
}
