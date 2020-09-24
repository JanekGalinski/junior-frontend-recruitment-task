import React, { useEffect } from 'react';
import { useState } from 'react';
import './BigArtist.css';
import {getArtistDetails} from '../../../requests'

import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
}));

function BigArtist({name, inc, itemClass}) {
  const [tag, setTag] = useState([]);
  const [tagOne, setTagOne] = useState([]);
  const [tagTwo, setTagTwo] = useState([]);
  const [listeners, setListeners] = useState([]);
  const [photo, setPhoto] = useState([]);

  const classes = useStyles();
  const StyledRating = withStyles({
    iconFilled: {
      color: '#3C64B1',
    },
    iconHover: {
      color: '#3C64B1',
    },
  })(Rating);

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
      <div class={itemClass}>
        <div className="inside-slide">
          <div className="slide-photo-box">
            <p className="slide-photo-box-number">{inc}</p>
          </div>
          <div className="slide-photo">
            <img className="slide-photo-img" src={photo}></img>
          </div>
          <div className="slide-text">
              <h1 className="slide-text-title">{name}</h1>
              <p className="slide-text-tags">{tag}, {tagOne}, {tagTwo}</p>
              <p className="slide-text-listeners">Listeners: {listeners}</p>
              <div className="stars">
                <div className={classes.root}>
                  <StyledRating name="size-small" defaultValue={3} size="large" />
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default BigArtist;
