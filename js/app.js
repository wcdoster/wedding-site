import React from 'react';

import { HashRouter, Switch, Route, Link } from 'react-router-dom'

//Components
import NavBar from './components/NavBar'
import Details from './components/Details'
import OurStory from './components/OurStory'
import Registry from './components/Registry'
import RSVP from './components/RSVP'
import MainPage from './components/MainPage'

//style
import './style/app.css'


export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.setPage = this.setPage.bind(this)

        this.state = {
            page: "OurStory",
        }

    }

    setPage(page) {
        this.setState({ page: page })
    }

    renderPage() {
        switch (this.state.page) {
            case "OurStory":
                return <OurStory />
            case "Information":
                return <Details />
            case "Registry":
                return <Registry />
            case "RSVP":
                return <RSVP />
            default:
                return <OurStory />
        }
    }

    render() {
        return (
            <div className="App">
                <HashRouter>
                    <h1 id="title"><Link id='root-link' to='/'>Meg and Cole</Link></h1>
                    <div id="router">
                        <NavBar />
                        <div id="page">
                            <Switch>
                                <Route path="/ourstory">
                                    <OurStory />
                                </Route>
                                <Route path="/details">
                                    <Details />
                                </Route>
                                <Route path="/registry">
                                    <Registry />
                                </Route>
                                <Route path="/rsvp">
                                    <RSVP />
                                </Route>
                                <Route path="/">
                                    <MainPage />
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </HashRouter>
            </div>
        );
    }
}