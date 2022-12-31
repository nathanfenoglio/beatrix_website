import React from 'react';
import Cartwheel from "./Video/Cartwheel.gif";
import HairInWind from "./Video/hair_in_wind_etc.gif";

//import { Router, Route, Link } from 'react-router';
//import { Link } from 'react-router-dom';

//need to figure out how to add bea's IMG_20220122_112459.gif
//maybe make new link (without a tab in the navbar) to link to for each of these 
function Animation(){
    return(
        <div>
            <img src={Cartwheel} style={{marginTop: "200px", maxHeight: "800px"}} alt="loading..." />
            <br/>
            <br/>
            <img src={HairInWind} style={{marginTop: "200px", maxHeight: "800px"}} alt="loading..." />
        </div>
    );
}

export default Animation;