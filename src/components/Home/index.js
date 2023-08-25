import {Component} from 'react'
import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import Header from '../Header'

import './index.css'

class Home extends Component {
  render() {
    const JwtToken123 = Cookies.get('jwt_token')
    if (JwtToken123 === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <>
        <Header />
        <div className="HomeContainer">
          <div className="HeadContainer">
            <h1 className="Heading">Clothes That Get You Noticed</h1>
            <p className="Description">
              Fashion is part of the daily air Fashion Design is one of the most
              popular design specializations in India. Fashion Design courses
              are available as diploma, undergraduate, and postgraduate degrees.
              Top universities and online platforms offer certificate courses in
              Fashion Design and related specializations. Popular Fashion Design
              Course After 12th are Bes Fashion Design, BFTech Fashion Design,
              and Diploma in Fashion Design. Candidates can also pursue
              postgraduate programs in Fashion Design like MDes Fashion Design,
              MFTech Fashion Design, or Postgraduate Diploma in Fashion Design
              after completing an undergraduate degree in Fashion Design.
            </p>
            <button type="button" className="shopNowButton">
              Shop Now
            </button>
          </div>
          <div className="imageContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
              className="image"
            />
          </div>
        </div>
      </>
    )
  }
}

export default Home
