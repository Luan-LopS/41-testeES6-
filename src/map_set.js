let meuMap = new Map()
meuMap.set('nome','Valor')
meuMap.set('stack','html, css, js')


console.log(meuMap)

const nome = meuMap.get('nome')

console.log(nome)

meuMap.size

console.log(meuMap.has('nome'))

//meuMap.clear()


for(let chave of meuMap.keys()){
    console.log(chave)
}

//map.values()
//Map.delete()
//mep.entries()


const cpfs = new Set()

cpfs.add('0000000031')
cpfs.add('0000000000')

//cpfs.values()
//cpfs.keys()

cpfs.forEach((item)=>{
    console.log(item)
})


const array = ['luan', 'lucas', 'ian', 'ian']

const arrayComoSet = new Set([...array])
const arraySemItensDuplicados = [...arrayComoSet]

console.log(arrayComoSet)
console.log(arraySemItensDuplicados)