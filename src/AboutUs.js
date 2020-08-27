import React, { Component } from 'react'

export default class AboutUs extends Component {
  render() {
    return (
      <>
        <h2>About Us</h2>
        <div className="peoples">
          <div className="left">
          <section>
            <h3>Brain</h3>
            <img src="/coffeeCups.png" className="brain cup" alt="Brian"/>
            <p>Least Favorite Coffee Drink: Machiatto</p>
            <p>Favorite Coffee Shop: Gas Station</p>
            <a href="https://www.linkedin.com/in/brian-mcphillips-75a00639/" rel="noopener noreferrer" target="_blank">
              <img src="/linkedin-icon.png" alt="linkedin"/>
            </a>
          </section>
          <section>
            <h3>Nate</h3>
            <img src="/coffeeCups.png" className="nate cup" alt="Nate"/>
            <p>Least Favorite Coffee Drink: Anything from Starbucks</p>
            <p>Favorite Coffee Shop: not Starbucks</p>
            <a href="https://www.linkedin.com/in/nathan-kruckenberg-974620193/" rel="noopener noreferrer" target="_blank">
              <img src="/linkedin-icon.png"alt="linkedin"/>
            </a>
          </section>
          </div>
          <div className="middle">
          <section>
            <h3>Joel</h3>
            <img src="/coffeeCups.png" className="joel cup" alt="Joel"/>
            <p>Least Favorite Coffee Drink: Kurig Coffee</p>
            <p>Favorite Coffee Shop: Nossa Familia</p>
            <a href="https://www.linkedin.com/in/joelrperez/" rel="noopener noreferrer" target="_blank">
              <img src="/linkedin-icon.png"alt="linkedin"/>
            </a>
          </section>
          </div>
          <div className="right">
          <section>
            <h3>Adrian</h3>
            <img src="/coffeeCups.png" className="Adrian cup" alt="Adrian"/>
            <p>Least Favorite Coffee Drink: Whats coffee?</p>
            <p>Favorite Coffee Shop: The ones in Amsterdam </p>
            <a href="https:/www.linkedin.com/in/adrian-simental/" rel="noopener noreferrer" target="_blank">
              <img src="/linkedin-icon.png" alt="linkedin" />
            </a>
          </section>
          <section>
            <h3>Ben</h3>
            <img src="/coffeeCups.png" className="Ben cup" alt="Ben"/>
            <p>Least Favorite Coffee Shop Drink: Red Bull Italian Soda</p>
            <p>Favorite Coffee Shop: Camber</p>
            <a href="https://www.linkedin.com/in/ben-waples-b04796161/" rel="noopener noreferrer" target="_blank">
              <img src="/linkedin-icon.png" alt="linkedin"/>
            </a>
          </section>
          </div>
        </div>
      </>
    )
  }
}
