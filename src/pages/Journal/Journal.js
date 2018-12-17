import React from 'react';

import { RouteData } from 'react-static';
 
import Section, { SectionPanel, SectionImage, SlantedPanel } from '../../components/Section/Section';
import Hero from '../../components/Hero/Hero';

import './journal.css';


const Journal = ({ journalEntries }) => (
    <div className="journal">
        <Hero heading="Journal" />
        <Section theme="light-grain">
            <SectionPanel padded>
                <h2>Taking A Journey</h2>
                <p>
                    We are on a journey to bring transformation and change to the people of 
                    Haiti in the name of Jesus Christ. Here are our stories of the unfolding
                    of that journey.
                </p>
            </SectionPanel>
        </Section>
        <Section theme="white">
            <SectionPanel padded>
                { Array.isArray( journalEntries ) && journalEntries.map(( entry, idx ) => (
                    <EntrySummary
                        key={ `je-${ idx }` }
                        title={ entry.title }
                        author={ entry.author }
                        date={ entry.date }
                        thumbnail={ entry.thumbnail }
                        summary={ entry.summary }
                    />
                ))}
            </SectionPanel>
        </Section>
    </div>
);

const EntrySummary = ({ title, author, date, thumbnail, articleLink = '#', summary }) => (
    <div className="entry-summary">
        <div className="entry-summary__info">
            <a className="entry-summary__info-title" href={ articleLink }>
                { title }
            </a>
            <span className="entry-summary__info-summary">
                { summary }
            </span>
            <span className="entry-summary__info-author">
                { author }
            </span>
            <span className="entry-summary__info-date">
                { date }
            </span>
        </div>
        <a
            className="entry-summary__info-thumbnail"
            href={ articleLink }
            style={{ backgroundImage: thumbnail }}
        />
    </div>
);

export default () => <RouteData component={ Journal } />;
