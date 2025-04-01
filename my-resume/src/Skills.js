import React from 'react';
import styled from 'styled-components';

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

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive grid */
  gap: 20px;
  margin-top: 20px;
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

function SkillsSection() {
  return (
    <section id="skills">
      <SectionTitle>Skills</SectionTitle>
      <SectionContent>
        <p>
          My technical skill set encompasses a wide range of technologies and methodologies, enabling me to develop robust, scalable, and efficient applications. I am proficient in both front-end and back-end development, database management, and cloud computing.
        </p>

        <SkillGrid>
          <Card>
            <CardTitle>Java & Spring Boot</CardTitle>
            <CardDetails>
              Extensive experience developing enterprise-level applications, RESTful APIs, microservices, and utilizing Hibernate for database interactions.
            </CardDetails>
          </Card>

          <Card>
            <CardTitle>Angular</CardTitle>
            <CardDetails>
              Skilled in developing dynamic and responsive front-end interfaces, optimizing page load speed, and enhancing user engagement.
            </CardDetails>
          </Card>

          <Card>
            <CardTitle>SQL & Databases</CardTitle>
            <CardDetails>
              Proficient in designing and optimizing SQL Server and MongoDB databases, writing efficient queries, and ensuring data consistency.
            </CardDetails>
          </Card>

          <Card>
            <CardTitle>Microservices Architecture</CardTitle>
            <CardDetails>
              Demonstrated ability to modernize legacy systems, resulting in improved system performance and reduced downtime.
            </CardDetails>
          </Card>

          <Card>
            <CardTitle>Cloud Computing (AWS & Azure)</CardTitle>
            <CardDetails>
              Experienced in integrating cloud solutions, leveraging services like EC2, S3, Lambda, and Azure App Services for scalability and cost optimization.
            </CardDetails>
          </Card>

          <Card>
            <CardTitle>ASP.NET MVC & C#</CardTitle>
            <CardDetails>
              Skilled in developing and maintaining ASP.NET MVC applications for large-scale workforce management.
            </CardDetails>
          </Card>

          <Card>
            <CardTitle>Version Control & CI/CD</CardTitle>
            <CardDetails>
              Proficient in using Git and GitHub, and implementing CI/CD pipelines to automate deployment processes.
            </CardDetails>
          </Card>

          <Card>
            <CardTitle>Agile & Scrum</CardTitle>
            <CardDetails>
              Experienced in leading and participating in Agile and Scrum methodologies to ensure efficient project delivery.
            </CardDetails>
          </Card>

          <Card>
            <CardTitle>Additional Skills</CardTitle>
            <CardDetails>
              JavaScript, TypeScript, HTML, CSS, Visual Studio Code, Jira, Unit Testing, Kubernetes (Basic).
            </CardDetails>
          </Card>
        </SkillGrid>

        <p>
          I am committed to continuous learning and staying updated with the latest technologies and industry best practices. My diverse skill set allows me to tackle complex projects and deliver high-quality solutions.
        </p>
      </SectionContent>
    </section>
  );
}

export default SkillsSection;