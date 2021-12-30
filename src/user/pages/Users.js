import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [{
        id: "u1",
        name: "James Bond",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freepsdbazaar.com%2Fwp-content%2Fuploads%2F2020%2F06%2Fsky-night%2Fnight-sky-049.jpg&f=1&nofb=1",
        places: 3
    }];

    return (
        <UsersList items={USERS} />
    );
}

export default Users
