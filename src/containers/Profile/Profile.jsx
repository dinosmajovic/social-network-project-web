import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getUser } from '../../actions/userActions';
import classes from './Profile.css';
import { withRouter, Route, NavLink } from "react-router-dom";
import RenderIf from '../../Helpers/RenderIf';
import { PulseLoader } from 'react-spinners';
import ProfileFeed from '../ProfileFeed/ProfileFeed.jsx';
import ProfilePhotos from '../ProfilePhotos/ProfilePhotos.jsx';
import ProfileFriends from '../ProfileFriends/ProfileFriends.jsx';

class Profile extends Component {
  state = {
    user: {},
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      this.setState({ user: nextProps.user })
    }
  }

  componentDidMount = () => {
    this.props.getUser(this.props.match.params.id);
  }

  render() {
    return (
      <React.Fragment>
        <RenderIf condition={Object.keys(this.state.user).length === 0}>
          <div className={classes.LoaderContainer}>
            <PulseLoader
              sizeUnit={"px"}
              size={15}
              color={'#000'}
              loading={true}
            />
          </div>
        </RenderIf>
        <RenderIf condition={Object.keys(this.state.user).length !== 0}>
          <nav className={classes.ProfileNavigation}>
            <NavLink
              className={classes.ProfileNavLink}
              exact
              activeClassName={classes.selected}
              to={'/user/' + this.props.match.params.id}>Feed</NavLink>
            <NavLink
              className={classes.ProfileNavLink}
              exact
              activeClassName={classes.selected}
              to={'/user/' + this.props.match.params.id + '/photos'}>Photos</NavLink>
            <NavLink
              className={classes.ProfileNavLink}
              exact
              activeClassName={classes.selected}
              to={'/user/' + this.props.match.params.id + '/friends'}>Friends</NavLink>
          </nav>

          <Route exact path={'/user/' + this.props.match.params.id} component={ProfileFeed} />
          <Route path={'/user/' + this.props.match.params.id + '/photos'} component={ProfilePhotos} />
          <Route path={'/user/' + this.props.match.params.id + '/friends'} component={ProfileFriends} />
        </RenderIf>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.userPayload,
  userPosts: state.user.userPosts
})

export default connect(mapStateToProps, { getUser })(withRouter(Profile));