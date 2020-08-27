import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="links"><a href="./">Login</a><a href="../CoffeeList/CoffeeList.js">Search</a></div>
        <h1 className="appName">No Stars, No Bucks</h1>
        <div className="links"><a href="./Favorites">Favorites</a><a href="google.com">Coffee 101</a></div>
      </header>
    )
  }
}
