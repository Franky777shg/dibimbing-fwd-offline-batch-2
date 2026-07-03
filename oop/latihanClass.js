// {
//     angka1: 2,
//     angka2: 3,
//     tambah: 5,
//     kurang: -1
// }
class Matematika {
    // Tulis code
    constructor(a, b) {
        this.angka1 = a
        this.angka2 = b
        this.tambah = a + b,
        this.kurang = a - b
    }
}

let hasil = new Matematika(2, 3)
console.log(hasil)