import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="links"><Link to="/">Login</Link><Link to="/CoffeeList">Search</Link></div>
        <h1 className="appName">No Stars, No Bucks</h1>
        <div className="links"><Link to="/Favorites">Favorites</Link><Link to="/Coffee101">Coffee 101</Link></div>
      </header>
    )
  }
}
