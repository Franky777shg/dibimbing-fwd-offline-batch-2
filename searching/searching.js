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