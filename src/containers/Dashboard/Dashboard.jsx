import React, { Component } from 'react';
import classes from './Dashboard.css';

import {Link, Route} from 'react-router-dom'
import DashboardNavigation from '../../components/DashboardNavigation/DashboardNavigation';
import PeopleToFollow from '../../components/PeopleToFollow/PeopleToFollow';

//import Events from '../Events/Events.jsx'

const NewsFeed = () => (
    <span>NewsFeed</span>
)
const Groups = () => (
    <span>Groups</span>
)
const Events = () => (
    <span>Events</span>
)

class Dashboard extends Component {
    render() {
        return (
            <div className={classes.DashboardContainer}>
                <DashboardNavigation />

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

export default Dashboard;
