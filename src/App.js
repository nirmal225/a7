import './App.css'
import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import ThemeContext from './context/ThemeContext'
import LoginForm from './components/LoginForm'
import Home from './components/Home'

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
          <Route exact path="/" component={Home} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}
export default App
