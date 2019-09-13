import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {
  About,
  Resume,
  Projects,
  Contact,
  NotFound,
  Home
} from './components/index'

/**
 * COMPONENT
 */
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
      <Route path="*" component={NotFound} />
    </Switch>
  )
}

export default Routes
