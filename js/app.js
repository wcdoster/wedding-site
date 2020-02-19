import React from 'react';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

//Components
import NavBar from './components/NavBar'
import Details from './components/Details'
import OurStory from './components/OurStory'
import Registry from './components/Registry'
import RSVP from './components/RSVP'


export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.setPage = this.setPage.bind(this)

        this.state = {
            page: "OurStory"
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
                Meg and Cole
                  <BrowserRouter>
                    <NavBar />
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
                            <div>
                                <h2>Main Page</h2>
                            </div>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}