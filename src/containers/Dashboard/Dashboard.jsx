import React, { Component } from 'react';
import classes from './Dashboard.css';

import RenderIf from '../../Helpers/RenderIf';
import {Route, withRouter} from 'react-router-dom'
import DashboardNavigation from '../../components/DashboardNavigation/DashboardNavigation';
import PeopleToFollow from '../../components/PeopleToFollow/PeopleToFollow';

import Events from '../Events/Events.jsx'
import NewsFeed from '../NewsFeed/NewsFeed.jsx';
import Groups from '../Groups/Groups.jsx'
import Profile from '../Profile/Profile';

class Dashboard extends Component {
    render() {
        let pathname = this.props.location.pathname;
        let isProfile = pathname.substr(0, pathname.lastIndexOf("/")) === "/user";

        return (
            <div className={classes.DashboardContainer}>
                <RenderIf condition={!isProfile}>
                    <div className={classes.DesktopNavigation}>
                        <DashboardNavigation />
                    </div>
                </RenderIf>
                <div className={isProfile ? [classes.Dashboard, classes.ProfileDashboard].join(' ') : classes.Dashboard}>
                    <Route exact path="/" component={NewsFeed} />
                    <Route path="/user/:id" component={Profile} />
                    <Route path="/events" component={Events} />
                    <Route path="/groups" component={Groups} />
                </div>
                <RenderIf condition={!isProfile}>
                    <PeopleToFollow />
                </RenderIf>
            </div>
        );
    }
}

export default withRouter(Dashboard);
