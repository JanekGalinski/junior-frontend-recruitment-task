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
         <section className="top-carousel">
                    <h1 className="carousel-title">{this.props.type} top 5 most wanted artists</h1>
                    <div className="slideshow-container">
                      <div id="myCarousel" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                          {this.props.art.slice(0, 5).map((artist) => {
                            if(n == 0){
                              return (
                                <BigArtist name={artist.name} inc={increment()} itemClass={"carousel-item active"} />
                            )
                              }
                              else{
                                return (
                                  <BigArtist name={artist.name} inc={increment()} itemClass={"carousel-item"} /> 
                              )
                                }})}
                        </div>
                        <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="sr-only">Next</span>
                        </a>
                      </div>
                    </div>
         </section>
      </main>


    )
  }
}

export default TopFiveCarousel;
