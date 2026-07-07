const fetchUser = (id, callback) => {
    setTimeout(() => {
        const user = {id: id, name: "Budi"}
        callback(user)
    }, 2000);
}

fetchUser(2, (user) => console.log(`User ditemukan: ${user.name}`))