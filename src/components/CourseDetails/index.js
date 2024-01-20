// CourseDetails.js
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class CourseDetails extends Component {
  state = {
    courseDetails: {},
    isLoading: true,
    isFailed: false,
  }

  componentDidMount() {
    this.fetchCourseDetails()
  }

  fetchCourseDetails = async () => {
    try {
      const {match} = this.props
      const {params} = match
      const {id} = params
      const response = await fetch(`https://apis.ccbp.in/te/courses/${id}`)
      const data = await response.json()
      const courseData = data.course_details
      const formattedData = {
        id: courseData.id,
        description: courseData.description,
        imageUrl: courseData.image_url,
        name: courseData.name,
      }
      this.setState({
        courseDetails: formattedData,
        isLoading: false,
        isFailed: false,
      })
    } catch (error) {
      console.error('Error fetching course details:', error)
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
    const {courseDetails, isLoading, isFailed} = this.state
    const {description, imageUrl, name} = courseDetails

    if (isLoading) {
      return (
        <div className="bg-container">
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
            <p>We cannot seem to find the course details you are looking for</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
              className="failure-view"
              alt="failure view"
            />
            <button type="button" onClick={this.onRetry}>
              {' '}
              Retry{' '}
            </button>
          </div>
        </div>
      )
    }

    return (
      <div className="bg-container">
        <div className="course-details-container">
          <img src={imageUrl} alt={name} className="image-icon" />
          <div className="content-container">
            <h1 className="course-name">{name}</h1>
            <p className="course-description"> {description} </p>
          </div>
        </div>
      </div>
    )
  }
}

export default CourseDetails
