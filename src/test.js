//A entrega deste exercício consiste em:

//• Cria um array de objetos, onde teremos como atributos do objeto: o nome e a nota de alunos;
//• Criar uma função que irá retornar apenas os alunos que tiveram a nota maior ou igual à 6;
//• Crie uma branch exercicio_es6 no repositório do curso, armazene o código nesta branch e nos envie o link através da plataforma. 

const alunosEbac = [
    {aluno: 'Luan Lopes', nota:  10},
    {aluno: 'Lucas silva', nota: 8.2},
    {aluno: 'Ian Cardoso', nota: 9.9},
    {aluno: 'Carlos Siqueira', nota: 7.1},
    {aluno: 'Thiago Mendes', nota: 6.3},
    {aluno: 'Pedro Santos',nota: 5},
    {aluno: 'Rafael Pereira', nota: 3.9},
    {aluno: 'Camilo Lima', nota: 2.1}
]

const aprovados = alunosEbac.filter((e)=>{return e.nota >= 6})

console.log(...aprovados)