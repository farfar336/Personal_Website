import React, { Component } from 'react'

import TrackAndField from '../Images/TrackAndField.jpg';

export default class About extends Component {
    render() {
        return (
            <div>
                <h1> About</h1>  
                <div class="text-start">
                    <h3>Education</h3>
                    <ul >
                        <li>
                        Bachelor of Science in Software Engineering from University of Calgary - Schulich School of Engineering - 2021
                        </li>
                        <li>
                        GPA: 3.43
                        </li>
                        <li>
                        Relevant Courses: Object Oriented Design, Data Structures & Algorithms, Software Architecture, Databases, Computer Networks, Distributed Systems, Large Scale Analytics Systems
                        </li>
                    </ul>

                    <h3>Technical Skills</h3>
                    <ul>
                        <li>
                        Languages: JavaScript (+jQuery), HTML, CSS, SQL
                        </li>
                        <li>
                        Technologies: VS Code, React, Node.js, Cypress, MongoDB, MySQL, Insomnia, Postman, GitHub, Jira
                        </li>
                    </ul>

                    <h3>U of C Varsity Track and Field 2016-2020</h3>
                    <img src={TrackAndField} alt="TrackAndField" height={500} />
                </div>

                <div className='footer'>
                    <h1>Contact</h1>
                    <a href="https://github.com/farfar336/"> <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt='GitHub Logo' height={30} /></a>
                    <a href="https://www.linkedin.com/in/farrukhnaghiyev3/"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt='LinkedIn Logo' height={30} /></a>
                    <p>Email: farrukh.naghiyev3@gmail.com</p>
                </div>
            </div>
        )
    }
}