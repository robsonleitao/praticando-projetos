const inputTarefa = document.querySelector('#tarefa');
const tarefas = document.querySelector('#tarefas');
const btnSalvarTarefa = document.querySelector('#btnSalvarTarefa');
const form = document.querySelector('#form');
let contadorTarefas = 0;

function criaTagLi() {
    return document.createElement('li');
}

function criarTarefa(texto) {
    const li = criaTagLi();

    const divTarefa = document.createElement('div');
    divTarefa.classList.add('tarefa-container');
    li.appendChild(divTarefa);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox-tarefa');
    checkbox.setAttribute('id', texto); // Atribuir o ID como o texto da tarefa
    divTarefa.appendChild(checkbox);

    const textoTarefa = document.createElement('span');
    textoTarefa.textContent = texto;
    divTarefa.appendChild(textoTarefa);

    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = '<i class="ri-delete-bin-7-line icone-lixeira"></i>';
    botaoApagar.classList.add('btnExcluir');
    botaoApagar.onclick = function () {
        deletarTarefa(texto);
    };
    li.appendChild(botaoApagar);

    li.classList.add('item-tarefa');
    tarefas.appendChild(li);

    // Incrementar o contador de tarefas pendentes ao criar uma nova tarefa
    contadorTarefas++;
    atualizarContadorTarefasPendentes();
}

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function deletarTodasTarefas() {
    tarefas.innerHTML = ''; // Limpar todas as tarefas
    contadorTarefas = 0;
    atualizarContadorTarefasPendentes();
}

function deletarTarefa(tarefa) {
    const itemTarefa = tarefas.querySelector(`#${tarefa}`).parentNode.parentNode;
    const checkbox = itemTarefa.querySelector('.checkbox-tarefa');

    // Verificar se o checkbox está marcado antes de decrementar o contador
    if (!checkbox.checked) {
        contadorTarefas--;
    }

    itemTarefa.remove();
    atualizarContadorTarefasPendentes();
}

function atualizarContadorTarefasPendentes() {
    const tagSpan = document.querySelector('#contadorTarefasPendentes');
    tagSpan.textContent = contadorTarefas;
}

function atualizarTarefasPendentes() {
    const listaTarefas = tarefas.querySelectorAll('.item-tarefa');

    let contadorTarefasPendentes = 0;

    listaTarefas.forEach((item) => {
        const checkbox = item.querySelector('.checkbox-tarefa');
        
        if (!checkbox.checked) {
            contadorTarefasPendentes++;
        }
    });

    contadorTarefas = contadorTarefasPendentes;
    atualizarContadorTarefasPendentes();
}

inputTarefa.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        if (!inputTarefa.value) return;
        criarTarefa(inputTarefa.value);
        limpaInput();
    }
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
});

// Adicionar evento de escuta para os checkboxes
tarefas.addEventListener('change', function(event) {
    if (event.target.classList.contains('checkbox-tarefa')) {
        atualizarTarefasPendentes();
    }
});

btnSalvarTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return;
    criarTarefa(inputTarefa.value);
    limpaInput();
});