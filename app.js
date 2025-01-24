// Declaración del array para almacenar los nombres
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let inputNombre = document.getElementById('amigo');
    let nombre = inputNombre.value.trim();

    // Validar la entrada
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    // Actualizar el array de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    inputNombre.value = '';
    inputNombre.focus();

    // Actualizar la lista visible
    actualizarLista();
}
// Función para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    // Obtener el elemento de la lista
    let listaAmigos = document.getElementById('listaAmigos');

    // Limpiar la lista existente
    listaAmigos.innerHTML = '';

    // Iterar sobre el arreglo amigos
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento de lista
        let li = document.createElement('li');
        li.textContent = amigos[i];

        // Agregar el elemento a la lista
        listaAmigos.appendChild(li);
    }
}
// Función para realizar el sorteo
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('La lista está vacía. Agrega nombres antes de realizar el sorteo.');
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}

