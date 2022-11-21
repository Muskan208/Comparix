import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav">
                <div className="left">
                    <Link to="/" >Home</Link>
                    <Link to="scrape" >Analytics</Link>
                    <Link to="about" >About Us</Link>
                </div>
                <div className="right">
                    <button>
                        xz
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar