import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Correct import

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

const ContactCard = styled.div`
  background-color: #263238;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    transform: translateY(-5px);
  }

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  position: relative;
  padding-left: 20px;
  width: 100%;
  justify-content: center;

  @media (max-width: 767px) {
    flex-direction: column;
    text-align: center;
    padding-left: 0;
    margin-bottom: 20px;
  }
`;

const ContactIcon = styled(FontAwesomeIcon)`
  margin-right: 15px;
  font-size: 1.5em;
  color: #e50914;

  @media (max-width: 767px) {
    margin-right: 0;
    margin-bottom: 10px;
    font-size: 2em;
  }
`;

const ContactText = styled.p`
  color: #b0bec5;
  font-size: 0.95em;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 767px) {
    font-size: 1.2em;
  }
`;

const LocationText = styled.p`
  color: #b0bec5;
  font-size: 0.95em;
  margin-top: 20px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 767px) {
    font-size: 1.2em;
    margin-top: 30px;
  }
`;

function ContactSection() {
  return (
    <section id="contact">
      <SectionTitle>Contact</SectionTitle>
      <SectionContent>
        <ContactCard>
          <ContactInfo>
            <ContactIcon icon={faPhone} />
            <ContactText>+91 8130769040</ContactText>
          </ContactInfo>
          <ContactInfo>
            <ContactIcon icon={faEnvelope} />
            <ContactText>puneetsingh0216@gmail.com</ContactText>
          </ContactInfo>
          <ContactInfo>
            <ContactIcon icon={faLinkedin} />
            <ContactText>linkedin.com/in/puneet-singh-dev</ContactText>
          </ContactInfo>
          <LocationText>Location: Ghaziabad, Uttar Pradesh, India</LocationText>
        </ContactCard>
      </SectionContent>
    </section>
  );
}

export default ContactSection;
