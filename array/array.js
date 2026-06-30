// let buah = ["apel", "melon", "semangka"]

// console.log(buah[1])
// console.log(buah.length)

// let campuran = ["meja", 23, true]
// console.log(campuran[0])

// let warna = ["merah", "hijau", "coklat", "hitam", "kuning"]
// console.log(warna)
// warna[0] = "biru"
// console.log(warna)
// console.log(warna.at(-1))
// console.log(warna[warna.length - 1])
// // index kuning = 4
// // 5 - 1

// METHODS
// let contohPush = ["satu"]
// console.log(contohPush);
// contohPush.push("dua")
// console.log(contohPush);

// let contohPop = ["satu", "dua"]
// console.log(contohPop);
// contohPop.pop()
// console.log(contohPop);

// let contohUnshift = ["satu"]
// console.log(contohUnshift);
// contohUnshift.unshift("dua")
// console.log(contohUnshift);

// let contohShift = ["satu", "dua"]
// console.log(contohShift);
// contohShift.shift()
// console.log(contohShift);

// SLICE
// let warna = ["merah", "hijau", "coklat", "hitam", "kuning"]
// let hasilSlice = warna.slice(1, 4)
// console.log(hasilSlice)

// // SPLICE
// let mobil = ["bmw", "merci", "honda", "kia", "toyota"]
// // menghapus merci sampai kia, dan mengganti nya dengan suzuki
// // ["bmw", "suzuki", "toyota"]
// mobil.splice(1, 3, "suzuki")
// console.log(mobil);

// ITERASI
// let angka = [3, 7, 1, 8, 4]
// angka.forEach((item) => {
//     console.log(item)
// })

// let angka2 = [3, 7, 1, 8, 4] // [6, 14, 2, 16, 8]
// let hasilMap = angka.map((item) => item * 2)
// console.log(hasilMap)

// let angka3 = [3, 7, 1, 8, 4]
// let hasilFilter = angka.filter((item) => {
//     return item % 2 === 1
// })
// console.log(hasilFilter);

// let angka4 = [3, 7, 1, 8, 4]
// let hasilReduce = angka.reduce((acc, item) => {
//     return acc + item
// })
// console.log(hasilReduce);

// DESTRUCTURING
// let warna = ["merah", "hijau", "kuning"]
// console.log(warna[1])
// let [merah, hijau, kuning] = warna
// console.log(kuning)
// let [,,iniDia] = warna;
// console.log(iniDia)

// SPREAD OPERATOR
let a = [1, 2, 3]
let b = [4, 5, 6]

let baru = [...a]
let gabung = [...a, ...b]
console.log(baru);
console.log(gabung);