import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './Home';
import About from './About'
import Projects from './Projects'

import './Scrollbar.css';

export default class NavigationBar extends Component {
    render() {
        return (
            <Router>

                {/* Content */}
                <div>
                    <Navbar className="bg-light justify-content-center" >
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                    </Navbar>
                </div>

                {/* Routing */}
                <div className='scrollbar'>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/projects">
                            <Projects />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}