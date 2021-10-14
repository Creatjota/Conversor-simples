
function transformacao(temperatura, medida) {
    medida = medida.toUpperCase()
    if (medida === "F") {
        let celsius = (temperatura - 32) * 5 / 9
        console.log(`A conversão de fahrenheit para celsius é ${celsius}`)
    } else if (medida === "C") {
        let fahrenheit = temperatura * 9 / 5 + 32
        console.log(`A conversão de celsius para fahrenheit é ${fahrenheit}`)
    }
    else {
        console.log(`Medida inexistente`)
    }
}
transformacao(80, "f")
transformacao(80, "C")
