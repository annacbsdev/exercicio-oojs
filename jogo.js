function Personagem(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
    this.atacar = function() {
        console.log(`${this.nome}, o ${this.tipo}, está atacando...`);
    }
    this.defender = function() {
        console.log(`${this.nome}, o ${this.tipo}, está se defendendo...`);
    }
}

function Guerreiro (nome, arma){
    Personagem.call(this, nome, 'Guerreiro')
    this.arma = arma;
    this.usarArma= function() {
        console.log(`${this.nome}, o Guerreiro, está usando ${this.arma}...`);
    }
}

function Mago(nome, magia){
    Personagem.call(this, nome, 'Mago')
    this.magia = magia;
    this.conjurarMagia = function() {
        console.log(`${this.nome}, o Mago, está conjurando ${this.magia}...`);
    }
}


const guerreiro1 = new Guerreiro('Thor', 'Martelo Mjölnir');
const guerreiro2 = new Guerreiro('Aragorn', 'Espada Andúril');
const mago1 = new Mago('Gandalf', 'Feitiço de Fogo');


guerreiro1.atacar();
guerreiro2.usarArma();
mago1.conjurarMagia();
