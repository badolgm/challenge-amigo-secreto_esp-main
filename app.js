// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    const lista = document.getElementById('listaAmigos');

    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    if (amigos.includes(nombre)) {
        alert('Este nombre ya está en la lista.');
        return;
    }

    amigos.push(nombre);
    input.value = '';

    lista.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    if (amigos.length === 0) {
        alert('Agrega al menos un amigo para sortear.');
        return;
    }

    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.innerHTML = '';
    const li = document.createElement('li');
    li.textContent = `¡Tu amigo secreto es: ${amigoSecreto}!`;
    resultado.appendChild(li);
}