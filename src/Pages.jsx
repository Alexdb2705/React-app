import "./Pages.css"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Posts from "./pages/Posts.jsx"
import Users from "./pages/Users.jsx"

function Pages() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/users/:id" element={<Users />} />
            </Routes>
            <div>
            </div>
        </Router>
    )
}

export default Pages