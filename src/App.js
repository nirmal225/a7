import './App.css'
import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'

import ThemeContext from './context/ThemeContext'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'

// Replace your code here
class App extends Component {
  state = {isDark: false, isHamburgerActive: true}

  changeHamburgerActive = () => {
    this.setState(prevState => ({
      isHamburgerActive: !prevState.isHamburgerActive,
    }))
  }

  changeTheme = () => {
    this.setState(prevState => ({
      isDark: !prevState.isDark,
    }))
  }

  render() {
    const {isDark, isHamburgerActive} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDark,
          changeTheme: this.changeTheme,
          isHamburgerActive,
          changeHamburgerActive: this.changeHamburgerActive,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/saved" component={SavedVideos} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}
export default App
