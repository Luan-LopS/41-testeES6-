function funcaoMuitoPesada(){
    let execucoes = 0
    for(let i  = 0; i<1000000000; i++){
        execucoes ++
    }
    return execucoes
}

const funcaoMuitoPesadaPromise = new Promise((resolve, reject)=>{
    try {
        let execucoes = 0
        for(let i  = 0; i<1000000000; i++){
            execucoes ++
        }
        resolve(execucoes)
    }catch(e){
        reject('Deu erro na interação')
    }
})

const promiseComParamentros = (login, senha)=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`logado com o usuario: ${login}`)
        },3000)
    })
}

console.log('Inicio')
//console.log(funcaoMuitoPesada())
funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro=>console.log(erro));

console.log('FIM')

async function execucaoPrincipal(){
    console.log('Inicio')
   // await funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro=>console.log(erro));

   promiseComParamentros('Luan',12345).then(resultado=>{
    console.log(resultado)
   })

    const resultado = await funcaoMuitoPesadaPromise
    console.log(resultado)

    console.log('FIM')

}

execucaoPrincipal()

