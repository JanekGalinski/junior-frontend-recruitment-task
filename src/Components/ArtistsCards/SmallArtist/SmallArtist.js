import React, { useEffect } from 'react';
import { useState } from 'react';
import './SmallArtist.css';
import {getArtistDetails} from '../../../requests'
import placeholder from '../../../Assets/img/placeholder.svg'

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

function SmallArtist({name, inc}) {
  const [tag, setTag] = useState([]);
  const [tagOne, setTagOne] = useState([]);
  const [listeners, setListeners] = useState([]);

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
      setListeners(res.data.artist.stats.listeners)
    })
  }

  useEffect(() => {
    getAndRenderArtistDetails()
  })

  let placeholderSrc = placeholder
  
  return (
    <div className="card">
      <div className="card-photo">
        <img className="card-photo-img" src={placeholderSrc} alt="placeholder"></img>
      </div>
      <div className="card-text">
          <p className="card-text-title">{inc}. {name}</p>
          <p className="card-text-tag">{tag}, {tagOne}</p>
          <p className="card-text-listeners">Listeners: {listeners}</p>
          <div className="stars">
            <div className={classes.root}>
              <StyledRating name="size-small" defaultValue={3} size="small" />
            </div>
          </div>
      </div>
    </div>
  )
}

export default SmallArtist;
