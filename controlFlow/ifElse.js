// IF ELSE
// let lapar = false

// if (lapar) {
//     console.log("Waktunya makan bos!")
// } else {
//     console.log("Nanti aja!")
// }

// // SWITCH CASE
// switch (lapar) {
//     case true:
//         console.log("Waktunya makan bos!")
//         break
//     default:
//         console.log("Nanti aja!")
// }

// let user = 'Kevin'

// if (user === 'Nathan') {
//     console.log("Silahkan masuk!")
// } else {
//     console.log("Tidak boleh masuk!")
// }

// let kkm = 75
// let nilaiSiswa = 70

// if (nilaiSiswa >= kkm) {
//     console.log("Lulus")
// } else {
//     console.log("Tidak Lulus")
// }

// Buat sebuah code untuk menampilkan user akan dapat diskon 
// kalau dia quantity bareng nya lebih besar dari 5
// let quantity = 4
// let discountLimit = 5

// if (quantity >= discountLimit) {
//     console.log("dapet diskon")
// } else {
//     console.log("tidak dapet diskon")
// }

// let price = 5000
// let qty = 2 // bisa berubah ubah
// let minimumPriceToGetDiscount = 20000
// let totalPembelian = price * qty // kalau mau menghitung total pembeliannya di luar kondisi if

// buatlah sebuah code, yang ketika TOTAL PEMBELIAN NYA itu
// LEBIH BESAR DARI 20000, maka code akan menampilkan "Dapat diskon"
// kalau tidak, maka "Tidak dapat diskon"

// TOTAL PEMBELIAN >= dari minimum harga diskon (yaitu ada di variabel minimumPriceToGetDiscount)
// price * qty >= minimumPriceToGetDiscount

// if (price * qty >= minimumPriceToGetDiscount) {
//     console.log("Dapet diskon")
// } else {
//     console.log("Tidak dapat diskon")
// }

// A: 90 - 100
// B: 80 - 89
// C: 70 - 79
// D: 60 - 69
// E: dibawah 60
let nilaiSiswa = 90

if (nilaiSiswa >= 90) {
    console.log("A")
} else if (nilaiSiswa >= 80) {
    console.log("B")
} else if (nilaiSiswa >= 70) {
    console.log("C")
} else if (nilaiSiswa >= 60) {
    console.log("D")
} else {
    console.log("E")
}

switch (true) { // boolean
    case nilaiSiswa >= 90: // boolean
        console.log("A")
        break
    case nilaiSiswa >= 80:
        console.log("B")
        break
    case nilaiSiswa >= 70:
        console.log("C")
        break
    case nilaiSiswa >= 60:
        console.log("D")
        break
    default:
        console.log("E")
}
