const redeSociais = ['Facebook', 'Instagram','Twitter']

for(let i = 0; i< redeSociais.length; i++){
    console.log(`Eu tenho : ${redeSociais[i]}`)
}


//apenas iteração não returna nada
redeSociais.forEach(function(item, indice){
    console.log(`#${indice}Eu tenho : ${item}`)
})

const alunos = ['Gustavo', 'Julia', 'Paula','Wagner']
// novo array com retorno
const alunos2 = alunos.map(function(itemAtual){
    itemAtual = {
        nome: itemAtual,
        curso: 'Frontend'
    }
    return itemAtual
})

console.log(alunos2)
//encontra um item no array
const paula = alunos2.find(function(item){
    return item.nome == 'Paula'
})

console.log(paula)
//encontra o indece dentro do array
const indicePaula = alunos2.findIndex(function(item){
    return item.nome == 'Paula'
})

console.log(indicePaula)

alunos2.push({
    nome: 'Lucio',
    curso:'Backend'
})
// returna se todos os items atenden um requisito
const front = alunos2.every(function(item){
    return item.curso === 'Frontend'
})

console.log(front + ' every')
// atende pelo menos um item
const backend = alunos2.some(function(item){
    return item.curso ==='Backend' && item.curso === 'Frontend'
})

console.log(backend)
// filtra 
const filtraAluno = alunos2.filter(function(item){
    return item.curso ==='Backend'
})

console.log(filtraAluno)

const numero = [1,2,3,4,5]
const dobroDosNumero = numero.map((numeroAtual)=>{
    numeroAtual = numeroAtual * 2
    return numeroAtual
})

console.log(dobroDosNumero)

const nums = [10, 20, 30, 10]

const soma = nums.reduce((acumulador, itemAtual)=>{
    acumulador += itemAtual
    return itemAtual
})

const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});


const nomesDosAlunos = alunos2.reduce((acumulador, itemAtual)=>{
    acumulador += `${itemAtual.nome} `
    return acumulador
},'')

console.log(nomesDosAlunos)