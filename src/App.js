//import React, { Component, useState } from 'react';
import React, {useState} from 'react';

import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import Title from './components/Title';
import UploadForm from './components/UploadForm';

import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Digital_Art from "./components/DigitalArt";
import Traditional_Art from "./components/TraditionalArt";
import Bio from "./components/Bio";
import Home from "./components/Home";
import Animation from "./components/Animation";
import Stories from "./components/Stories";

//class App extends Component{
function App(){
	//render(){
		  return (
			<Router>
				<div className="App">
					<Navbar />
          <br/>
          <Route path="/" exact component={Home} />
          <Route path="/Digital_Art" exact component={Digital_Art} />
          <Route path="/Traditional_Art" exact component={Traditional_Art} />
          <Route path="/Bio" exact component={Bio} />
          <Route path="/Animation" exact component={Animation} />
          <Route path="/Stories" exact component={Stories} />
        </div>
			</Router>
		  );
	//}
}

export default App;
