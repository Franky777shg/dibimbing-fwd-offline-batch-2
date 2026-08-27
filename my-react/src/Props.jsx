import { useState } from 'react'

function Greeting({ name, role, toChangeName }) {
    return (
        <div>
            <h2>Halo, {name}</h2>
            <p>Role: {role}</p>

            <button onClick={toChangeName} className='cursor-pointer'>Click to change name</button>
        </div>
    )
}

function Props() {
    const [user, setUser] = useState({
        name: "Budi",
        role: "Frontend Dev"
    })

    const toChangeName = () => {
        setUser({ ...user, name: "Lala" })
    }

    return (
        <div>
            <Greeting 
                name={user.name} 
                role={user.role} 
                toChangeName={toChangeName} 
            />
        </div>
    )
}

export default Props