//import React and React Router
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

//import CSS
import './css/index.css';

//App Components
import PhotoForm from './components/PhotoForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import NotFound from './components/NotFound';

//Api Key
import apiKey from './config';

//history
import { createBrowserHistory} from 'history';
var history = createBrowserHistory();
class App extends Component {
  
  //Load initial photos
  constructor() {
    super();
    this.state = {
      photos: [], //array of photo objects
      cats: [],
      waterfalls: [],
      computers: [],
      pizza: [],
      landing: [],
      loading: true
    }; //will be pics data we want to display

    /*
    you can perform the search for all three of those in the componentDidMount function and store them all in state so that when the app loads, that data is already there.  And then you're just passing that info to the gallery component in the Route tags as needed.  Hope that helps.  And keep up the great work.
    */
  } 
  
  //all data fetching takes place in componentDidMount lifecycle method
  //called immediately after component is loaded to the DOM
  componentDidMount() {
    this.fetchPhotos("cats", "cats");
    this.fetchPhotos("waterfalls", "waterfalls");
    this.fetchPhotos("computers", "computers");
    this.fetchPhotos("pizza", "pizza");
    this.fetchPhotos("Stranger Things", "landing");
  }

  
  /**
   * Function to fetch the Data from the Flickr API and stores it to state
   * @param {*} item The search term to populate the 
   * @returns Object of fetched photos if the exists or null value if failed
   */
  fetchPhotos = (item, stateValue) => {
    //console.log(item);
    //only fetch if there is a search item otherwise leave state
    if(item){
      fetch(` https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${item}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(data => {
      //console.log(data.photos.photo); - verfied fetching data worked
      //added fetched data to state
      if(stateValue){
        this.setState({
          [stateValue]: data.photos.photo,
          loading: false
        });
      }
      else{
        this.setState({
          photos: data.photos.photo,
          loading: false
        });
      }
      
    })
    .catch(error => console.log('error fetching data', error));
    }
    else{
      this.setState({
        loading: true
      })
   }
    
  }

  render()
  {
    // console.log(this.state.photos); //verify state properly set

    //instead just pass the state then modify PhotoContainer to read info from the path also
    // need to edit searchFrom to push search term to the url as /searchItem
    return (
      <BrowserRouter>
       <div className="container">
        <PhotoForm history={history} onSearch={this.fetchPhotos}/>
        <Nav />
        
        <Switch>
          
          <Route exact path="/"render={ () => (this.state.loading)
          ? <p>Loading...</p>
          :  <PhotoContainer data={this.state.landing} /> } />

          <Route exact path="/cats" render={ () => (this.state.loading)
          ? <p>Loading...</p>
          :  <PhotoContainer data={this.state.cats} /> } />

          <Route exact path="/waterfalls" render={ () => (this.state.loading)
          ? <p>Loading...</p>
          :  <PhotoContainer data={this.state.waterfalls} /> } />

          <Route exact path="/computers" render={ () => (this.state.loading)
          ? <p>Loading...</p>
          :  <PhotoContainer data={this.state.computers} /> } />

          <Route exact path="/pizza" render={ () => (this.state.loading)
          ? <p>Loading...</p>
          :  <PhotoContainer data={this.state.pizza} /> } />

          <Route path="/:searchItem" render={ () =>  <PhotoContainer data={this.state.photos} /> } />

          <Route component={NotFound} />
      </Switch>
      </div>
     
  </BrowserRouter>
     
  );}
}

export default App;
