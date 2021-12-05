import React, { Component, useState } from 'react';
import ImageGridStories from './ImageGridStories';
import Modal from './Modal';

//export default class digital_art extends Component{
function Stories(){
//    render(){
        const [selectedImg, setSelectedImg] = useState(null);

        return(
            <div className="App">
                <h1 style={{paddingTop: "200px", fontWeight: "bold"}}>Rosebuds:TG</h1>
                <p>Notes on a comic in progress...</p>
                <ImageGridStories setSelectedImg={setSelectedImg}/>
                {selectedImg && (
                <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>
                )}
    
                <div className="title">
                    <h1>stories</h1>
                </div>
            </div>
        )
    //}
}

export default Stories;