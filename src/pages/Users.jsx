import { useParams } from "react-router-dom"
import { useEffect } from "react"
function Users() {
    const { username } = useParams()

    useEffect(() => {
        fetch(`youtube.com/@${username}`)
    }, [])
    return (
        <div>{useParams().username} page</div>
    )
}

export default Users