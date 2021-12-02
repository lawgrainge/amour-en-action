import React from 'react';

import './staff-card.css';


const StaffCard = ({ name = "", title = "", picture = null, bio, isSelected, onClick }) => (
    <button className={`staff-card ${isSelected ? 'staff-card--selected' : ''}`} onClick={onClick}>
        <div className="staff-card__pic-container"> 
            <img className="staff-card__pic" alt={ `picture of ${ name }` } src={ picture } />
        </div>
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
    </button>
);

export default StaffCard;
