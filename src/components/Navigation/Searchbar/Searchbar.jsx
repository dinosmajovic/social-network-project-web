import React, { Component } from 'react';
import classes from './Searchbar.css';
import Ionicon from 'react-ionicons';
import { withRouter } from 'react-router';


class Searchbar extends Component {
    state = {
        search: ""
    }

    onChange = e => {
        this.setState({
            search: e.target.value
        })
    }

    search = (event) => {
        if (this.state.search === "") {
            return null;
        }

        if (event.key == 'Enter') {
            this.props.history.push('/user/' + this.state.search)
            window.location.reload();
        }
    }

    render() {
        return (
            <div className={classes.Searchbar} >
                <input value={this.state.search} onKeyDown={this.search} onChange={this.onChange} type="text" placeholder="Search..." />
                <Ionicon
                    className={classes.SearchIcon}
                    icon="ios-search"
                    color="#a7a7a7"
                    fontSize="35px" />
            </div>
        );
    }
}

export default withRouter(Searchbar);


