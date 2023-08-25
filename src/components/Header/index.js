import Cookies from 'js-cookie'

import {Link, withRouter} from 'react-router-dom'

import './index.css'

const Header = props => {
  const onclickDelete = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className="HeaderContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
        alt="website logo"
        className="websiteLogo"
      />
      <div className="AnotherContainerInHeader">
        <li className="description">
          <Link to="/">Home</Link>
        </li>
        <li className="description">
          <Link to="/products">Products</Link>
        </li>
        <li className="description">
          <Link to="/cart">Cart</Link>
        </li>
        <button type="button" className="button" onClick={onclickDelete}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default withRouter(Header)
