import React, { Component } from 'react'
import {
  signIn,
  signUp
} from '../coffee-api.js'
import DisplaySignIn from './DisplaySignIn.js'
import DisplaySignUp from './DisplaySignUp.js'
import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

const notification = {    
  title: "Error!",    
  message: "Configurable",    
  type: "success",    
  insert: "top",    
  container: "top-right",    
  animationIn: ["animated", "fadeIn"],    
  animationOut: ["animated", "fadeOut"]
  };

export default class AuthPage extends Component {

  state = {
    signIn: false,
    signUp: false,
    signInEmail: '',
    signInPassword: '',
    signUpEmail: '',
    signUpPassword: ''
  }

  handleSignUp = async (e) => {
    try {
    e.preventDefault();

    const userData = await signUp({
      email: this.state.signUpEmail,
      password: this.state.signUpPassword
    })


    this.props.auth(userData.body.token)
    this.props.history.push('/coffeeList')
    } catch(e) {
      return store.addNotification({
        ...notification,
        container: 'top-right',
        type: 'warning',
        message: `${e.response.body.error}`,
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {        
            duration: 2000    
        }
    });
    }
  }

  handleSignIn = async (e) => {
    try {
    e.preventDefault();

    const userData = await signIn({
      email: this.state.signInEmail,
      password: this.state.signInPassword
    })

    this.props.auth(userData.body.token)
    this.props.history.push('/coffeeList')
  } catch(e) {
    return store.addNotification({
      ...notification,
      container: 'top-right',
      type: 'warning',
      message: `${e.response.body.error}`,
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {        
          duration: 2000    
      }
  });
  }
  } 

  displaySignIn = () => {
    this.setState({ signIn: true, signUp: false })
  }
  
  displaySignUp = () => {
    this.setState({ signUp: true, signIn: false })
  }

  handleSignUpEmail = (e) => {
    this.setState({ signUpEmail: e.target.value })
  }
  
  handleSignUpPassword = (e) => {
    this.setState({ signUpPassword: e.target.value })
  }
  
  handleSignInEmail = (e) => {
    this.setState({ signInEmail: e.target.value })
  }
  
  handleSignInPassword = (e) => {
    this.setState({ signInPassword: e.target.value })
  }

  render() {
    return (
      <div>
        <ReactNotification />
        <div className="center">
          <h2 onClick={this.displaySignIn}>Sign In</h2>
          {
            this.state.signIn && <DisplaySignIn
            handleSignIn={this.handleSignIn}
            handleSignInEmail={this.handleSignInEmail}
            handleSignInPassword={this.handleSignInPassword} />
          }
        </div>
        <div className="center">
          <h2 onClick={this.displaySignUp}>Sign Up</h2>
          {
            this.state.signUp && <DisplaySignUp 
            handleSignUp={this.handleSignUp}
            handleSignUpEmail={this.handleSignUpEmail}
            handleSignUpPassword={this.handleSignUpPassword} />
          }
        </div>
      </div>
    )
  }
}
