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

const CertificationGrid = styled.div`
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

function CertificationsSection() {
  return (
    <section id="certifications">
      <SectionTitle>Certifications</SectionTitle>
      <SectionContent>
        <p>
          My commitment to continuous learning is reflected in the certifications I've earned, demonstrating my expertise in various technologies and methodologies.
        </p>

        <CertificationGrid>
          <Card>
            <CardTitle>Infosys Certified Java SE8 Developer</CardTitle>
            <CardDetails>
              Demonstrates proficiency in Java SE8 development, including core Java concepts and best practices.
            </CardDetails>
          </Card>

          <Card>
            <CardTitle>Infosys Certified Global Agile Developer</CardTitle>
            <CardDetails>
              Highlights expertise in Agile methodologies and practices, emphasizing efficient project delivery.
            </CardDetails>
          </Card>

          <Card>
            <CardTitle>MongoDB SI Associate</CardTitle>
            <CardDetails>
              Validates proficiency in MongoDB database management and development.
            </CardDetails>
          </Card>
        </CertificationGrid>
      </SectionContent>
    </section>
  );
}

export default CertificationsSection;