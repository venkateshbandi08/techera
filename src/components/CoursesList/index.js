// CoursesList.js
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CourseCard from '../CourseCard'
import './index.css'

class CoursesList extends Component {
  state = {
    coursesList: [],
    isLoading: true,
    isFailed: false,
  }

  componentDidMount() {
    this.fetchCoursesList()
  }

  fetchCoursesList = async () => {
    try {
      const response = await fetch('https://apis.ccbp.in/te/courses')
      const data = await response.json()
      const formattedData = data.courses.map(eachItem => ({
        id: eachItem.id,
        name: eachItem.name,
        logoUrl: eachItem.logo_url,
      }))
      this.setState({
        coursesList: formattedData,
        isLoading: false,
        isFailed: false,
      })
    } catch (error) {
      console.error('Error fetching courses:', error)
      this.setState({
        isLoading: false,
        isFailed: true,
      })
    }
  }

  onRetry = () => {
    window.location.reload()
  }

  render() {
    const {coursesList, isLoading, isFailed} = this.state

    if (isLoading) {
      return (
        <div className="bg-container">
          <h1> Courses </h1>
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        </div>
      )
    }

    if (isFailed) {
      return (
        <div className="bg-container">
          <div className="failure-container">
            <h1> Oops! Something Went Wrong </h1>
            <p>We cannot seem to find the page you are looking for</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
              className="failure-view"
              alt="failure view"
            />
            <button onClick={this.onRetry}> Retry </button>
          </div>
        </div>
      )
    }

    return (
      <div className="bg-container">
        <h1> Courses </h1>
        <ul className="courses-list-container">
          {coursesList.map(eachItem => (
            <CourseCard courseDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default CoursesList
