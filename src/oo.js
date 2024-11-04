//function Pokemon(nome, tipo){
  //  this.nome = nome;
   // this.tipo = tipo;

//}

//const pikachu = new Pokemon('Pikachu', 'Eletrico')

class Pokemon{
    constructor(nome,tipo){
        this.nome = nome
        this.tipo =tipo
    }

    atacar(nomeAtaque){
        console.log(`${this.nome} atacous com ${nomeAtaque}`)

    }
}

class Pikachu extends Pokemon{
    constructor(){
        super('Pikachu', 'Eletrico')
    }
}

const pikachu2 = new Pikachu('Pikachu', 'Eletrico')
const pikachu = new Pokemon('Pikachu','Eletrico')
pikachu.atacar('Choque do trovão')

console.log(pikachu)
console.log(pikachu2)