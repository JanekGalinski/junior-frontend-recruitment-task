import React from 'react';
import './App.css';
import ArtistsCards from './Components/ArtistsCards/ArtistsCards';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import TopFiveCarousel from './Components/TopFiveCarousel/TopFiveCarousel';

class App extends React.Component {
  constructor(props){
    super();
    this.state = {
      art: [],
      message: "",
      type: "Global",
    }
  }

  callbackFunction = (childData) => {
      this.setState({message: childData, type: "Polish"})
      fetch('http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=poland&api_key=b13851316d3a6ff1ac99cf76140016cc&format=json')
            .then(res => res.json())
            .then(json => { 
            this.setState({
              art: json.topartists.artist,
            })
        })
  }

  componentDidMount () {
    fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=b13851316d3a6ff1ac99cf76140016cc&format=json')
      .then(res => res.json())
      .then(json => { 
      this.setState({
        art: json.artists.artist,
      })
    })
  }

  render() {    
    return (
      <>
        <Nav parentCallback = {this.callbackFunction}/>
        <TopFiveCarousel art={this.state.art} type={this.state.type}/>
        <ArtistsCards art={this.state.art}/>
        <Footer/>
      </>
    )
  }
}

export default App;
