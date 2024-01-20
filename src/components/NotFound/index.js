import './index.css'

const NotFound = () => (
  <div className="failure-container">
    <h1>Page Not Found</h1>
    <p>We are sorry, the page you requested could not be found</p>
    <img
      src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
      alt="not found"
      className="not-found-image"
    />
  </div>
)

export default NotFound
