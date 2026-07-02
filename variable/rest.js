// function perkenalan(nama, umur, ...hobi) {
//     console.log(nama)
//     console.log(umur)
//     console.log(hobi)
// }

// perkenalan("Kevin", 19, "bola", "makan", "tidur", "mimpi")

// REST OBJECT
const obj = {
    nama: "Budi",
    umur: 34,
    pekerjaan: "Vlogger",
    kota: "Malang"
}

const { nama, umur, ...infoLain } = obj
console.log(umur)
console.log(nama)
console.log(infoLain)