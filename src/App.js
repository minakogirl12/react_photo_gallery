import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';

//TODO
//Add event listeners to nav buttons on clicks that identifies which item was clicked
//Take info of clicked Nav button and send to Flicker API for pics
// Populate Photo Container with pics from API


class App extends Component {
  
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted ' + this.searchItem.value);
    //send data to function for fetching data
    this.fetchPhotos(this.searchItem.value);
    //send return data to the PhotoContainer component
  }
  
  /**
   * Function to fetch the Data from the Flickr API
   * @param {*} item The search term to populate the 
   */
  fetchPhotos(item){
    console.log("You've entered the function for fetching photos")

  }

  render()
  {
    return (
      <div className="container">
        <form class="search-form" onSubmit={this.handleSubmit}>
          <input type="search" name="search" placeholder="Search" required ref={(input) => {this.searchItem = input}}/>
          <button type="submit" class="search-button">
            <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
          </button>
        </form>
        <Nav />
        <PhotoContainer />

      </div>
  );}
}

export default App;
