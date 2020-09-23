import React, { Component } from 'react';
import './ChangeGeo.css';

class ChangeGeo extends Component {
  constructor(props) {
    super();
    this.state = {
      showMenu: false,
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
    }
  }

  sendData = () => {
    this.props.parentCallback("http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=poland&api_key=b13851316d3a6ff1ac99cf76140016cc&format=json");
}

  render() {
    return (
      <div>
        <button className="nav-button" onClick={this.showMenu}>
          <h2>TOP GLOBAL CHART</h2>
          <i class="arrow-down"></i>
        </button>
        {
          this.state.showMenu
            ? (
              <div className="menu" ref={(element) => {this.dropdownMenu = element;}}>
                <button className="nav-button-second" onClick={this.sendData}>
                  <h2>TOP POLISH CHART</h2>
                </button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default ChangeGeo;
