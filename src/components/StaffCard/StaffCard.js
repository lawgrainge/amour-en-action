import React from 'react';

import './staff-card.css';


const StaffCard = ({ name = "", title = "", picture = null }) => (
    <div className="staff-card">
        <img alt={ `picture of ${ name }` } src={ picture } />
        <span className="staff-card__name">{ name }</span>
        <span className="staff-card__title">{ title }</span>
    </div>
);

export default StaffCard;
