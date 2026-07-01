function greetUser() {
    console.log('Halo user!')
}

greetUser()

function returnExample() {
    return 10
}

console.log(returnExample())

// FUNCTION EXPRESSION
const greetUser2 = function() {
    console.log("Sepakat")
}

greetUser2()

// HOISTING
// Di sini tidak ada variabel hobby

// console.log(hobby)

// let hobby = 'makan'

// PARAMETER
function kuadratDua(nilai) {
    return nilai ** 2
}

console.log(kuadratDua(4))

function kuadrat(nilai, n) {
    return nilai ** n
}

console.log(kuadrat(4, 3))

function pertambahan(a = 2, b = 1) {
    return a + b
}

console.log(pertambahan(2))
console.log(pertambahan())

// ARROW FUNCTION
// const kuadratTiga = (nilai) => nilai ** 3
const kuadratTiga = (nilai) => {
    return nilai ** 3
}
console.log(kuadratTiga(2))