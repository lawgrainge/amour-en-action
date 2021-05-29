import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { RouteData } from "react-static";

import Section, { SectionPanel } from "../../components/Section/Section";
import Hero from "../../components/Hero/Hero";
import EntrySummary from "../../components/EntrySummary/EntrySummary";

import "./journal.css";

class Journal extends React.Component {
  state = {
    journalEntry: null,
  };

  componentDidMount() {
    const { pageData = {} } = this.props;
    const { journalEntries = [] } = pageData;
    const [url, entrySlug] = window.location.search.split("entry=");

    if (Array.isArray(journalEntries) && entrySlug) {
      const [entry] = journalEntries.filter((e) => e.slug === entrySlug);

      this.setState({
        journalEntry: entry,
      });
    }
  }

  componentDidUpdate() {
    const {
      pageData = {},
      history: { location },
    } = this.props;
    const { journalEntries = [] } = pageData;

    const [, entrySlug] = location.search.split("entry=");
    let prevEntrySlug = this.state.journalEntry
      ? this.state.journalEntry.slug
      : undefined;

    if (prevEntrySlug !== entrySlug && Array.isArray(journalEntries)) {
      const [entry] = journalEntries.filter((e) => e.slug === entrySlug);

      this.setState({
        journalEntry: entry || null,
      });
    }
  }

  render() {
    const { journalEntry } = this.state;
    const {
      pageData: { journalEntries, heading, heroImageSm },
    } = this.props;

    return (
      <div className="journal">
        <Helmet>
          <title>
            Amour En Action | Journal
            {journalEntry ? ` | ${journalEntry.title}` : ""}
          </title>
        </Helmet>
        <Hero heading={heading} image={heroImageSm} />

        {journalEntry ? (
          <Section theme="white">
            <SectionPanel padded width="100%">
              <h2>{journalEntry.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: journalEntry.body }} />
            </SectionPanel>
          </Section>
        ) : (
          <Fragment>
            <Section theme="light-grain">
              <SectionPanel padded>
                <h2>Taking A Journey</h2>
                <p>
                  We are on a journey to bring transformation and change to the
                  people of Haiti in the name of Jesus Christ. Here are our
                  stories of the unfolding of that journey.
                </p>
              </SectionPanel>
            </Section>
            <Section theme="white">
              <SectionPanel padded width="100%">
                {Array.isArray(journalEntries) &&
                  journalEntries.map((entry, idx) => (
                    <EntrySummary
                      key={`je-${idx}`}
                      title={entry.title}
                      author={entry.author}
                      date={entry.date}
                      thumbnail={entry.thumbnail}
                      summary={entry.summary}
                      articleLink={`/journal?entry=${entry.slug}`}
                    />
                  ))}
              </SectionPanel>
            </Section>
          </Fragment>
        )}
      </div>
    );
  }
}

export default () => <RouteData component={Journal} />;
