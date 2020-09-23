import React, { useEffect } from 'react';
import { useState } from 'react';
import './SmallArtist.css';
import {getArtistDetails} from '../../../requests'

function SmallArtist({name}) {
  const [tag, setTag] = useState([]);
  const [tagOne, setTagOne] = useState([]);
  const [tagTwo, setTagTwo] = useState([]);
  const [listeners, setListeners] = useState([]);
  const [photo, setPhoto] = useState([]);

  function getAndRenderArtistDetails () {
    getArtistDetails(name)
    .then(res => { 
      setTag(res.data.artist.tags.tag[0].name)
      setTagOne(res.data.artist.tags.tag[1].name)
      setTagTwo(res.data.artist.tags.tag[2].name)
      setListeners(res.data.artist.stats.listeners)
      setPhoto(res.data.artist.image[5]["#text"])
    })
  }

  useEffect(() => {
    getAndRenderArtistDetails()
  })
  
  return (
    <>
      <ul>
        <li>
          <h3>{name}</h3>
          <h3>{listeners}</h3>
          <h3>{tag}</h3>
          <h3>{tagOne}</h3>
          <h3>{tagTwo}</h3>
          <img src={photo}></img>
        </li>
      </ul>
    </>
  )
}

export default SmallArtist;
