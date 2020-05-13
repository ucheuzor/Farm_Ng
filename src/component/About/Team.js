import React from 'react';
import TeamInfo from './TeamInfo';
import img3 from '../Images/About/about3.jpg';
import img2 from '../Images/About/about2.jpg';
import img1 from '../Images/About/about_1.jpg';

const teams = [
    {
        image: img3,
        title: 'Our Team',
    },
    {
        image: img2,
        title: 'Our Process',
    },
    {
        image: img1,
        title: 'Our Farmer',
    },
];

const Team = () => {
    return (
        <div className ='container-fluid '>
            <div className ='row justify-content-center text-center'>
                    {teams.map((team, index) => {
                        return  <TeamInfo {...team} key = {index} />
                    })}
            </div>
        </div>
    )
}

export default Team;