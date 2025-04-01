import React from "react";
import styled from "styled-components";

const SectionTitle = styled.h2`
  font-size: 2.5em;
  font-weight: bold;
  margin-bottom: 30px;
  color: #fff;
`;

const SectionContent = styled.div`
  line-height: 1.8;
  color: #b3b3b3;
  font-size: 1.1em;
`;

const ExperienceList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ExperienceItem = styled.li`
  margin-bottom: 8px;
  position: relative;
  padding-left: 20px;
  &::before {
    content: "•";
    position: absolute;
    left: 0;
    color: #e50914; /* Netflix Red */
  }
`;

const Card = styled.div`
  background-color: #263238;
  padding: 15px; /* Adjusted padding for mobile */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }

  @media (min-width: 768px) {
    padding: 20px; /* Original padding for larger screens */
  }
`;

const CardTitle = styled.h3`
  font-size: 1.2em; /* Adjusted font size for mobile */
  font-weight: bold;
  margin-bottom: 8px; /* Adjusted margin for mobile */
  color: #e0e0e0;

  @media (min-width: 768px) {
    font-size: 1.3em; /* Original font size for larger screens */
    margin-bottom: 10px; /* Original margin for larger screens */
  }
`;

const CardDetails = styled.p`
  color: #b0bec5;
  font-size: 0.95em; /* Adjusted font size for mobile */

  @media (min-width: 768px) {
    font-size: 1em; /* Original font size for larger screens */
  }
`;

function ExperienceSection() {
  return (
    <section id="experience">
      <SectionTitle>Experience</SectionTitle>
      <SectionContent>
        <Card>
          <CardTitle>Senior Systems Engineer (Full Stack Developer)</CardTitle>
          <CardDetails>
            <strong>Infosys Limited</strong> | April 2021 – Present (4+ Years)
          </CardDetails>
          <ExperienceList>
            <ExperienceItem>
              Developed and maintained Java-based enterprise applications using
              Spring Boot, Hibernate, REST APIs, and Angular, improving system
              efficiency by 30%.
            </ExperienceItem>
            <ExperienceItem>
              Led the modernization of a legacy Subcon Management System by
              transitioning it to a microservices architecture using Spring Boot
              and Angular, reducing downtime by 40%.
            </ExperienceItem>
            <ExperienceItem>
              Designed and developed responsive front-end interfaces using HTML,
              CSS, JavaScript, and TypeScript, improving page load speed by 40%
              and increasing user engagement by 25%.
            </ExperienceItem>
            <ExperienceItem>
              Implemented and optimized SQL Server and MongoDB databases,
              reducing query execution time by 35% and improving data
              consistency.
            </ExperienceItem>
            <ExperienceItem>
              Developed and maintained ASP.NET MVC applications for large-scale
              workforce management, supporting 10,000+ users.
            </ExperienceItem>
            <ExperienceItem>
              Integrated cloud solutions on AWS and Azure, leveraging EC2, S3,
              Lambda, and Azure App Services to enhance scalability and reduce
              operational costs by 25%.
            </ExperienceItem>
            <ExperienceItem>
              Led GitHub version control and CI/CD pipeline implementation,
              reducing merge conflicts by 30% and accelerating release cycles by
              20% through automated deployment strategies.
            </ExperienceItem>
            <ExperienceItem>
              Spearheaded Agile and Scrum adoption, leading 15+ sprint planning
              sessions and optimizing workflows, resulting in a 20% faster
              project delivery with improved cross-team collaboration.
            </ExperienceItem>
          </ExperienceList>
        </Card>
      </SectionContent>
    </section>
  );
}

export default ExperienceSection;
