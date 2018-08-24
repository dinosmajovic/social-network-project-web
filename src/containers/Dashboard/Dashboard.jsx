import React, { Component } from 'react';
import classes from './Dashboard.css';

import RenderIf from '../../Helpers/RenderIf';
import { Route, withRouter } from 'react-router-dom'
import DashboardNavigation from '../../components/DashboardNavigation/DashboardNavigation';
import PeopleToFollow from '../../components/PeopleToFollow/PeopleToFollow';

import Events from '../Events/Events.jsx'
import NewsFeed from '../NewsFeed/NewsFeed.jsx';
import Groups from '../Groups/Groups.jsx'
import Profile from '../Profile/Profile';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';
import PhotoUploadModal from '../../components/PhotoUploadModal/PhotoUploadModal';
import Backdrop from '../../components/UI/Backdrop/Backdrop';

class Dashboard extends Component {
    state = {
        uploadPhotoModal: false
    }

    toggleUploadPhoto = () => {
        this.setState({
            uploadPhotoModal: !this.state.uploadPhotoModal
        })
    }

    render() {
        let pathname = this.props.location.pathname;
        let isProfile = pathname.substr(0, 5) === "/user";

        return (
            <div className={classes.DashboardContainer}>
                <Backdrop show={this.state.uploadPhotoModal} clicked={this.toggleUploadPhoto} />
                <PhotoUploadModal show={this.state.uploadPhotoModal} onCancel={this.toggleUploadPhoto} />
                <RenderIf condition={!isProfile}>
                    <div className={classes.DesktopNavigation}>
                        <DashboardNavigation />
                    </div>
                </RenderIf>
                <RenderIf condition={isProfile}>
                    <div className={classes.DesktopNavigation}>
                        <ProfileInfo onClick={this.toggleUploadPhoto} />
                    </div>
                </RenderIf>
                <div className={isProfile ? [classes.Dashboard, classes.ProfileDashboard].join(' ') : classes.Dashboard}>
                    <Route exact path="/" component={NewsFeed} />
                    <Route path="/user/:id" component={Profile} />
                    <Route path="/events" component={Events} />
                    <Route path="/groups" component={Groups} />
                </div>
                <PeopleToFollow />
            </div>
        );
    }
}

export default withRouter(Dashboard);
