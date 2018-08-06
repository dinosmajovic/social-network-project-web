import React, { Component } from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import classes from './DashboardNavigation.css'

import Ionicon from 'react-ionicons';

import EventsIcon from './icons/events.svg';
import GroupsIcon from './icons/groups.svg';
import FeedIcon from './icons/news-feed.svg';
import RenderIf from '../../Helpers/RenderIf';

class DashboardNavigation extends Component {
  render() {
    console.log(this.props.location.pathname)
    return (
      <div className={classes.DashboardNavigationContainer}>
        <div className={classes.DashboardNavigation}>
            <NavLink
                onClick={this.props.clicked}
                exact 
                to="/"
                className={classes.Navlink} 
                activeClassName={classes.selectedFeed}>
                  <span className={classes.tooltip}>News Feed</span>
                  <img src={FeedIcon} className={classes.NavigationIcon} alt=""/>
                  <span>
                    News Feed
                  </span>
                </NavLink>
            <NavLink
                onClick={this.props.clicked}
                exact 
                to="/events"
                className={classes.Navlink}
                activeClassName={classes.selectedEvents}>
                  <span className={classes.tooltip}>Events</span>
                  <img src={EventsIcon} className={classes.NavigationIcon} alt=""/>
                  <span>
                    Events
                  </span>
                </NavLink>
            <NavLink
                onClick={this.props.clicked}
                exact 
                to="/groups"
                className={classes.Navlink}
                activeClassName={classes.selectedGroups}>
                  <span className={classes.tooltip}>Groups</span>
                  <img src={GroupsIcon} className={classes.NavigationIcon} alt=""/>
                  <span>
                    Groups
                  </span>
                </NavLink>
        </div>
        <RenderIf condition={this.props.location.pathname == "/events"}>
          <button className={classes.CreateEventBtn}>
            <Ionicon  
              className={classes.AddIcon}
              icon="md-add" 
              color="#fff" 
              fontSize="12px" />
            Create Event
          </button>
        </RenderIf>
        <RenderIf condition={this.props.location.pathname == "/groups"}>
          <button className={classes.CreateGroupBtn}>
            <Ionicon  
              className={classes.AddIcon}
              icon="md-add" 
              color="#fff" 
              fontSize="12px" />
            Create Group
          </button>
        </RenderIf>
      </div>
    )
  }
}

export default withRouter(DashboardNavigation)
