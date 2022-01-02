import { useState } from "react";
import { Button } from 'reactstrap';

import '../App.css';

function Home () {
    const [text, setText] = useState({
        color: "white"
      });

    const updateColor = () => {
        setText(previousState => {
          return { ...previousState, color: randomColor() }
        });
    }

    function randomColor() {
        return '#' + ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6);
    }

    return (
        <>
            {/* Content */}
            <div className = 'intro'>
                <h1 id = "introText" style= {{color:text.color}}>Hello, I'm Farrukh.</h1>
                <h1 id = "introText" style= {{color:text.color}}>I'm a programmer.</h1>

                <Button color="primary" onClick = {updateColor}> Change text color </Button>
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

