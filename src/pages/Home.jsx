import { useEffect, useState } from "react"
import axios from "axios"
import User from "../components/User"
import { Link } from "react-router-dom"
import Nav from "../components/Nav"

function Home() {
    const [users, setUsers] = useState([])

    async function fetchData() {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        // <div>
        //     <h1>Home</h1>
        //     <div>
        //         {
        //             users.length > 0
        //                 ? <h2>{users[0] !== undefined && users[0].username}</h2>
        //                 : <h2>Loading...</h2>
        //         }
        //         <h2>{users.length > 0 && users[0].username}</h2>
        //         <h2>{users[0]?.username}</h2>
        //     </div>
        // </div>
        <div>
            <Nav />
            <div>
                {
                    users.map((user) => (
                        <Link key={user.id} to={`/users/${user.id}`}>
                            <User id={user.id} name={user.name} username={user.username} />
                        </Link>
                    ))
                }
            </div>

        </div>

    )
}

export default Home