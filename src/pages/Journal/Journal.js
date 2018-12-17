import React, { Fragment } from 'react';

import { RouteData } from 'react-static';
 
import Section, { SectionPanel, SectionImage, SlantedPanel } from '../../components/Section/Section';
import Hero from '../../components/Hero/Hero';
import EntrySummary from '../../components/EntrySummary/EntrySummary';

import './journal.css';


const Journal = ({ journalEntries }) => {

    
    const [ url, entrySlug ] = window ? window.location.search.split( 'entry=' ) : [];
    let journalEntry = null;

    if ( Array.isArray( journalEntries ) && entrySlug ) {
        const [ entry ] = journalEntries.filter( e => e.slug === entrySlug );
        journalEntry = entry;
    }

    return (
        <div className="journal">
            <Hero heading="Journal" />

            { journalEntry ?
                <Section theme="white">
                    <SectionPanel padded width="100%">
                        <h2>{ journalEntry.title }</h2>
                        <div dangerouslySetInnerHTML={{ __html: journalEntry.body }} />
                    </SectionPanel>
                </Section>
            :
                <Fragment>
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
                        <SectionPanel padded width="100%">
                            { Array.isArray( journalEntries ) && journalEntries.map(( entry, idx ) => (
                                <EntrySummary
                                    key={ `je-${ idx }` }
                                    title={ entry.title }
                                    author={ entry.author }
                                    date={ entry.date }
                                    thumbnail={ entry.thumbnail }
                                    summary={ entry.summary }
                                    articleLink={ `/journal?entry=${ entry.slug }` }
                                />
                            ))}
                        </SectionPanel>
                    </Section>
                </Fragment>
             }
        </div>
    );
};

export default () => <RouteData component={ Journal } />;
