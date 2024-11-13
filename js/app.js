let valorNome = document.getElementById('nome-amigo');
let listaAmigo = document.getElementById('lista-amigos');
let amigos = []; 

function fisherYatesShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Escolhe um índice aleatório de 0 até i
        const j = Math.floor(Math.random() * (i + 1));

        // Troca os elementos de posição i e j
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
function removerDuplicatas(array) {
    // Usa o Set para eliminar duplicatas e depois converte de volta para um array
    return [...new Set(array)];
}



let minhaLista = [1, 2, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,2, 3];
let outraLista = [4, 5, 6];
let novoArray = minhaLista.concat(minhaLista, outraLista);

novoArray.pop();

arraySemDuplicatas = removerDuplicatas(novoArray);
fisherYatesShuffle(arraySemDuplicatas);
removerDuplicatas(arraySemDuplicatas);
console.log(arraySemDuplicatas);


function adicionar() {
    let nomeAmigo = valorNome.value;

    function verificarDuplicados(array, nome) {
        return array.includes(nome); // Retorna true se o nome já estiver no array
    }

    if (nomeAmigo) {
        if (verificarDuplicados(amigos, nomeAmigo)) {
            alert(`Elemento duplicado encontrado: ${nomeAmigo}`);
        } else {
            amigos.push(nomeAmigo);

            // Adiciona um elemento HTML com o nome e um botão para remover
            listaAmigo.innerHTML += `
                <p id="amigo-${nomeAmigo}">
                    ${nomeAmigo} 
                    <button onclick="retirarAmigo('${nomeAmigo}')">Remover</button>
                </p>`;
        }
    }
}

function retirarAmigo(nomeAmigo) {
    // Remove o amigo do array
    amigos = amigos.filter(amigo => amigo !== nomeAmigo);

    // Remove o elemento do DOM
    let elementoAmigo = document.getElementById(`amigo-${nomeAmigo}`);
    if (elementoAmigo) {
        elementoAmigo.remove();
    }
}

function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function sortear() {
    let button = document.getElementById("sortearButton");

    embaralharArray(amigos);
    let listaSorteio = document.getElementById('lista-sorteio');

    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear.");
    } else {
        
        for (let i = 0; i < amigos.length; i++) {
            listaSorteio.innerHTML += amigos[i] + ' --> ' + amigos[(i + 1) % amigos.length] + '<br>';
        }
        button.disabled = true;
        button.innerText = "Sorteio Realizado";
    }
}

function reiniciar() {
    let button = document.getElementById("sortearButton");
    let listaSorteio = document.getElementById('lista-sorteio');
    let listaAmigo = document.getElementById('lista-amigos');

    amigos = [];
    listaAmigo.innerHTML = ''; // Limpa a lista de amigos
    listaSorteio.innerHTML = ''; // Limpa o sorteio

    button.disabled = false;
    button.textContent = 'Sortear';
}
