import './index.css'
import TopNavbar from '../TopNavbar'
import LeftNavbar from '../LeftNavbar'

const Gaming = () => (
  <div className="home-app-container">
    <TopNavbar />
    <div className="app-container">
      <LeftNavbar />
      <div className="home-container">
        <h1>Home</h1>
      </div>
    </div>
  </div>
)

export default Gaming
