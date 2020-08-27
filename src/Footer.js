import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <header className="footerTho">
        <Link to="/AboutUs">About Us</Link>
      </header>
    )
  }
}
