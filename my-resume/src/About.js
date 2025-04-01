import React from "react";
import styled from "styled-components";

const SectionTitle = styled.h2`
  font-size: 2em; /* Adjusted font size for mobile */
  font-weight: bold;
  margin-bottom: 20px; /* Adjusted margin for mobile */
  color: #e0e0e0;

  @media (min-width: 768px) {
    font-size: 2.5em; /* Original font size for larger screens */
    margin-bottom: 30px; /* Original margin for larger screens */
  }
`;

const SectionContent = styled.div`
  line-height: 1.6; /* Adjusted line height for mobile */
  color: #b0bec5;
  font-size: 1em; /* Adjusted font size for mobile */

  @media (min-width: 768px) {
    line-height: 1.8; /* Original line height for larger screens */
    font-size: 1.1em; /* Original font size for larger screens */
  }
`;
function About() {
  return (
    <section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionContent>
        <p>
          Hello! I'm Puneet Singh, a passionate and results-driven Software
          Engineer with over three years of experience in developing and
          maintaining robust enterprise applications. My journey in the world of
          software development has been defined by a constant pursuit of
          excellence and a deep-seated commitment to creating efficient,
          scalable, and user-centric solutions.
        </p>
        <p>
          I thrive on challenges and enjoy the intricate process of transforming
          complex requirements into functional and elegant code. My technical
          expertise spans across a wide range of technologies, including Java,
          Spring Boot, Angular, SQL databases, and cloud platforms like AWS and
          Azure. I'm particularly adept at leveraging microservices architecture
          to modernize legacy systems, significantly improving performance and
          reducing downtime.
        </p>
        <p>
          My experience at Infosys Limited has provided me with invaluable
          opportunities to work on large-scale projects, collaborate with
          cross-functional teams, and adopt Agile and Scrum methodologies.
          Leading the modernization of the Subcon Management System, for
          instance, allowed me to witness the tangible impact of
          well-architected software on business operations. I'm proud of my
          contributions to improving system efficiency by 30% and reducing
          downtime by 40%.
        </p>
        <p>
          Beyond technical proficiency, I believe in the power of clear
          communication, problem-solving, and continuous learning. I'm a firm
          believer in staying up-to-date with the latest industry trends and
          technologies, which is why I've pursued certifications in Java SE8,
          Agile methodologies, and MongoDB.
        </p>
        <p>
          I'm eager to bring my skills and experience to a dynamic team where I
          can contribute to meaningful projects and continue to grow as a
          software engineer. If you're looking for a dedicated and versatile
          developer, I'd love to connect.
        </p>{" "}
      </SectionContent>
    </section>
  );
}

export default About;
