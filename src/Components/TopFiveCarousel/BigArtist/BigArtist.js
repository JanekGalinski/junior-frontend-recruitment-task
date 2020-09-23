import React, { useEffect } from 'react';
import { useState } from 'react';
import './BigArtist.css';
import {getArtistDetails} from '../../../requests'

function BigArtist({name}) {
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
          <h1>{name}</h1>
          <h1>{listeners}</h1>
          <h1>{tag}</h1>
          <h1>{tagOne}</h1>
          <h1>{tagTwo}</h1>
          <img src={photo}></img>
        </li>
      </ul>
    </>
  )
}

export default BigArtist;
