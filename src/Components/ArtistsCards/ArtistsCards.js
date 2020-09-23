import React from 'react';
import './ArtistsCards.css';
import SmallArtist from './SmallArtist/SmallArtist';

class ArtistsCards extends React.Component {
  constructor(props){
    super();
    this.state = {
    }
  }

  render() {
    return (
      <main>
            <section>
                <ul>
                    <div className="titles">
                        <h3>More</h3>
                        <h3>Artists</h3>
                    </div>
                    {this.props.art.slice(5, 20).map((artist) => (
                        <SmallArtist name={artist.name}/>
                    ))}
                </ul>
            </section>
      </main>
    )
  }
}

export default ArtistsCards;
