import React, { Component } from 'react';
import classes from './PeopleToFollow.css';
import PersonToFollow from './PersonToFollow/PersonToFollow';

class PeopleToFollow extends Component {
    render() {
        const people = [
            { name: "Muriz Suljevic", mutual: "2", photo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/User-nohat-photo.jpg" },
            { name: "Vincent Guerrero", mutual: "5", photo: "http://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg" },
            { name: "Robert Robinson", mutual: "2", photo: "https://www.bnl.gov/today/body_pics/2017/07/7a_CFN-user_Vinod-Menon-216px.jpg" },
            { name: "Jullie Gibson", mutual: "43", photo: "https://media.nngroup.com/media/people/photos/Katie_Sherwin_square400x400_warm.jpg.400x400_q95_autocrop_crop_upscale.jpg" },
            { name: "Cristopher Hopkins", mutual: "1", photo: "https://pmcvariety.files.wordpress.com/2013/04/lfplrykb_400x400.jpeg" },
        ]

        let peopleList = people.map(person => (
            <PersonToFollow name={person.name} mutual={person.mutual} photo={person.photo} />
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
