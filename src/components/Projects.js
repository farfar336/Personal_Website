import React, { Component } from 'react'

import './Footer.css';

import ShiftScheduleSystem from '../Videos/ShiftSchedulingSystem.mp4';
import ActivityLogger from '../Videos/ActivityLogger.mp4';
import KidsChatApplication from '../Videos/KidsChatApplication.mp4';

export default class Projects extends Component {
    render() {
        return (
            <div>
                <h1>Projects</h1>
                <h3>Shift Scheduling System</h3>
                <video src={ShiftScheduleSystem} width="900" height="500" controls="controls" />
                <ul class="text-start">
                    <li>
                    Used Agile practices in a team of 5 to create a job shift scheduling website, which won 2nd place at the U of C capstone fair
                    </li>
                    <li>
                    Developed & tested frontend UI such as login, user, admin, & calendar pages
                    </li>
                    <li>
                    Held monthly meetings with the sponsor to show progress & ensure it meets their expectations
                    </li>
                    <li>
                    Used: JavaScript, HTML, CSS, React, Node.js, Cypress, VS code, MySQL, Github, Jira, Trello 
                    </li>
                </ul>

                <h3>Activity Logger</h3>
                <video src={ActivityLogger} width="900" height="500" controls="controls" />
                <ul class="text-start">
                    <li>
                    Created website to keep track of activity description, duration, & date for each user
                    </li>
                    <li>
                    Developed frontend components such as buttons, text fields, & navigation bar
                    </li>
                    <li>
                    Developed backend & used REST API to manipulate database
                    </li>
                    <li>
                    Used: JavaScript, HTML, React, Node.js, VS code, MongoDB, Insomnia, Github
                    </li>
                </ul>

                <h3>Kids Chat Application</h3>
                <video src={KidsChatApplication} width="900" height="500" controls="controls" />
                <ul class="text-start">
                    <li>
                    Acted as project manager amongst a group of 6 to create/develop a chat application for kids
                    </li>
                    <li>
                    Organized & assigned frontend & backend tasks to group members based on their preferences
                    </li>
                    <li>
                    Developed frontend parts such as login, registration, lobby, & chat pages
                    </li>
                    <li>
                    Used: JavaScript, HTML, jQuery, CSS, MongoDB, Github, Trello
                    </li>
                </ul>

                <div className='footer'>
                    <a href="https://github.com/farfar336/"> <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt='GitHub Logo' height={30} /></a>
                    <a href="https://www.linkedin.com/in/farrukhnaghiyev3/"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt='LinkedIn Logo' height={30} /></a>
                    <p>Email: farrukh.naghiyev3@gmail.com</p>
                </div>
            </div>


        )
    }
}