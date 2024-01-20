import {Link} from 'react-router-dom'
import './index.css'

const CourseCard = props => {
  const {courseDetails} = props
  const {id, name, logoUrl} = courseDetails
  return (
    <Link to={`/courses/${id}`}>
      <li className="each-course-card">
        <img src={logoUrl} alt={name} className="course-icon" />
        <p className="course-name"> {name} </p>
      </li>
    </Link>
  )
}

export default CourseCard
