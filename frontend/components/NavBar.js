import Image from "next/image"
import Link from "next/link"

//Assets
import logo from "../public/travel-logo-svg-vector.svg"

const NavBar = () => {
    return (
        <nav className="nav-container">
            <div className="nav-item-container">
                <Link href="/">
                    <Image
                        src={logo}
                        alt="Travel Blog Logo"
                        width={140}
                        height={140}
                    />
                </Link>
            </div>
            <div className="nav-item-container">
                <p>XXXX</p>
            </div>
        </nav>
    )
}

export default NavBar