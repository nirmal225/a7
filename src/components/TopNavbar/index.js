import './index.css'
import Cookies from 'js-cookie'

import {AiFillHome} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import {withRouter} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {SiYoutubegaming} from 'react-icons/si'
import {FaMoon, FaFire} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'

import ThemeContext from '../../context/ThemeContext'

const TopNavbar = props => (
  <ThemeContext.Consumer>
    {value => {
      const {
        isDark,
        changeTheme,
        isHamburgerActive,
        changeHamburgerActive,
      } = value

      const renderMobileNavIcon = () => (
        <div className="nav-icons-container">
          <AiFillHome />
          <FaFire />
          <SiYoutubegaming />
          <BiListPlus />
        </div>
      )

      const onClickHamburger = () => {
        changeHamburgerActive()
      }
      const onChangeThemeColor = () => {
        changeTheme()
      }

      const onClickLogout = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      const navClassName = isDark
        ? 'top-nav-content top-nav-content-dark'
        : 'top-nav-content'

      const websiteLogo = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const changeThemeIcon = isDark ? (
        <FiSun size={25} className="sun-icon" />
      ) : (
        <FaMoon size={25} />
      )

      const logOutButtonClassName = isDark
        ? 'logout-button logout-dark'
        : 'logout-button'

      const hamburgerButton = isDark
        ? 'hamburger-button hamburger-dark'
        : 'hamburger-button'

      return (
        <nav className={navClassName}>
          <div className="top-nav-responsive-container">
            <img
              alt="website logo"
              src={websiteLogo}
              className="nav-website-logo"
            />
            <div className="nav-item-container">
              <button
                type="button"
                className="theme-button"
                onClick={onChangeThemeColor}
              >
                {changeThemeIcon}
              </button>
              <img
                alt="profile"
                className="profile-image"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
              />
              <button
                type="button"
                className={hamburgerButton}
                onClick={onClickHamburger}
              >
                <GiHamburgerMenu className="ham-nav-item" />
              </button>

              <button
                type="button"
                className={logOutButtonClassName}
                onClick={onClickLogout}
              >
                Logout
              </button>
            </div>
          </div>
          {isHamburgerActive && renderMobileNavIcon()}
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(TopNavbar)
