import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { navLinks } from "../data/haraData";
import hara_logo from "../assets/images/hara_logo.png"

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <header className="topbar">
                <div className="wrap nav-row">
                    {/* Logo */}
                    <Link 
                        to="/" 
                        className="logo" 
                        arial-label="Hara, beranda"
                        onClick={()=>setIsOpen(false)}
                        style={{display:"flex", alignItems:"center"}}
                    >
                        <img 
                            src={hara_logo} 
                            alt="HARA Creative Agency" 
                            style={{height:"120px", width:"auto", objectFit:"contain"}}
                        />
                    </Link>

                    {/* Nav */}
                    <nav
                        className={`nav ${isOpen ? 'open' : ''}`}
                        id="nav"
                        aria-label="Navigasi utama"
                    >
                        {navLinks.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({isActive}) => (isActive ? 'active' : '')}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>
                    {/* CTA button */}
                    <Link
                        to="/brief"
                        className="btn small"
                        onClick={() => setIsOpen(false)}
                    >
                        Mulai Project 
                    </Link>

                    {/* Hamburger menu */}
                    <button
                        className="menu-btn"
                        id="menu"
                        aria-label="Buka menu"
                        aria-expanded={isOpen}
                        aria-controls="nav"
                        onClick={() => setIsOpen((prev) => !prev)}
                    >
                        {isOpen ? 'Tutup ✕' : 'Menu ☰'}
                    </button>
                </div>
        </header>
    )
}