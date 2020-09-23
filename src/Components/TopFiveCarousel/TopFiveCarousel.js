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
    return (
      <main>
         <section>
                <ul>
                    <div className="titles">
                        <h3>NAME</h3>
                        <h3>STATUS</h3>
                    </div>
                    {this.props.art.slice(0, 5).map((artist) => (
                        <BigArtist name={artist.name}/>
                    ))}
                </ul>
         </section>
      </main>
    )
  }
}

export default TopFiveCarousel;
