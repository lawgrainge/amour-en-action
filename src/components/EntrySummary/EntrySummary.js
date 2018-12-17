import React from 'react';

import './entry-summary.css';


const EntrySummary = ({ title, author, date, thumbnail, articleLink = '#', summary }) => {

    const jDate = new Date( date );
    const formattedDate = `${ jDate.getMonth() + 1 }/${ jDate.getDate() + 1 }/${ jDate.getFullYear()}`;

    return (
        <div className="entry-summary">
            <div className="entry-summary__info">
                <a className="entry-summary__info-title" href={ articleLink }>
                    { title }
                </a>
                <a className="entry-summary__info-summary" href={ articleLink }>
                    { summary }
                </a>
                <span className="entry-summary__info-author">
                    { author }
                </span>
                <span className="entry-summary__info-date">
                    { formattedDate }
                </span>
            </div>
            <a
                className="entry-summary__info-thumbnail"
                href={ articleLink }
                style={{ backgroundImage: `url(${thumbnail})` }}
            />
        </div>
    );
}

export default EntrySummary;