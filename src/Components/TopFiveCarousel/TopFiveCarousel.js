import React from 'react';
import './TopFiveCarousel.css';
import BigArtist from './BigArtist/BigArtist';


class TopFiveCarousel extends React.Component {
  constructor(){
    super();

    this.state = {
      art: [],
      isLoaded: false,
    }
  }




  componentDidMount () {
    fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=b13851316d3a6ff1ac99cf76140016cc&format=json')
    .then(res => res.json())
    .then(json => { 
      this.setState({
        isLoaded: true,
        art: json.artists.artist,
      })
    })
  }
  

  render() {
    const { art } = this.state;
    console.log(art)
    return (
      <>
         <div>
                <ul>
                    <div className="titles">
                        <h3>NAME</h3>
                        <h3>STATUS</h3>
                    </div>
                    {art.slice(0, 5).map((artist) => (
                        <BigArtist name={artist.name}/>
                    ))}
                  
                </ul>
            </div>
      </>
    )
  }
}

export default TopFiveCarousel;
