import React, { Component } from 'react';
import classes from './Events.css'
import Ionicon from 'react-ionicons'
import {Route} from 'react-router-dom';

import Event from '../../components/Event/Event.jsx'
import CreateEvent from '../../components/CreateEvent/CreateEvent';

class Events extends Component {
    render() {
        const upcomingEvents = [
            {
                name: "Red Bull Cliff Diving Mostar, Bosnia and Herzegovina",
                imageUrl: "https://i.ytimg.com/vi/2QX_2ppr4ME/maxresdefault.jpg",
                timeStamp: "SAT, 8 SEPT AT 12:00"
            },
            {
                name: "Sarajevsko After Film",
                imageUrl: "https://trecisvijet.com/wp-content/uploads/2018/07/Sarajevsko-After-Film.jpg",
                timeStamp: "10 Aug – 17 Aug"
            }
        ]

        const eventsYouMayLike = [
            {
                name: "Sarajevo Streeat Food Festival",
                imageUrl: "https://www.index.ba/media/2018/07/36483915_409773979432503_2139721396555612160_o.jpg",
                timeStamp: "SAT, 8 SEPT AT 12:00"
            },
            {
                name: "BURAK YETER & BAGGI / Sarajevo festival VIP closing party 2018",
                imageUrl: "https://www.kupikartu.ba/img/sd2/850x370/usr/karte/BURAKWEB.jpg",
                timeStamp: "17 August at 22:00–04:00"
            },
            {
                name: "Sarajevo Sberbank Half Marathon 2018",
                imageUrl: "https://static.klix.ba/media/images/vijesti/180727061.1_xxl.jpg",
                timeStamp: "16 September at 10:00–13:00"
            }
        ]

        const upcomingEventsToReturn = upcomingEvents.map(event => (
            <Event name={event.name} imageUrl={event.imageUrl} timeStamp={event.timeStamp} />
        ))
        
        const eventsYouMayLikeToReturn = eventsYouMayLike.map(event =>(
            <Event name={event.name} imageUrl={event.imageUrl} timeStamp={event.timeStamp} />
        ))
        return (
            <div className={classes.Events}>
                <Route exact path="/events" render={() => [
                    <h1 className={classes.SectionName}>
                        <Ionicon className={classes.StarIcon} icon="md-star" size="10px" color="#333" />
                        Upcoming Events
                    </h1>,
                    <div className={classes.Upcoming}>
                        {upcomingEventsToReturn}
                    </div>  , 
                    <h1 className={classes.SectionName}>Events you may like</h1>,
                    <div className={classes.MayLike}>
                        {eventsYouMayLikeToReturn}
                    </div>
                ]} />
                <Route path="/events/create" component={CreateEvent} />
            </div>
        );
    }
}

export default Events;
