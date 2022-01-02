import { useState, useEffect } from "react";

import '../App.css';

function Home () {
    const [textColor, setTextColor] = useState("white");
    
    // Updates text color ever 1.5s
    useEffect(() => {
        setTimeout(() => {
            setTextColor((textColor) => randomColor());
        }, 1500);
      });


    // Returns a random color
    function randomColor() {
        return '#' + ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6);
        // return 'green';
    }

    return (
        <>
            {/* Content */}
            <div className = 'intro'>
                <h1 style= {{color:textColor}}>Hello, I'm Farrukh.</h1>
                <h1 style= {{color:textColor}}>I'm a programmer.</h1>
            </div>

            {/* Footer */}
            <div className = 'footer-short-page'>
                <a href = "https://github.com/farfar336/"> <img src = "https://cdn-icons-png.flaticon.com/512/25/25231.png" alt = 'GitHub Logo' height = {30} /></a>
                <a href = "https://www.linkedin.com/in/farrukhnaghiyev3/"><img src = "https://cdn-icons-png.flaticon.com/512/174/174857.png" 
                alt = 'LinkedIn Logo' height = {30} /></a>
                <p>Email: farrukh.naghiyev3@gmail.com</p>
            </div>
        </>
    )
}

export default Home;

