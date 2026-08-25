import { useState } from 'react'

export default function State() {
    const [user, setUser] = useState({
        username: "Budi",
        age: 25
    })
    const [fruits, setFruits] = useState([
        "Apel", "Mangga", "Jambu"
    ])

    const onChangeName = () => {
        setUser({ ...user, username: "Lala" })
    }

    const onChangeFruits = (fruit) => {
        let hasilYangBaru = [...fruits]

        hasilYangBaru[0] = fruit

        setFruits(hasilYangBaru) // ["Melon", "Mangga", Jambu]
    }

    const onChangeText = (e) => {
        console.log(e)
        alert(e.target.value)
    }

    return (
        <div>
            <h1>Nama: {user.username}</h1>
            <h1>Umur: {user.age}</h1>
            <button onClick={onChangeName}>Klik untuk mengubah username</button>

            <div>
                {fruits.map((item) => <h1 key={item}>{item}</h1>)}
            </div>
            <button onClick={() => onChangeFruits("Semangka")}>Klik untuk mengubah Apel menjadi Melon</button>

            <br />

            <input type="text" onChange={onChangeText} />
        </div>
    )
}
