import React from 'react';
import './Nav.css';
import logo from '../../Assets/img/logo.svg'
import header from '../../Assets/img/header.png'
import ChangeGeo from './ChangeGeo/ChangeGeo';

class Nav extends React.Component {
  constructor(props){
    super();
    this.state = {
      message: "" 
    }
  }

  callbackFunction = (childData) => {
    this.setState({message: childData})
    this.props.parentCallback(this.state);
  }

  render() {
    let iconSrc = logo;
    let headerSrc = header;
    return (
          <nav>
           <div className="color-nav">
                 <div className="container-nav">
                    <img className="nav-logo" src={iconSrc} alt="logo"></img>
                    <ChangeGeo parentCallback = {this.callbackFunction}></ChangeGeo>
                 </div>
           </div>  
            <div className="container-image">
              <img className="nav-header" src={headerSrc} alt="header"></img>
               <div className="container-text">
                <h1>Top charts created by musicians</h1>
                <p>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te.</p>
               </div>
            </div>
          </nav>
    )
  }
}

export default Nav;
