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
            <img src="/avataaars(1).png" className="avatar" alt="Brian"/>
            <p><strong>Least Favorite Coffee Drink:</strong> Americano</p>
            <p><strong><strong>Favorite Coffee Shop:</strong></strong> Gas Station</p>
            <a href="https://www.linkedin.com/in/brian-mcphillips-75a00639/" rel="noopener noreferrer" target="_blank">
              <img src="/linkedin-icon.png" alt="linkedin"/>
            </a>
          </section>
          <section>
            <h3>Nate</h3>
            <img src="/avataaars(2).png" className="avatar" alt="Nate"/>
            <p><strong>Least Favorite Coffee Drink:</strong> Anything from Starbucks</p>
            <p><strong>Favorite Coffee Shop:</strong> not Starbucks</p>
            <a href="https://www.linkedin.com/in/nathan-kruckenberg-974620193/" rel="noopener noreferrer" target="_blank">
              <img src="/linkedin-icon.png"alt="linkedin"/>
            </a>
          </section>
          </div>
          <div className="middle">
          <section>
            <h3>Joel</h3>
            <img src="/joel_avataaars.png" className="avatar" alt="Joel"/>
            <p><strong>Least Favorite Coffee Drink:</strong> Kurig Coffee</p>
            <p><strong>Favorite Coffee Shop:</strong> Nossa Familia</p>
            <a href="https://www.linkedin.com/in/joelrperez/" rel="noopener noreferrer" target="_blank">
              <img src="/linkedin-icon.png"alt="linkedin"/>
            </a>
          </section>
          </div>
          <div className="right">
          <section>
            <h3>Adrian</h3>
            <img src="/adrian.png" className="avatar" alt="Adrian"/>
            <p><strong>Least Favorite Coffee Drink:</strong> Whats coffee?</p>
            <p><strong>Favorite Coffee Shop:</strong> The ones in Amsterdam </p>
            <a href="https:/www.linkedin.com/in/adrian-simental/" rel="noopener noreferrer" target="_blank">
              <img src="/linkedin-icon.png" alt="linkedin" />
            </a>
          </section>
          <section>
            <h3>Ben</h3>
            <img src="/ben.png" className="avatar" alt="Ben"/>
            <p>Least Favorite Coffee Shop Drink: Red Bull Italian Soda</p>
            <p><strong>Favorite Coffee Shop:</strong> Camber</p>
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
