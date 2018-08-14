import React, { Component } from 'react';
import classes from './PeopleToFollow.css';
import PersonToFollow from './PersonToFollow/PersonToFollow';

class PeopleToFollow extends Component {
    render() {
        const people = [
            { name: "Muriz Suljevic", mutual: "2" },
            { name: "Vincent Guerrero", mutual: "5" },
            { name: "Robert Robinson", mutual: "2" },
            { name: "Jullie Gibson", mutual: "43" },
            { name: "Cristopher Hopkins", mutual: "1" },
        ]

        let peopleList = people.map(person => (
            <PersonToFollow name={person.name} mutual={person.mutual} />
        ))

        return (
            <div className={classes.PeopleToFollowContainer} >
                <div className={classes.PeopleToFollow}>
                    <h3>People to Follow</h3>
                    <ul>
                        {peopleList}
                    </ul>
                    <button className={classes.LoadMoreBtn}>Load More</button>
                </div>
            </div>
        );
    }
}

export default PeopleToFollow;
