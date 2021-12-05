import React, { Component, useState } from 'react';
import ImageGridDigitalArt from './ImageGridDigitalArt';
import Modal from './Modal';

//export default class digital_art extends Component{
function DigitalArt(){
//    render(){
        const [selectedImg, setSelectedImg] = useState(null);

        return(
            <div className="App">
            <ImageGridDigitalArt setSelectedImg={setSelectedImg}/>
            {selectedImg && (
              <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>
            )}
  
            <div className="title">
                <h1>digital_art</h1>
            </div>
            </div>
        )
    //}
}

export default DigitalArt;