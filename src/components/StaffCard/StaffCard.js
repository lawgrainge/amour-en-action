import React from 'react';

import './staff-card.css';


const StaffCard = ({ name = "", title = "", picture = null, bio }) => (
    <div className="staff-card">
        <img className="staff-card__pic" alt={ `picture of ${ name }` } src={ picture } />
        <div className="staff-card__info">
            <span className="staff-card__name">{ name }</span>
            <span className="staff-card__title">{ title }</span>
        </div>

        { bio &&
            <div className="staff-card__bio">
                <p className="staff-card__bio-blurb">
                    { bio }
                </p>
            </div>
        }
    </div>
);

export default StaffCard;
