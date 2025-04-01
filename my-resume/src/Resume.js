import React from "react";
import styled from "styled-components";

const Hero = styled.section`
  position: relative;
  background: linear-gradient(135deg, #121212, #1f1f1f);
  text-align: center;
  padding: 60px 20px;
  margin-bottom: 20px;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 100px 0;
    margin-bottom: 40px;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 50px;
  }
`;

const ProfileImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

const TextContent = styled.div`
  text-align: left;
  max-width: 600px;
`;

const HeroTitle = styled.h1`
  font-size: 2.5em;
  font-weight: bold;
  margin-bottom: 15px;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (min-width: 768px) {
    font-size: 3.5em;
    margin-bottom: 20px;
  }
`;

const HeroTagline = styled.p`
  font-size: 1.1em;
  margin-bottom: 20px;
  color: #b0bec5;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 1.3em;
    margin-bottom: 30px;
  }
`;

function Resume() {
  return (
    <Hero>
      <HeroContent>
        <ProfileImage>
          <img src="/photo.avif" alt="Puneet Singh" />
        </ProfileImage>
        <TextContent>
          <HeroTitle>Hi, I'm Puneet.</HeroTitle>
          <HeroTagline>
            A passionate Software Engineer with 4+ years of experience in
            full-stack development. Specializing in creating efficient,
            scalable, and user-friendly applications.
          </HeroTagline>
        </TextContent>
      </HeroContent>
    </Hero>
  );
}

export default Resume;
