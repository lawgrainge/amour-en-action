import React, { Fragment } from 'react';

import { RouteData } from 'react-static';
 
import Section, { SectionPanel, SectionImage, SlantedPanel } from '../../components/Section/Section';
import Hero from '../../components/Hero/Hero';
import EntrySummary from '../../components/EntrySummary/EntrySummary';

import './journal.css';
import { renderStatic } from 'react-helmet';


class Journal extends React.Component {

    state = {
        journalEntry: null
    }

    componentDidMount() {

        const [ url, entrySlug ] = window.location.search.split( 'entry=' );

        if ( Array.isArray( journalEntries ) && entrySlug ) {
            const [ entry ] = journalEntries.filter( e => e.slug === entrySlug );
            
            this.setState({
                journalEntry: entry
            });
        }
    }

    render() {

        const { journalEntry } = this.state;

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
    }
};

export default () => <RouteData component={ Journal } />;
