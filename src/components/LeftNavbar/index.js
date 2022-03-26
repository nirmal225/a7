import './index.css'

import {Link} from 'react-router-dom'

import {SiYoutubegaming} from 'react-icons/si'
import {AiFillHome} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import {FaFire} from 'react-icons/fa'

const LeftNavbar = () => (
  <div className="left-nav-app-container">
    <ul className="left-nav-items-list-container">
      <Link to="/" className="left-nav-link">
        <li className="left-nav-item-container">
          <AiFillHome size={20} className="left-icon" />
          <p className="left-nav-item">Home</p>
        </li>
      </Link>
      <Link to="/trending" className="left-nav-link">
        <li className="left-nav-item-container">
          <FaFire size={20} className="left-icon" />
          <p className="left-nav-item">Trending</p>
        </li>
      </Link>
      <Link to="/gaming" className="left-nav-link">
        <li className="left-nav-item-container">
          <SiYoutubegaming size={20} className="left-icon" />
          <p className="left-nav-item">Gaming</p>
        </li>
      </Link>
      <Link to="/saved" className="left-nav-link">
        <button type="button" className="left-nav-button">
          <li className="left-nav-item-container">
            <BiListPlus size={20} className="left-icon" />
            <p className="left-nav-item">Saved Video</p>
          </li>
        </button>
      </Link>
    </ul>
    <div className="contact-us-container">
      <h1 className="contact-us-heading">CONTACT US</h1>
      <div className="contact-us-icons">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
          alt="facebook logo"
          className="contact-us-image"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
          alt="twitter logo"
          className="contact-us-image"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
          alt="linked in logo"
          className="contact-us-image"
        />
      </div>
      <p className="enjoy-paragraph">
        Enjoy! Now to see your channels and recommendations!
      </p>
    </div>
  </div>
)

export default LeftNavbar
