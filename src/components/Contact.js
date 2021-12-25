import React, { Component } from 'react'   

import GitHubLogo from '../Images/GitHubLogo.png';
import LinkedInLogo from '../Images/LinkedInLogo.png';
export default class Contact extends Component {
    render() {
        return (
            <div>
                <h1>Contact</h1>
                <a href="https://github.com/farfar336/"><img src={GitHubLogo} alt="GitHubLogo" height={30} /></a>
                <a href="https://www.linkedin.com/in/farrukhnaghiyev3/"><img src={LinkedInLogo} alt="LinkedInLogo" height={30} /></a>
                <p>Email: farrukh.naghiyev3@gmail.com</p>
            </div>
        )
    }
}