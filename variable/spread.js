// const user = {
//     nama: "lala",
//     umur: 5
// }

// // menyalin
// const user1 = { ...user }
// console.log(user1);

// // menyalin dan menambah
// const user2 = {...user, hobi: "bola"}
// console.log(user2);

// // menyalin dan mengubah
// const user3 = {...user, umur: 10}
// console.log(user3);

// // menggabung
// const identitas = {
//     tinggi: 170,
//     berat: 60
// }

// const budi = {...user, ...identitas}
// console.log(budi)

// SPREAD PARAMETER
const nilai = [3, 6, 2, 8, 5]
console.log(Math.max(...nilai))
console.log(Math.min(...nilai))