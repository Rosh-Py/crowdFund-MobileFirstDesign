import React from "react";
import { Reward } from "./";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
// import { pledgeRewards } from "../data";
import { useGlobalContext } from "../globalContext";
function About() {
  const { pledgeRewards } = useGlobalContext();
  return (
    <Wrapper>
      <div className="about">
        <h4 className="about-title">About this project</h4>
        <div className="about-desc">
          <p>
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <p>
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>
        </div>
      </div>
      <div className="rewards-container">
        {pledgeRewards.map((reward) => {
          return <Reward key={uuidv4()} {...reward} />;
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 0 2rem;
  padding: 2rem;
  box-shadow: var(--dark-shadow);
  border-radius: 0.5rem;
  .about-title {
    margin: 1rem 0 2rem;
  }
  .about-desc p {
    margin: 1rem 0;
    color: var(--clr-dark-grey);
    font-size: 1rem;
  }
  .about {
    margin-bottom: 2rem;
  }
  .rewards-container {
    display: grid;
    row-gap: 1rem;
  }
`;

export default About;
