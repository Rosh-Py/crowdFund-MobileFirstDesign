import React from "react";
import styled from "styled-components";
import smHeroImg from "../images/image-hero-mobile.jpg";
import lgHeroImg from "../images/image-hero-desktop.jpg";
import { FaBars } from "react-icons/fa";
import { navLinks } from "../data";
import { v4 as uuidv4 } from "uuid";
import { useGlobalContext } from "../globalContext";

function Hero() {
  const { openNavModal, isNavModalOpen } = useGlobalContext();
  return (
    <Wrapper>
      <div className="hero-img"></div>
      <div className="header">
        <div className="header-content">
          <h3>crowdfund</h3>
          <ul className="nav-links">
            {navLinks.map((link) => {
              return (
                <li key={uuidv4()} className="nav-link">
                  {link}
                </li>
              );
            })}
          </ul>
          {!isNavModalOpen && (
            <FaBars className="bar-icon" onClick={openNavModal} />
          )}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  .hero-img {
    height: 45vh;
    transition: var(--transition);
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)),
      url(${smHeroImg}) center / cover no-repeat scroll;
  }
  /* .desktop-hero-img {
    display: none;
  } */
  .nav-links {
    display: none;
  }
  /* .mobile-hero-img {
    height: 45vh;
    object-fit: cover;
  } */
  .bar-icon {
    font-size: 1.75rem;
    cursor: pointer;
    font-weight: bold;
  }
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    color: #fff;
  }
  .header-content {
    padding: 1.5rem;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1280px;
  }

  @media screen and (min-width: 768px) {
    .bar-icon {
      display: none;
    }
    .nav-links {
      display: flex;
    }
    .nav-link {
      margin-left: 3rem;
      font-size: 1rem;
      cursor: pointer;
      transition: var(--transition);
    }
    .nav-link:hover {
      transform: scale(1.1);
    }
    .hero-img {
      height: 50vh;
      background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)),
        url(${lgHeroImg}) 0 0 / cover no-repeat scroll;
    }
  }
`;
export default Hero;
