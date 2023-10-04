import Link from "next/link"
import "./navbar.css"
export default function Navbar() {
    return (
        <nav className="navbar">
            <h1>My Personal Page</h1>
<ul>
    <li>
        <Link href="/">Inicio</Link>
    </li>
    <li>
        <Link href="/contact">Contact</Link>
    </li>
    <li>
        <Link href="/portfolio">Portfolio</Link>
    </li>
    <li>
        <Link href="/projects">Projects</Link>
    </li>
</ul>
    </nav>)
}
