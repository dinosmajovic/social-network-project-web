import React, { Component } from 'react';
import classes from './Dashboard.css';

import {Link, Route} from 'react-router-dom'
import DashboardNavigation from '../../components/DashboardNavigation/DashboardNavigation';

//import Events from '../Events/Events.jsx'

const NewsFeed = () => (
    <h1>NewsFeed</h1>
)
const Groups = () => (
    <h1>Groups</h1>
)
const Events = () => (
    <h1>Events</h1>
)

class Dashboard extends Component {
    render() {
        return (
            <div>
                <DashboardNavigation />

                <div style={{
                    marginLeft: "300px"
                }}>
                    <Route exact path="/" component={NewsFeed} />
                    <Route path="/events" component={Events} />
                    <Route path="/groups" component={Groups} />
                </div>
            </div>
        );
    }
}

export default Dashboard;
