import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import classes from './DashboardNavigation.css'

import EventsIcon from './icons/events.svg';
import GroupsIcon from './icons/groups.svg';
import FeedIcon from './icons/news-feed.svg';

export default class DashboardNavigation extends Component {
  render() {
    return (
      <div className={classes.DashboardNavigationContainer}>
        <div className={classes.DashboardNavigation}>
            <NavLink
                exact 
                to="/"
                className={classes.Navlink} 
                activeClassName={classes.selectedFeed}>
                  <img src={FeedIcon} className={classes.NavigationIcon} alt=""/>
                  News Feed
                </NavLink>
            <NavLink
                exact 
                to="/events"
                className={classes.Navlink}
                activeClassName={classes.selectedEvents}>
                  <img src={EventsIcon} className={classes.NavigationIcon} alt=""/>
                  Events
                </NavLink>
            <NavLink
                exact 
                to="/groups"
                className={classes.Navlink}
                activeClassName={classes.selectedGroups}>
                  <img src={GroupsIcon} className={classes.NavigationIcon} alt=""/>
                  Groups
                </NavLink>
        </div>
      </div>
    )
  }
}
