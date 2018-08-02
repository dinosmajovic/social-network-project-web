import React, { Component } from 'react';
import classes from './Mopsters.css';
import {Route, Switch, Link} from 'react-router-dom';

import NewsFeed from '../NewsFeed/NewsFeed.jsx';
import Events from '../Events/Events.jsx';
import Groups from '../Groups/Groups.jsx';

class Mopsters extends Component {
    render() {
        return (
            <div className={classes.Mopsters}>
                <Link to="/feed">News Feed</Link>
                <Link to="/events">Events</Link>
                <Link to="/groups">Groups</Link>

                <Route path="/feed" component={NewsFeed} />
                <Route path="/events" component={Events} />
                <Route path="/groups" component={Groups} />
            </div>
        );
    }
}

export default Mopsters;
