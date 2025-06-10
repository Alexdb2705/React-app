import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
function Users() {
    const { id } = useParams()
    const [user, setUser] = useState({})

    async function fetchUserData() {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        setUser(data)
    }

    useEffect(() => {
        fetchUserData();
    }, [])

    return (
        <div>
            <h1>{user.id || "Loading"}</h1>
            <h1>{user.name}</h1>
            <h1>{user.username}</h1>
        </div>
    )
}

export default Users