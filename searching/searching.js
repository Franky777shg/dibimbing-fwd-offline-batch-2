// arr = ["apel", "mangga", "jeruk", "pisang"], target = "jeruk"
const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }

    // kalau gak ketemu
    return "Tidak ketemu"
}

console.log(linearSearch(["apel", "mangga", "jeruk", "pisang"], "jeruk"))
console.log(linearSearch(["apel", "mangga", "jeruk", "pisang"], "duren"))

// contoh recursive
// const recursive = () => {
//     recursive()
// }

// recursive()

// BUILT IN SEARCHING JS
let arr = ["apel", "mangga", "jeruk", "pisang", "duren"]
let searchForPisang = arr.find(item => item === "pisang")
let searchForPisangIndex = arr.findIndex(item => item === "pisang")
console.log(searchForPisangIndex)