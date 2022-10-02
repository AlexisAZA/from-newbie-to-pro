let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let resetEl = document.getElementById("reset-el")
let totalEl = document.getElementById("total-el")
var count = 0
var totalStr = 0


function increment() {
    count += 1
    countEl.textContent = count
    console.log(count)
}

function save() {
    let countStr = count + " - "
    totalStr += count
    saveEl.textContent += countStr // At odds with innerText, it can show spaces
    totalEl.textContent = totalStr
    countEl.textContent = 0
    count = 0
    console.log(count)
}
