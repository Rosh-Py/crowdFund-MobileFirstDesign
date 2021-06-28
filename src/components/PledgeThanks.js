import React from "react";
import styled from "styled-components";
import { ReactComponent as CheckIcon } from "../images/icon-check.svg";

function PledgeThanks() {
  return (
    <Wrapper>
      <div className="thanks-container">
        <CheckIcon className="check-icon" />
        <h4>Thanks for your support!</h4>
        <p>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed. Got it!
        </p>
        <div className="btn">
          <strong>Got it</strong>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  display: grid;
  place-items: center;
  padding: 2rem;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1;
  .check-icon {
    margin: 2rem 0;
  }
  p {
    font-size: 1rem;
    color: var(--clr-dark-grey);
    margin: 1rem 0;
    text-align: center;
  }
  .thanks-container {
    display: grid;
    place-items: center;
    background-color: #fff;
    border-radius: 0.5rem;
    padding: 2rem;
    max-width: 30rem;
  }
`;
export default PledgeThanks;
