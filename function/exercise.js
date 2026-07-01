let input = [
  { name: "Budi", role: "admin", age: 30 },
  { name: "Siti", role: "user", age: 20 },
  { name: "Andi", role: "admin", age: 25 },
  { name: "Rina", role: "user", age: 35 }
]

const analyzeUsers = (users) => {
    let result = {}

    // total user
    result.totalUsers = users.length

    // total admin
    let admins = users.filter(item => item.role === 'admin')
    result.admins = admins.length
    
    // total users
    let userList = users.filter(item => item.role === 'user')
    result.users = userList.length

    // average age
    let totalAge = users.reduce((acc, item) => acc + item.age, 0)
    result.averageAge = totalAge / users.length

    return result
}

let hasil = analyzeUsers(input)
console.log(hasil)
// {
//   totalUsers: 4,
//   admins: 2,
//   users: 2,
//   averageAge: 27.5
// }
