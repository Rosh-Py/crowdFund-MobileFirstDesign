import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../globalContext";

function Reward({ title, minAmount, description, stock }) {
  const outOfStock = stock === 0;
  const { openPledgeModal, selectPledge } = useGlobalContext();
  return (
    <Wrapper outOfStock={outOfStock}>
      <div className="header">
        <b className={`${outOfStock ? "disabled-text" : ""}`}>{title}</b>
        <p>Pledge ${minAmount} or more</p>
      </div>
      <p className="description">{description}</p>
      <div className="footer">
        <div className="stock">
          <h3 className={`${outOfStock ? "disabled-text" : ""}`}>{stock}</h3>
          <span>left</span>
        </div>
        {!outOfStock ? (
          <div
            className="btn"
            onClick={() => {
              selectPledge(title);
              openPledgeModal();
            }}
          >
            <b>Select Reward</b>
          </div>
        ) : (
          <div className="btn disabled-btn">Out of stock</div>
        )}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.article`
  display: grid;
  row-gap: 1.1rem;
  border: 2px solid var(--clr-light-grey);
  padding: 2rem;
  border-radius: 0.5rem;
  opacity: ${(props) => (props.outOfStock ? 0.7 : 1)};
  .header b {
    font-size: 1rem;
  }
  .header p {
    color: var(--clr-primary-2);
    font-weight: 500;
    font-size: 1rem;
  }
  .disabled-text {
    color: var(--clr-dark-grey);
  }
  .description,
  .stock span {
    color: var(--clr-dark-grey);
    font-size: 1.05rem;
  }
  .stock h3 {
    margin-right: 0.5rem;
  }
  .disabled-btn {
    color: #fff;
    background-color: var(--clr-dark-grey);
  }
  .stock {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 768px) {
    .header,
    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .header b {
      font-size: 1.25rem;
    }
  }
`;

export default Reward;
