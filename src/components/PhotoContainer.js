import React from 'react';
import NoResults from './NoResults';
import Photo from "./Photo";

//Enable Not Found if no content sent from parent
//If content sent from parent use it to populate the container
//get pics as a array or object then iterate through them
function PhotoContainer () {
    return(
      <div class="photo-container">
        <h2>Results</h2>
        <ul>
          <Photo />
          { /*<!-- Not Found -->*/}
          <NoResults />
        </ul>
    </div>
    );
}

export default PhotoContainer;