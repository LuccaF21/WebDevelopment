
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let sumEl = document.getElementById("sum-el")
let avgEl = document.getElementById("avg-el")

let count = 0
let total = 0
let sum = 0
let avg = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    total += 1
    sum += count
    avg = sum / total
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    totalEl.textContent = total
    sumEl.textContent = sum
    avgEl.textContent = avg.toFixed(2)
    count = 0
}

function clearall() {
    saveEl.textContent = "- "
    countEl.textContent = 0
    totalEl.textContent = 0
    sumEl.textContent = 0
    avgEl.textContent = 0
    total = 0
    count = 0
    sum = 0
    avg = 0
}