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
  
  //Load initial photos
  constructor() {
    super();
    this.state = {
      photos: [], //array of photo objects
      loading: true
    }; //will be pics data we want to display
  } 
  
  //all data fetching takes place in componentDidMount lifecycle method
  //called immediately after component is loaded to the DOM
  componentDidMount() {
    //load initial data to page with cats search
    this.fetchPhotos('cats');
  }
  
  /**
   * Function to fetch the Data from the Flickr API
   * @param {*} item The search term to populate the 
   * @returns Object of fetched photos if the exists or null value if failed
   */
  fetchPhotos = (item) => {
    console.log(item);
    //only fetch if there is a search item otherwise leave state
    if(item){
      fetch(` https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${item}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(data => {
      //console.log(data.photos.photo); - verfied fetching data worked
      //added fetched data to state
      this.setState({
        photos: data.photos.photo,
        loading: false
      });
    })
    .catch(error => console.log('error fetching data', error));
    }
    else{
      this.setState({
        loading: false
      })
   }
    
  }

  render()
  {
    // console.log(this.state.photos); //verify state properly set
    return (
      <div className="container">
        <PhotoForm onSearch={this.fetchPhotos}/>
        <Nav />
        {
          (this.state.loading)
          ? <p>Loading...</p>
          :  <PhotoContainer data={this.state.photos}/>
        }
      </div>
  );}
}

export default App;
