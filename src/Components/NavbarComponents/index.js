import React from 'react'
import { NavLink } from 'react-router-dom'
import '../NavbarComponents/style.scss'

export default function NavbarComponents() {
    return (
        <>
            <div className='navbar-container'>
                <div className='navbar-logo'>
                    <b>
                        <NavLink to="/">Start Bootstrap</NavLink>
                    </b>
                </div>
                <div className='navbar-menu'>
                    <ul>
                        <li>
                            <b><NavLink to="/About">About</NavLink ></b>
                        </li>
                        <li>
                            <b><NavLink to="/Services">Services</NavLink ></b>
                        </li>
                        <li>
                            <b><NavLink to="/Portfolio">Portfolio</NavLink ></b>
                        </li>
                        <li>
                            <b><NavLink to="/Contact">Contact</NavLink></b>
                        </li>
                    </ul>
                </div>

            </div>
        </>
    )
}
