import React, { Component } from 'react'
import {NavLink, Link, withRouter} from 'react-router-dom'
import classes from './DashboardNavigation.css'

import Ionicon from 'react-ionicons';

import EventsIcon from './icons/events.svg';
import GroupsIcon from './icons/groups.svg';
import FeedIcon from './icons/news-feed.svg';
import RenderIf from '../../Helpers/RenderIf';

class DashboardNavigation extends Component {
  render() {
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
          <Link to="/events/create" className={classes.CreateEventBtn} onClick={this.props.clicked}>
            <Ionicon  
              className={classes.AddIcon}
              icon="md-add" 
              color="#fff" 
              fontSize="12px" />
            Create Event
          </Link>
        </RenderIf>
        <RenderIf condition={this.props.location.pathname == "/groups"}>
          <Link to="/groups/create" className={classes.CreateGroupBtn} onClick={this.props.clicked}>
            <Ionicon  
              className={classes.AddIcon}
              icon="md-add" 
              color="#fff" 
              fontSize="12px" />
            Create Group
          </Link>
        </RenderIf>
      </div>
    )
  }
}

export default withRouter(DashboardNavigation)
