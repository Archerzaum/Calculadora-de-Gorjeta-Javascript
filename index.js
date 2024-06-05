function formatMoney (value) {
    value = Math.ceil(value * 100) / 100
    value = value.toFixed(2)
    return 'R$' + value
}

function formatSplit(value) {
    if (value == 1) return value + ' Pessoa'
    return value + ' Pessoas'
}

function update() {
    let bill= Number(document.getElementById('yourBill').value)
    let tipPercentage= document.getElementById('tipInput').value
    let split= document.getElementById('splitInput').value
    
    let tipValue = bill * (tipPercentage/100)
    let billtotal = bill + tipValue
    let billEach = billtotal / split
    
    document.getElementById('tipPercent').innerHTML = tipPercentage + '%'
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue)
    document.getElementById('totalWithTip').innerHTML = formatMoney(billtotal)
    document.getElementById('splitValue').innerHTML = formatSplit(split)
    document.getElementById('billEach').innerHTML = formatMoney(billEach)
}