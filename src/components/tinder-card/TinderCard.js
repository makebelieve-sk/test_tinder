import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';

import datebase from '../../firebase';
import './tinder-card.css'

export const TinderCardComponent = () => {
    const [ people, setPeople ] = useState([]);

    useEffect(() => {
        datebase.collection('people').onSnapshot(snapshot => (
            setPeople(snapshot.docs.map(doc => doc.data()))
        ))
    }, [people])
    return (
        <div>
            <div className="tinderCards__cardContainer">
                { people.map((person) => (
                    <TinderCard className="swipe" key={person.name} preventSwipe={["up", "down"]}>
                        <div className="card" style={{ backgroundImage: `url(${person.url})` }}>
                            <h3>{ person.name }</h3>
                        </div>
                    </TinderCard>
                )) }
            </div>
        </div>
    )
};
