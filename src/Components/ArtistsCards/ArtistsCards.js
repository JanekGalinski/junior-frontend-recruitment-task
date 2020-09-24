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
      var n = 5;

      function increment(){
        n++;
        return n;
      }
    return (
      <main>
            <section className="cards">
                    <h1 className="cards-title">Artists with places 6-20</h1>
                    <div className="cards-layout">
                      {this.props.art.slice(5, 20).map((artist) => (
                          <SmallArtist name={artist.name} inc={increment()}/>
                      ))}
                    </div>
            </section>
      </main>
    )
  }
}

export default ArtistsCards;
