
let countFl = document.getElementById("count-fl")
let saveEl = document.getElementById("save-el")
let count = 0

function add() {
    count += 1
    countFl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countFl.textContent = 0
    count = 0
}

function erase() {
    count = count = 0
    countFl.textContent = count
}