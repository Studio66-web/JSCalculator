
const output = document.querySelector("#output")

let currentInput = "0"

function addSymbol(symbol) {
    if (currentInput === "0" && symbol != ".") {
        currentInput = symbol
    } else if (currentInput === "0" && symbol === ".") {
        currentInput = "0."
    } else {
        currentInput += symbol
    }
    updateDisplay()
}

function updateDisplay() {
    output.value = currentInput
}

function calculate() {
    if (currentInput === "0") return
    try {
        var res = math.evaluate(currentInput)
        currentInput = String(res)
        updateDisplay()
    } catch(error) {
        currentInput("Error")
        updateDisplay()
    }
}

function clearDisplay() {
    currentInput = "0"
    updateDisplay()
}
