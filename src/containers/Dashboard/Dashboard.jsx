import React, { Component } from 'react';
import classes from './Dashboard.css';

import {Link, Route, withRouter} from 'react-router-dom'
import DashboardNavigation from '../../components/DashboardNavigation/DashboardNavigation';
import PeopleToFollow from '../../components/PeopleToFollow/PeopleToFollow';

import Events from '../Events/Events.jsx'
import NewsFeed from '../NewsFeed/NewsFeed.jsx';
import Groups from '../Groups/Groups.jsx'

class Dashboard extends Component {
    render() {
        return (
            <div className={classes.DashboardContainer}>
                <div className={classes.DesktopNavigation}>
                    <DashboardNavigation />
                </div>
                <div className={classes.Dashboard}>
                    <Route exact path="/" component={NewsFeed} />
                    <Route path="/events" component={Events} />
                    <Route path="/groups" component={Groups} />
                </div>
                <PeopleToFollow />
            </div>
        );
    }
}

export default withRouter(Dashboard);
