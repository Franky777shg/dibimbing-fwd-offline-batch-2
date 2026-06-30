let user = {
    nama: "Frengky",
    usia: 17,
    single: true,
    hobi: ["baca buku", "catur"]
}

// // mengakses
// console.log(user.usia)
// console.log(user["usia"])

// // menambah
// user.pekerjaan = "Mentor"
// console.log(user)

// // mengubah
// user.usia = 18
// console.log(user)

// // menghapus
// delete user.single
// console.log(user)

// DESTRUCTURING
// let { nama, usia, single } = user
// console.log(nama, usia)
// console.log(single)

// SPREAD
// let baru = { a: 1, b: 2 }
// let baru2 = { c: 3, d: 4 }
// let gabungan = { ...baru, ...baru2 }
// console.log(gabungan);

// let menambah = { ...user, pekerjaan: "Mentor" }
// console.log(menambah);

// let mengubah = { ...user, nama: "Nathan" }
// console.log(mengubah);

// KEYS, VALUES, ENTRIES
// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

// NESTED OBJECT
// let nestedObj = {
//     name: "Kevin",
//     age: 25,
//     keterangan: {
//         hobbies: ["ngopi", "travelling"],
//         pekerjaan: "Software Engineer"
//     }
// }
// console.log(nestedObj.keterangan.pekerjaan)
// console.log(nestedObj.makanan?.pekerjaan) // optional chaining
// console.log(nestedObj.makanan.pekerjaan) // error

let users = [
    { id: 1, nama: "Kevin", usia: 25},
    { id: 2, nama: "Nathan", usia: 19},
    { id: 3, nama: "Frengky", usia: 20},
]
console.log(users[2].nama)
console.log(users[1].usia)