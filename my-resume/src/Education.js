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

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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

function EducationSection() {
  return (
    <section id="education">
      <SectionTitle>Education</SectionTitle>
      <SectionContent>
        <p>
          My educational background has provided me with a strong foundation in computer science and related fields.
        </p>

        <EducationGrid>
          <Card>
            <CardTitle>B.Tech (CSE)</CardTitle>
            <CardDetails>
              Dr. APJ Abdul Kalam Technical University (AKTU), Ghaziabad<br />
              2016 - 2020<br />
              Bachelor of Technology in Computer Science and Engineering.
            </CardDetails>
          </Card>

          <Card>
            <CardTitle>12th Grade</CardTitle>
            <CardDetails>
              Vivekanand School, New Delhi<br />
              2015 - 2016<br />
              Completed 12th grade with a focus on science.
            </CardDetails>
          </Card>

          <Card>
            <CardTitle>10th Grade</CardTitle>
            <CardDetails>
              St. Thomas School, Indirapuram<br />
              2013 - 2014<br />
              Completed 10th grade.
            </CardDetails>
          </Card>
        </EducationGrid>
      </SectionContent>
    </section>
  );
}

export default EducationSection;