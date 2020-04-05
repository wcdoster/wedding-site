import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../style/navbar.css'
import OurStory from './OurStory'

export default class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ourstory: 'navbar-link',
            details: 'navbar-link oneword',
            registry: 'navbar-link oneword',
            rsvp: 'navbar-link oneword'
        }
        this.setPage = this.setPage.bind(this)
        this.setDefaultClass = this.setDefaultClass.bind(this)

    }

    setDefaultClass() {
        this.setState({
            ourstory: 'navbar-link',
            details: 'navbar-link oneword',
            registry: 'navbar-link oneword',
            rsvp: 'navbar-link oneword'
        })
    }

    setPage(page) {
        switch (page) {
            case 'ourstory':
                this.setDefaultClass()
                this.setState({ ourstory: 'navbar-link underline' })
                break
            case 'details':
                this.setDefaultClass()
                this.setState({ details: 'navbar-link oneword underline' })
                break
            case 'registry':
                this.setDefaultClass()
                this.setState({ registry: 'navbar-link oneword underline' })
                break
            case 'rsvp':
                this.setDefaultClass()
                this.setState({ rsvp: 'navbar-link oneword underline' })
                break
        }
    }

    render() {
        return (
            <div id="navbar">
                <ul id="navigation">

                    <li><Link
                        onClick={() => { this.setPage('ourstory') }}
                        // onTouchStart={(e)=>{e.target.style.fontSize = '1em'}}
                        // onMouseOver={(e) => {
                        //     if (e.type !== 'touchStart') {
                        //         e.target.style.fontSize = '1.5em'
                        //     }
                        // }}
                        // onMouseLeave={(e) => { e.target.style.fontSize = '1em' }}
                        className={this.state.ourstory} to="/ourstory">Our <br className="break"></br>Story</Link></li>
                    <li><Link
                        onClick={() => { this.setPage('details') }}
                        // onTouchStart={(e)=>{e.target.style.fontSize = '1em'}}
                        // onMouseOver={(e) => {
                        //     if (e.type !== 'touchStart') {
                        //         e.target.style.fontSize = '1.5em'
                        //     }
                        // }}
                        // onMouseLeave={(e) => { e.target.style.fontSize = '1em' }}
                        className={this.state.details} to="/details">Details</Link></li>
                    {/* <li><Link onClick={() => { this.setPage('registry') }}
                    onTouchStart={(e)=>{e.target.style.fontSize = '1em'}}
                        onMouseOver={(e) => { if(e.type !== 'touchStart'){
                            e.target.style.fontSize = '1.5em' }}}
                        onMouseLeave={(e) => { e.target.style.fontSize = '1em' }}
                        className={this.state.registry} to="/registry">Registry</Link></li>
                    <li><Link onClick={() => { this.setPage('rsvp') }}
                    onTouchStart={(e)=>{e.target.style.fontSize = '1em'}}
                        onMouseOver={(e) => { if(e.type !== 'touchStart'){
                            e.target.style.fontSize = '1.5em' }}}
                        onMouseLeave={(e) => { e.target.style.fontSize = '1em' }}
                        className={this.state.rsvp} to="/rsvp">RSVP</Link></li> */}

                    {/* <li onClick={() => props.setPage("OurStory")}>Our Story</li>
                    <li onClick={() => props.setPage("Information")}>Information</li>
                    <li onClick={() => props.setPage("Registry")}>Registry</li>
                    <li onClick={() => props.setPage("RSVP")}>RSVP</li> */}
                </ul>
            </div>
        )
    }
}