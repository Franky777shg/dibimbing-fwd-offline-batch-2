// Contoh tanpa async await
// function loadData() {
//     // fetchUser adalah asynchronus
//     const user = fetchUser() // { id: 1, name: "budi" }
//     // fetchOrder adalah asynchronus
//     const order = fetchOrder(user.id)
//     return order
// }

// Contoh dengan async await
async function loadData() {
    try {
        // fetchUser adalah asynchronus
        const user = await fetchUser() // { id: 1, name: "budi" }
        // fetchOrder adalah asynchronus
        const order = await fetchOrder(user.id)
        return order
    } catch (err) {
        console.log(err)
    }
}