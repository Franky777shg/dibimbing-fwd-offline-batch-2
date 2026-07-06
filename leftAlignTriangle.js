function buatPiramida(n) {
    //Tulis Implementasi Solusi Anda dibawah ini
    let hasil = "" // * \n
    for (let i = 1; i <= n; i++) { // i = 2
        let row = "" // "*"
        for (let j = 1; j <= i; j++) { // j = 1
            row += "*"
        }
        hasil += row + "\n"
    }

    return hasil;//Sesuaikan dengan solusi Anda
}

console.log(buatPiramida(3))