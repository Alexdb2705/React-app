import { Link } from "react-router-dom"
import "../Nav.css"

function Nav() {
        return (
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/users/MrBeast">Mr Beast</Link>
                <Link to="/users/ibai">Ibai</Link>
            </nav>
        )
    }

export default Nav