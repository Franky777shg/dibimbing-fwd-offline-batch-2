let nilaiSiswa = [60, 100, 50, 85, 95, 70, 82, 65]
// Cari:
// Total semua nilai
// Rata rata nilai
// Nilai tertinggi
// Nilai terendah

// Total semua nilai
let total = 0 // 460

for (let i = 0; i < nilaiSiswa.length; i++) { // i = 6
    total += nilaiSiswa[i]
}

// Rata rata nilai
let rataRata = total / nilaiSiswa.length

console.log(`Ini total nilai siswa ${total}`)
console.log(`Ini rata rata nilai siswa ${rataRata}`)

// Nilai tertinggi dan terendah
let sorted = nilaiSiswa.sort((a, b) => a - b)
// console.log(sorted)
console.log(`Ini nilai tertinggi ${nilaiSiswa[nilaiSiswa.length - 1]}`)
console.log(`Ini nilai terendah ${nilaiSiswa[0]}`)