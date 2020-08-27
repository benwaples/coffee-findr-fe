import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {
  handleSignOut = () => {
    this.setState({ token: '' });

    localStorage.setItem( 'TOKEN', '')
  }
  render() {
    return (
      <header>
        <div className="links"><Link to="/" onClick={this.handleSignOut}>Logout</Link><Link to="/CoffeeList">Search</Link></div>
        <h1 className="appName"><Link to="/">No Stars, No Bucks</Link></h1>
        <div className="links"><Link to="/Favorites">Favorites</Link><Link to="/Coffee101">Brew 101</Link></div>
      </header>
    )
  }
}
