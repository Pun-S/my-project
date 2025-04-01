import React, { useState } from "react";
import styled from "styled-components";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Education from "./Education";
import Certifications from "./Certifications";
import Contact from "./Contact";
import Resume from "./Resume";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const PageContainer = styled.div`
  font-family: "Netflix Sans", sans-serif;
  color: #ffffff;
  background: linear-gradient(135deg, #121212, #1f1f1f);
  min-height: 100vh;
  display: flex;
  position: relative;
  box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.5);
`;

// Desktop Nav
const DesktopNav = styled.nav`
  background: linear-gradient(135deg, #121212, #1f1f1f);
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100vh;
  box-sizing: border-box;
  padding-top: 20px;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 2px 0 20px rgba(0, 0, 0, 0.4);

  @media (max-width: 767px) {
    display: none;
  }
`;

// Mobile Nav
const MobileNav = styled.nav`
  background: linear-gradient(135deg, #121212, #1f1f1f);
  padding: 10px;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }

  ${(props) =>
    props.isOpen &&
    `
    flex-direction: column;
    height: 100vh;
    padding: 20px;
    overflow-y: auto;
    align-items: stretch;
    justify-content: flex-start;
  `}
`;

const NavTitle = styled.a`
  margin: 0;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin-top: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
    background: linear-gradient(135deg, #2a2a2a, #3a3a3a);
  }

  @media (max-width: 767px) {
    width: 80px;
    height: 80px;
    font-size: 2em;
    margin: 20px auto;
  }
`;

const NavLink = styled.a`
  color: #e3f2fd;
  text-decoration: none;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  cursor: pointer;
  white-space: nowrap;
  padding: 8px 10px;
  border-radius: 4px;
  font-weight: 500;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: 767px) {
    margin: 10px 20px;
    padding: 15px 30px;
    font-size: 1.3em;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.05);
    justify-content: center;
  }

  &:hover {
    color: #ffffff;
    transform: translateX(5px);
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

    @media (max-width: 767px) {
      transform: none;
    }
  }
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
  margin-left: 200px;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
  min-height: 100vh;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  width: calc(100% - 200px);

  @media (min-width: 768px) {
    padding: 40px;
  }

  @media (max-width: 767px) {
    margin-left: 0;
    margin-top: 60px;
    padding: 15px;
    opacity: ${(props) => (props.isNavOpen ? "0" : "1")};
    pointer-events: ${(props) => (props.isNavOpen ? "none" : "auto")};
    width: 100%;
  }

  ${(props) =>
    !props.isNavOpen &&
    `
    @media (min-width: 768px) {
      margin-left: 200px; /* Keep margin same as desktop nav width */
      width: calc(100% - 200px); /* Adjust width */
    }
  `}
`;

const HamburgerButton = styled.button`
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5em;
  cursor: pointer;
  padding: 10px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-radius: 4px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
`;

function App() {
  const [activeSection, setActiveSection] = useState("profile");
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleNavLinkClick = (section) => {
    setActiveSection(section);
    if (window.innerWidth <= 767) {
      setIsNavOpen(false);
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case "profile":
        return <Resume />;
      case "about":
        return <About />;
      case "experience":
        return <Experience />;
      case "skills":
        return <Skills />;
      case "education":
        return <Education />;
      case "certifications":
        return <Certifications />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <PageContainer>
      <DesktopNav>
        <NavTitle onClick={() => handleNavLinkClick("profile")}>PS</NavTitle>
        <NavLink onClick={() => handleNavLinkClick("about")}>About</NavLink>
        <NavLink onClick={() => handleNavLinkClick("experience")}>
          Experience
        </NavLink>
        <NavLink onClick={() => handleNavLinkClick("skills")}>Skills</NavLink>
        <NavLink onClick={() => handleNavLinkClick("education")}>
          Education
        </NavLink>
        <NavLink onClick={() => handleNavLinkClick("certifications")}>
          Certifications
        </NavLink>
        <NavLink onClick={() => handleNavLinkClick("contact")}>Contact</NavLink>
      </DesktopNav>
      <MobileNav isOpen={isNavOpen}>
        <HamburgerButton onClick={toggleNav}>
          <FontAwesomeIcon icon={faBars} />
        </HamburgerButton>
        {isNavOpen && (
          <>
            <NavTitle onClick={() => handleNavLinkClick("profile")}>PS</NavTitle>
            <NavLink onClick={() => handleNavLinkClick("about")}>About</NavLink>
            <NavLink onClick={() => handleNavLinkClick("experience")}>Experience</NavLink>
            <NavLink onClick={() => handleNavLinkClick("skills")}>Skills</NavLink>
            <NavLink onClick={() => handleNavLinkClick("education")}>Education</NavLink>
            <NavLink onClick={() => handleNavLinkClick("certifications")}>Certifications</NavLink>
            <NavLink onClick={() => handleNavLinkClick("contact")}>Contact</NavLink>
          </>
        )}
      </MobileNav>
      <ContentContainer isNavOpen={isNavOpen}>{renderSection()}</ContentContainer>
    </PageContainer>
  );
}

export default App;