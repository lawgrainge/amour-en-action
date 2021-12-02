import React, { useState, useRef } from "react";
import { RouteData } from "react-static";
import { Helmet } from "react-helmet";

import Section, {
  SectionPanel,
  SectionImage,
  SlantedPanel,
} from "../../components/Section/Section";
import Hero from "../../components/Hero/Hero";
import StaffCard from "../../components/StaffCard/StaffCard";

import schoolImage from "../../../public/images/aea_school_help.jpg";
import profilePlaceholder from "../../../public/images/profile-placeholder.png";

import "./about.css";

const About = ({ pageData: { heading, heroImageLg, teamMembers } }) => {

  const [selectedMemberIdx, setSelectedMemberIdx] = useState();
  const [showBio, setShowBio] = useState(false);
  const teamMemberSectionRef = useRef();
  const hasSelectedMember = Number.isInteger(selectedMemberIdx);

  function onTeamMemberClick(idx) {
    setSelectedMemberIdx(idx);

    if (teamMemberSectionRef.current) {
      window.scrollTo({
        top: teamMemberSectionRef.current.offsetTop - 15,
        left: 0,
        behavior: 'smooth'
      });
    }

    setTimeout(() => {
      setShowBio(true);
    }, 400)
  }

  function onShowAllTeamMembers() {
    setSelectedMemberIdx(null);
    setShowBio(false);
  }
  
  return (
    <div className="about">
      <Helmet>
        <title>Amour En Action | About Us</title>
      </Helmet>
      <Hero heading={heading} image={heroImageLg} />
      <Section theme="light-grain">
        <SectionPanel padded>
          <h2>Organized With Purpose</h2>
          <p>
            Amour en Action, Inc was incorporated to provide a means to those
            who wish to personally engage in making a difference in the lives of
            needy Haitian children, providing assistance in the area of
            education, nutrition, healthcare and other developmental
            initiatives.
          </p>
        </SectionPanel>
      </Section>
      <Section className={`staff-section ${showBio ? 'staff-section--bio' : ''}`} theme="medium-gray" ref={teamMemberSectionRef}>
        <SectionPanel padded>
          <div className={`about-staff ${hasSelectedMember ? 'about-staff--bio' : ''}`}>
            {teamMembers.map((member, idx) => (
              <StaffCard
                key={`sc-${idx}`}
                name={member.name}
                title={member.title}
                picture={member.picture || profilePlaceholder}
                bio={member.shortBio}
                isSelected={selectedMemberIdx === idx}
                onClick={() => onTeamMemberClick(idx)}
              />
            ))}
          </div>
          {showBio && teamMembers && teamMembers[selectedMemberIdx] && teamMembers[selectedMemberIdx].shortBio &&
          <div className="bio">
            <button type="button" onClick={onShowAllTeamMembers}>
              See all team members
            </button>
            <p>{teamMembers[selectedMemberIdx].shortBio}</p>
          </div>
          }
        </SectionPanel>
      </Section>
      <Section>
        <SectionImage src={schoolImage} />
        <SlantedPanel>
          <div className="about-accomplishments">
            <h2>Some Accomplishments</h2>
            <span>In Haiti</span>
            <ul>
              <li>Operation of a free school for over 150 needy children</li>
              <li>
                Half way in the construction of a school to house over 200
                children
              </li>
              <li>Organization of Medical Mission Trips</li>
              <li>Christmas parties with gift donations to Haitian children</li>
            </ul>
            <span>In The US</span>
            <ul>
              <li>Incorporation of the organization</li>
              <li>Fundraising concerts and banquets</li>
              <li>Family Conference</li>
            </ul>
          </div>
        </SlantedPanel>
      </Section>
    </div>
  );
};

export default () => <RouteData component={About} />;
