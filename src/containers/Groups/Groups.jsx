import React, { Component } from 'react';
import classes from './Groups.css'
import Group from '../../components/Group/Group';
import {Route} from 'react-router-dom';

import Ionicon from 'react-ionicons'
import CreateGroup from '../../components/CreateGroup/CreateGroup';


class Groups extends Component {
    render() {
        const manageGroups = [
            {
                name: "Sarajevo Car Meet",
                imageUrl: "http://raredelights.com/wp-content/uploads/2013/12/2015-Ferrari-458-Speciale-Front-View.jpg",
                membersNum: 14
            },
            {
                name: "Startup Surveys Group",
                imageUrl: "https://surveymethods.com/wp-content/uploads/images/create-effective-survey.jpg",
                membersNum: 8                
            }
        ]

        const yourGroups = [
            {
                name: "Gameri Pokažite Setup Komuna",
                imageUrl: "https://www.didakta.ba/images/contents/gameri_pr_j.jpg",
                membersNum: 142
            },
            {
                name: "OpenCoffee Club Sarajevo",
                imageUrl: "https://grancolombiatours.com/wp-content/uploads/2017/09/coffee.jpg",
                membersNum: 82                
            },
            {
                name: "LOL @ Nexus Sarajevo Gamin…",
                imageUrl: "https://mygaming.co.za/news/wp-content/uploads/2016/07/Dota-2-arena.jpg",
                membersNum: 77             
            },
            {
                name: "The Lost Nations",
                imageUrl: "https://files1.coloribus.com/preview/x600/files/adsarchive/part_1556/15566555/poderoso-timao-store-empty-city-600-84447.jpg",
                membersNum: 31             
            }
        ]

        const manageGroupsToReturn = manageGroups.map(group => (
            <Group name={group.name} imageUrl={group.imageUrl} membersNum={group.membersNum} />
        ))
        
        const yourGroupsToReturn = yourGroups.map(group => (
            <Group name={group.name} imageUrl={group.imageUrl} membersNum={group.membersNum} />
        ))
        return (
            <div className={classes.Groups}>
                <Route exact path="/groups" render={() => [
                    <h1 className={classes.SectionName}>
                        <Ionicon className={classes.StarIcon} icon="md-star" size="10px" color="#333" />
                        Groups You Manage
                    </h1>,
                    <div className={classes.Manage}>
                        {manageGroupsToReturn}
                    </div>,   
                    <h1 className={classes.SectionName}>Your Groups</h1>,
                    <div className={classes.YourGroups}>
                        {yourGroupsToReturn}
                    </div>
                ]} />
                <Route path="/groups/create" component={CreateGroup} />
            </div>
        );
    }
}

export default Groups;
