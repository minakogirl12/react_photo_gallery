import React from 'react';

function Photo (data) {

    //https://live.staticflickr.com/{photo.server}/{photo.id}_{photo.secret}_{size-suffix}.jpg
    let photo = data.data;
    let url = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
    // console.log(photo);
    return(
        <li>
            <img src={url} alt="" />
        </li>
    )
}

export default Photo;