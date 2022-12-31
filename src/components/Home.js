import React from 'react';
import BeaYourself from "./Pics/HomePic.jpg";

function Home(){
    const some_style = {
        height:"400px", 
        width:"400px",
    }
    return(
        <div>
        <h1 className="Title" style={{marginTop: "200px"}}>Check Out My Stuff</h1>
        <img style={some_style} src={BeaYourself}></img>
        </div>
    );
}

export default Home;