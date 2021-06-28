import React from "react";
import styled from "styled-components";

function Backers({ currentAmount, targetAmount, backersCount, daysLeft }) {
  const progressBarPct = (currentAmount / targetAmount) * 100;
  return (
    <Wrapper>
      <div className="details">
        <div className="amount">
          <h3>${currentAmount.toLocaleString()}</h3>
          <p className="grey-text">
            of ${targetAmount.toLocaleString()} backed
          </p>
          <div className="underline"></div>
        </div>
        <div className="backers">
          <h3>{backersCount.toLocaleString()}</h3>
          <p className="grey-text">total backers</p>
          <div className="underline"></div>
        </div>
        <div className="days-left">
          <h3>{daysLeft}</h3>
          <p className="grey-text">days left</p>
        </div>
      </div>
      <div className="progress-bar">
        <div className="fill" style={{ width: `${progressBarPct}%` }}></div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  box-shadow: var(--dark-shadow);
  margin-left: 2rem;
  margin-right: 2rem;
  padding: 3rem 1rem 1rem 1rem;
  border-radius: 0.25rem;
  .text-grey {
    font-size: 1rem;
  }
  .details {
    display: grid;
    grid-template-columns: 1fr;
  }
  .underline {
    margin: 1rem auto;
    width: 5rem;
    height: 3px;
    justify-content: center;
    background: var(--clr-light-grey);
  }
  .amount,
  .backers,
  .days-left {
    padding: 0 2rem;
    width: 100%;
    text-align: center;
  }

  .amount,
  .backers {
    border-right: 3px solid var(--clr-light-grey);
  }

  .progress-bar {
    height: 0.75rem;
    border-radius: 1rem;
    background: var(--clr-light-grey);
    margin: 2rem;
    overflow-x: hidden;
  }

  .fill {
    background: var(--clr-primary-2);
    height: 100%;
    border-radius: 1rem;
  }

  @media screen and (min-width: 768px) {
    .details {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: auto auto;
      /* padding: 0 2rem; */
      justify-items: center;
    }
    .underline {
      display: none;
    }
    .amount,
    .backers,
    .days-left {
      text-align: start;
    }
  }
`;

export default Backers;
