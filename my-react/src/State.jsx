import { useState } from 'react'
import "./State.css"

export default function State() {
    const [user, setUser] = useState({
        username: "Budi",
        age: 25
    })

    // Tidak akan memicu rerender ketika berubah
    // let user2 = {
    //     username: "Andi",
    //     age: 18
    // }
    const [fruits, setFruits] = useState([
        "Apel", "Mangga", "Jambu"
    ])

    const onChangeName = () => {
        setUser({ ...user, username: "Lala" })

        // Contoh mengubah username memakai variabel biasa
        // user2.username = "Lala"
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
        <div className='bg-teal-700'>
            <h1 style={{ color: user.username === "Budi" ? "red" : "black" }}>Nama: {user.username}</h1>
            {/* <h1>Nama: {user.username}</h1> */}
            <h1>Umur: {user.age}</h1>
            <button onClick={onChangeName} className='cursor-pointer bg-white text-black'>Klik untuk mengubah username</button>

            <div>
                {fruits.map((item) => <h1 key={item}>{item}</h1>)}
            </div>
            <button onClick={() => onChangeFruits("Semangka")}>Klik untuk mengubah Apel menjadi Melon</button>

            <br />

            <input type="text" onChange={onChangeText} />
        </div>
    )
}
