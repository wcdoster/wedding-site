import React from 'react'
import { Link } from 'react-router-dom'
import '../style/navbar.css'

export default function NavBar(props) {
    return (
        <div id="navbar">
            <ul id="navigation">

                <li><Link to="/ourstory">Our Story</Link></li>
                <li><Link to="/details">Information</Link></li>
                <li><Link to="/registry">Registry</Link></li>
                <li><Link to="/rsvp">RSVP</Link></li>

                {/* <li onClick={() => props.setPage("OurStory")}>Our Story</li>
                <li onClick={() => props.setPage("Information")}>Information</li>
                <li onClick={() => props.setPage("Registry")}>Registry</li>
                <li onClick={() => props.setPage("RSVP")}>RSVP</li> */}
            </ul>
        </div>
    )
}