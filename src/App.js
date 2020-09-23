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
      message: "" 
    }
  }

  callbackFunction = (childData) => {
    this.setState({message: childData})
    console.log(this.state.message)
}

  render() {
    return (
      <>
        <Nav parentCallback = {this.callbackFunction}/>
        <TopFiveCarousel/>
        <ArtistsCards/>
        <Footer/>
      </>
    )
  }
}

export default App;
