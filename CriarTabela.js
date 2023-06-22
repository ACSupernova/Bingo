var cartelasCriadas = 0;

function gerarNumeros(colunaInicial, colunaFinal) {
    var numeros = [];

    // Gera os números aleatórios no intervalo especificado
    while (numeros.length < 5) {
        var numero = Math.floor(Math.random() * (colunaFinal - colunaInicial + 1)) + colunaInicial;

        // Verifica se o número já foi gerado
        if (!numeros.includes(numero)) {
            numeros.push(numero);
        }
    }

    return numeros;
}

function gerarCartela() {
    var cartela = [];

    // Gera os números para cada coluna
    cartela.push(gerarNumeros(1, 15));
    cartela.push(gerarNumeros(16, 30));
    cartela.push(gerarNumeros(31, 45));
    cartela.push(gerarNumeros(46, 60));
    cartela.push(gerarNumeros(61, 75));

    return cartela;
}

function criarCartela() {
    // Verifica se o número máximo de cartelas já foi alcançado
    if (cartelasCriadas >= 6) {
        alert('Atenção! O jogo suporta apenas 6 cartelas por jogo.');
        return;
    }

    // Pede o nome do jogador através de um prompt
    var nomeJogador = prompt('Qual o nome do jogador?');

    // Verifica se um nome foi inserido
    if (!nomeJogador) {
        alert('Por favor, insira um nome válido.');
        return;
    }

    // Cria a div com a classe "cartela"
    var divCartela = document.createElement('div');
    divCartela.classList.add('cartela');

    // Cria o elemento h1 com o nome do jogador
    var titulo = document.createElement('h1');
    titulo.textContent = nomeJogador;

    // Cria um botão para confirmar o nome do jogador
    var botaoConfirmar = document.createElement('button');
    botaoConfirmar.textContent = 'Confirmar';
    botaoConfirmar.addEventListener('click', function () {
        var nome = inputNomeJogador.value;
        if (nome) {
            alert(nome);
        }
    });

    // Cria a tabela
    var tabela = document.createElement('table');

    // Cria as linhas e células da tabela
    var letras = ['B', 'I', 'N', 'G', 'O'];
    var colunas = gerarCartela();

    // Cria a primeira linha da tabela (cabeçalho)
    var cabecalho = document.createElement('tr');

    for (var i = 0; i < letras.length; i++) {
        var th = document.createElement('th');
        th.textContent = letras[i];
        cabecalho.appendChild(th);
    }

    tabela.appendChild(cabecalho);

    // Cria as demais linhas da tabela
    for (var i = 0; i < letras.length; i++) {
        var linha = document.createElement('tr');

        for (var j = 0; j < 5; j++) {
            var td = document.createElement('td');
            td.textContent = colunas[j][i];
            linha.appendChild(td);
        }

        tabela.appendChild(linha);
    }

    // Adiciona os elementos criados à cartela
    divCartela.appendChild(titulo);
    divCartela.appendChild(botaoConfirmar);
    divCartela.appendChild(tabela);

    // Obtém a referência ao elemento onde as cartelas serão inseridas
    var elementoPai = document.getElementById('area_cartelas_bingo');

    // Adiciona a cartela ao elemento pai
    elementoPai.appendChild(divCartela);

    // Incrementa o contador de cartelas criadas
    cartelasCriadas++;
}