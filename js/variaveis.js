function exemploVar() {
    var x = 5;
    if (true) {
        var x = 10;
        console.log(x);
    }
    console.log(x);
}

function exemploLet() {
    let x = 5;
    if (true) {
        let x = 10;
        console.log(x);
    }
    console.log(x);
}

function exemploConst() {
    const x = 5;
    if (true) {
        x = 10;
        console.log(x);
    }
    console.log(x);
}

function tiposVariaveis() {
    let nome = "Sergio";
    let idade = 19;
    let altura = 1.80;

    let verdade = true;
    let falso = false;

    let lista = ['Carro', 'Casa', 'Computador'];

    let vazio = null;

    let sem_valor;

    let aluno = {
        'nome': nome,
        'idade': idade,
        'altura': altura
    }

    console.log(nome, idade, altura);
    console.log(verdade, falso);
    console.log(lista);
    console.log(vazio);
    console.log(sem_valor);
    console.log(aluno);
}