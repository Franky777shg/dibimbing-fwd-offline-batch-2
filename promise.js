// Membuat Promise
const fetchUser = (id) => {
    return new Promise((resolve, reject) => {
        if (id > 0) {
            resolve({ id, nama: "budi"})
        } else {
            reject(new Error("ID tidak valid"))
        }
    })
}

// Menggunakan promise
fetchUser(2)
.then(user => {
    console.log("Masuk ke then kalau resolve")
    console.log(user.id, user.nama)
})
.catch(error => {
    console.log("Masuk ke catch kalau reject")
    console.log("Error " + error.message)
})
.finally(() => console.log("Ini finally yang akan selalu jalan terlepas dia resolve atau reject"))