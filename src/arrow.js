const minhaFuncao = ()=> console.log('Ola')

const retornaUmCarro = ()=>({
    modelo:'KA',
    fabricante:'Ford'
})

minhaFuncao()
console.log(retornaUmCarro())

const carro = {
    velociadeAtual: 40,
    acelerar: function(){
        this.velociadeAtual += 10
    },
    frear:()=>{
        this.velociadeAtual -= 10
    }
}

