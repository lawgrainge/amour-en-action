import React from "react";
import { RouteData } from "react-static";

import Section, {
  SectionPanel,
  SectionImage,
  SlantedPanel,
} from "../../components/Section/Section";
import Hero from "../../components/Hero/Hero";
import StaffCard from "../../components/StaffCard/StaffCard";

import devImage from "../../../public/uploads/developer.jpg";
import profilePlaceholder from "../../../public/images/profile-placeholder.png";

import "./about.css";

const aeaStaff = [
  {
    name: "Duclair Atis",
    title: "President",
    picture: profilePlaceholder,
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    name: "Glenda Athus",
    title: "Chief of Operations",
    picture: profilePlaceholder,
  },
  {
    name: "Romain Athus, M.D",
    title: "Director",
    picture: profilePlaceholder,
  },
  {
    name: "Balanda Atis",
    title: "Coordinator",
    picture: profilePlaceholder,
  },
  {
    name: "Juliana Excellent",
    title: "Director",
    picture: profilePlaceholder,
  },
  {
    name: "Micheline Athis",
    title: "Nurse",
    picture: profilePlaceholder,
  },
  /*{ 
        name: 'Raymi Athis',
        title: 'Coordinator',
        picture: profilePlaceholder
    }*/
];

const About = ({ pageData: { heading, heroImageLg, teamMembers } }) => {
  console.log("teamMembers:", teamMembers);
  return (
    <div className="about">
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
      <Section theme="medium-gray">
        <SectionPanel padded>
          <div className="about-staff">
            {teamMembers.map((member, idx) => (
              <StaffCard
                key={`sc-${idx}`}
                name={member.name}
                title={member.title}
                picture={member.picture || profilePlaceholder}
                bio={member.shortBio}
              />
            ))}
          </div>
        </SectionPanel>
      </Section>
      <Section>
        <SectionImage src={devImage} />
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
