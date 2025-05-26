import "./Pages.css"
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Posts from "./pages/Posts.jsx"

function Pages() {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/posts">Posts</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/posts" element={<Posts />} />
            </Routes>
            <div>
            </div>
        </Router>
    )
}

export default Pages