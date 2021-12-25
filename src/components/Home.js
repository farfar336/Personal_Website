import React, { Component } from 'react'

import './Footer.css';

export default class Home extends Component {
    render() {
        return (
            <div>

                {/* Content */}
                <h1>Hello, I'm Farrukh.</h1>
                <h1>I'm a programmer</h1>

                {/* Footer */}
                <div className='footer'>
                    <a href="https://github.com/farfar336/"> <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt='GitHub Logo' height={30} /></a>
                    <a href="https://www.linkedin.com/in/farrukhnaghiyev3/"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt='LinkedIn Logo' height={30} /></a>
                    <p>Email: farrukh.naghiyev3@gmail.com</p>
                </div>

            </div>

        )
    }
}