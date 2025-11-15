class Pessoa {
    constructor(name){
        this.name = name;
    }
};

class Aluno extends Pessoa {
    constructor(name, nota) {
        super(name);
        this.nota = nota;
    }
};

let alunos = [new Aluno('Gui', 10) ,new Aluno('Gabriel', 10) ,new Aluno('Tteuw', 8) ,new Aluno('Alanzoka', 9) ,new Aluno('Eren', 5), new Aluno('Armin', 10), new Aluno('Mikasa', 2)];

const alunos6 = alunos.filter((item) => {
    return item.nota >= 6;
})

console.log(alunos6)