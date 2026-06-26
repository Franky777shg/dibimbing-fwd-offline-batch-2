// FOR LOOP
// 1 2 3 4 5
// for (let i = 1; i <= 5; i++) {
//     console.log(i)
// }

// 5 4 3 2 1
// for (let i = 5; i >= 1; i--) {
//     console.log(i)
// }

// WHILE LOOP
// let hitungan = 5

// while (hitungan > 3) {
//     console.log(`Masih looping nih, karena hitungan nya ${hitungan}`)
//     hitungan--
// }

// let i = 1
// while (i <= 5) {
//     console.log(i)
//     i++
// }

// BREAK
// for (let i = 1; i <= 5; i++) {
//     console.log(i)
//     if (i === 3) break
// }

// CONTINUE
// for (let i = 1; i <= 5; i++) {
//     console.log(i)
//     if (i === 3) continue
// }

// Tampilkan angka ganjil
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) continue
    console.log(i)
}