import React from 'react';

const SubscriberTable = ({ sub }) => {

    const { name, phone, email } = sub
    return (
        <tr>
            <th>*</th>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
        </tr>
    );
};

export default SubscriberTable;