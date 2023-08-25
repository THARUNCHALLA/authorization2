import {Component} from 'react'

import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', ErrorMsg: '', isFact: false}

  onSuccess = JwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', JwtToken, {expires: 30})
    history.replace('/')
  }

  onFailure = ErrorMsg => {
    this.setState({isFact: true, ErrorMsg})
  }

  onsubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const user = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(user),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccess(data.jwt_token)
    } else {
      this.onFailure(data.error_msg)
    }
  }

  onchange = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  username = () => {
    const {username} = this.state
    return (
      <>
        <label htmlFor="tharun" id="para1">
          USERNAME
        </label>
        <br />
        <input
          type="text"
          id="tharun"
          placeholder="Username"
          onChange={this.onchange}
          value={username}
        />
      </>
    )
  }

  password = () => {
    const {password} = this.state
    return (
      <>
        <label htmlFor="tharun12" id="para">
          Password
        </label>
        <br />
        <input
          type="password"
          id="tharun12"
          placeholder="Password"
          onChange={this.onChangePassword}
          value={password}
        />
      </>
    )
  }

  render() {
    const {ErrorMsg, isFact} = this.state
    const jwtToken12 = Cookies.get('jwt_token')
    if (jwtToken12 !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="loginContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png "
          alt="website login"
          className="websiteLogin"
        />

        <div>
          <form onSubmit={this.onsubmit} className="formContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
              alt="website logo"
              className="websiteLogo"
            />
            <div className="userInputContainer">{this.username()}</div>
            <div className="userInputContainer">{this.password()}</div>
            <button type="submit" className="button hara">
              Login
            </button>
            {isFact && <p className="errorMsg">* {ErrorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
