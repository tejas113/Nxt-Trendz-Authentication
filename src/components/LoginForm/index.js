import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showErrorMsg: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errormsg => {
    this.setState({
      showErrorMsg: true,
      errorMsg: errormsg,
    })
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userdetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userdetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {showErrorMsg, errorMsg, username, password} = this.state

    return (
      <div className="loginCont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="loginImgEdit"
        />
        <form className="formCont" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="loginLogoEdit"
          />

          <div className="labelCont">
            <label htmlFor="username" className="labelEdit">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={this.onChangeUsername}
              placeholder="Username"
            />
          </div>

          <div className="labelCont">
            <label htmlFor="password" className="labelEdit">
              PASSWORD
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={this.onChangePassword}
            />
          </div>

          <button className="btnEdit" type="submit">
            Login
          </button>
          {showErrorMsg && <p className="redAlert">{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
