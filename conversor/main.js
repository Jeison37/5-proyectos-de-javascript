const input = document.getElementById("input")
const output = document.getElementById("output")
const isoInput = document.getElementById("iso-input")
const isoOutput = document.getElementById("iso-output")

let rate = new Map()


fetch("https://v6.exchangerate-api.com/v6/6bb205bd824aa848d77673ef/latest/USD")
.then(res => res.json())
.then(data => {
    const exchange = data.conversion_rates
    rate.set(
        "USD",exchange
    )

})

fetch("https://v6.exchangerate-api.com/v6/6bb205bd824aa848d77673ef/latest/EUR")
.then(res => res.json())
.then(data => { 
    const exchange = data.conversion_rates
    rate.set(
        "EUR",exchange
    )

})

fetch("https://v6.exchangerate-api.com/v6/6bb205bd824aa848d77673ef/latest/VES")
.then(res => res.json())
.then(data => { 
    const exchange = data.conversion_rates
    rate.set(
        "VES",exchange
    )

})


input.addEventListener("input", ()=>{
    const isoIn = isoInput.value
    const isoOut = isoOutput.value
    const value = input.value

    output.value = value * rate.get(isoIn)[isoOut]

})