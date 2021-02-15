//import React and React Router
import React, { Component } from 'react';

//import CSS
import './css/index.css';

//App Components
import PhotoForm from './components/PhotoForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';

//Api Key
import apiKey from './config';


class App extends Component {
  //Photos
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
