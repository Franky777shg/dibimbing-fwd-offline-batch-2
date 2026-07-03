class Mahasiswa {
    constructor(a, b) {
        this.nama = a
        this.jurusan = b
    }

    perkenalan() {
        return `Halo, saya ${this.nama}, dari jurusan ${this.jurusan}`
    }
}

// {
//     nama: "Kevin",
//     jurusan: "IT"
// }

const kevin = new Mahasiswa("Kevin", "IT")
console.log(kevin)
console.log(kevin.perkenalan())
const nathan = new Mahasiswa("Nathan", "Cyber")
console.log(nathan)