import React from 'react';
import './TopFiveCarousel.css';
import BigArtist from './BigArtist/BigArtist';

class TopFiveCarousel extends React.Component {
  constructor(props){
    super();
    this.state = {
    }
  }

  render() {
      var n = 0;

      function increment(){
        n++;
        return n;
      }
    return (
      <main>
         <section className="carousel">
                    <h1 className="carousel-title">{this.props.type} top 5 most wanted artists</h1>
                    <div className="slideshow-container">
                      {this.props.art.slice(0, 5).map((artist) => (
                          <BigArtist name={artist.name} inc={increment()}/> 
                      ))}
                    </div>
         </section>
      </main>
    )
  }
}

export default TopFiveCarousel;
