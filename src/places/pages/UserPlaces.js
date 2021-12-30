import React from 'react'
import { useParams } from 'react-router';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl: 'https://www.worldatlas.com/upload/62/89/67/shutterstock-432247444.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878531
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl: 'https://www.worldatlas.com/upload/62/89/67/shutterstock-432247444.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878531
        },
        creator: 'u2'
    }
];

const UserPlaces = () => {
    const uid = useParams().uid;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === uid);
    return <PlaceList items={loadedPlaces} />
};

export default UserPlaces;