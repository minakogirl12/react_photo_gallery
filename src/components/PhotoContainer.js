import React from 'react';
import NoResults from './NoResults';
import Photo from "./Photo";

//Enable Not Found if no content sent from parent
//If content sent from parent use it to populate the container
//get pics as a array or object then iterate through them
function PhotoContainer (props) {

  //console.log(props.data);
  const results = props.data; //all data return from call to Flickr API
  let photos;
  if(results.length > 0){
    photos = results.map(photo => <Photo data={photo} key={photo.id}/>);
  }
  else{
    photos = <NoResults />; //No results page
  }

    return(
      <div class="photo-container">
        <h2>Results</h2>
        <ul>
          {photos}
        </ul>
    </div>
    );
}

export default PhotoContainer;