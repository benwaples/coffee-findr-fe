import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="links"><a href="./">Login</a><a href="./coffeeList">Search</a></div>
        <h1 className="appName">No Stars, No Bucks</h1>
        <div className="links"><a href="./favorites">Favorites</a><a>Coffee 101</a></div>
      </header>
    )
  }
}
