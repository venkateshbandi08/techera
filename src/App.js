import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import CoursesList from './components/CoursesList'
import CourseDetails from './components/CourseDetails'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here
const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={CoursesList} />
      <Route exact path="/courses/:id" component={CourseDetails} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
