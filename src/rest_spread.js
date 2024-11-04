
//rest
function soma(){
    let soma = 0

    for(let i = 0; i<arguments.length; i++){
        soma += arguments[i]
    }

    return soma
}

console.log(soma(10, 40, 4))

function somaComRest(...numeros){
    const soma = numeros.reduce((total, numeroAtual)=>{
        total += numeroAtual
        return total
    },0)
    return soma
}

console.log(somaComRest(3, 55, 40))

//spread
const numero =  [1,2,3,4,5]

console.log(...numero)

const timeSp = ['São Paulo', 'Palmeiras']
const timeRj = ['Flamengo', 'Vasco']

const time = [...timeSp, ...timeRj]
//const time = timeSp.concat(timeRj)

console.log(time)

const carroJulia = {
    modelo: 'Gol',
    marca: 'VW',
    motor: '1.6'
}

const carroAna = {
    ...carroJulia,
    motor:'1.8'
}

console.log(carroAna)


// desestruturação

const motorCarroAna = carroAna.motor

const {motor} = carroAna
const {motor: motorJulia} = carroJulia