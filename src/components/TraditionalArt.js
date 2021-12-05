import React, { Component, useState } from 'react';
import ImageGridDigitalArt from './ImageGridTraditionalArt';
import Modal from './Modal';

function TraditionalArt(){
//    render(){
        const [selectedImg, setSelectedImg] = useState(null);

        return(
            <div className="App">
                <ImageGridDigitalArt setSelectedImg={setSelectedImg}/>
                {selectedImg && (
                  <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>
                )}
  
                <div className="title">
                    <h1>traditional_art</h1>
                </div>
            </div>
        )
    //}
}

export default TraditionalArt;