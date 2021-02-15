import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import PhotoForm from './components/PhotoForm.js';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';

//TODO
//Add event listeners to nav buttons on clicks that identifies which item was clicked
//Take info of clicked Nav button and send to Flicker API for pics
// Populate Photo Container with pics from API


class App extends Component {
  state = {

  }

  
  /**
   * Function to fetch the Data from the Flickr API
   * @param {*} item The search term to populate the 
   * @returns Object of fetched photos if the exists or null value if failed
   */
  fetchPhotos(item){
    console.log("You've entered the function for fetching photos");
    

    return null;
  }

  render()
  {
    return (
      <div className="container">
        <PhotoForm />
        <Nav />
        <PhotoContainer />

      </div>
  );}
}

export default App;
