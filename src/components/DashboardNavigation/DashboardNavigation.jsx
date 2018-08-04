import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import classes from './DashboardNavigation.css'

export default class DashboardNavigation extends Component {
  render() {
    return (
      <div className={classes.DashboardNavigationContainer}>
        <div className={classes.DashboardNavigation}>
            <NavLink
                exact 
                to="/"
                className={classes.Navlink} 
                activeClassName={classes.selected}>News Feed</NavLink>
            <NavLink
                exact 
                to="/events"
                className={classes.Navlink}
                activeClassName={classes.selected}>Events</NavLink>
            <NavLink
                exact 
                to="/groups"
                className={classes.Navlink}
                activeClassName={classes.selected}>Groups</NavLink>
        </div>
      </div>
    )
  }
}
