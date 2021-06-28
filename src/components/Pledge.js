import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AlertModal } from "./";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";
import { useGlobalContext } from "../globalContext";

function Pledge({ title, minAmount, description, stock, selected }) {
  const outOfStock = stock === 0;
  const [amount, setAmount] = useState(minAmount ? minAmount : 1);
  const [showWarn, setShowWarn] = useState(false);

  const showWarning = () => {
    setShowWarn(true);
    setTimeout(() => {
      setShowWarn(false);
    }, 2000);
  };
  useEffect(() => {
    if (amount < minAmount) {
      showWarning();
    }
  }, [amount, minAmount]);

  const {
    selectPledge,
    openThanksModal,
    closePledgeModal,
    updateCurrentAmount,
    updateBackers,
  } = useGlobalContext();
  return (
    <Wrapper isSelected={selected} outOfStock={outOfStock}>
      <div
        className="header"
        onClick={(e) => {
          if (!outOfStock) {
            selectPledge(title);
          }
        }}
      >
        <div className="container-1">
          {selected ? (
            <MdRadioButtonChecked className="radio-icon active" />
          ) : (
            <MdRadioButtonUnchecked className="radio-icon" />
          )}
          <div className="title">
            <b className={`${outOfStock ? "disabled-text" : ""}`}>{title}</b>
            {minAmount && <p>Pledge ${minAmount} or more</p>}
          </div>
        </div>
        {(stock || outOfStock) && (
          <div className="stock stock-1">
            <h3 className={`${outOfStock ? "disabled-text" : ""}`}>{stock}</h3>
            <span>left</span>
          </div>
        )}
      </div>
      <p className="description">{description}</p>
      {(stock || outOfStock) && (
        <div className="stock stock-2">
          <h3 className={`${outOfStock ? "disabled-text" : ""}`}>{stock}</h3>
          <span>left</span>
        </div>
      )}
      {selected && (
        <div className="footer">
          <p>Enter your pledge</p>
          <div className="continue">
            <div className="amount btn">
              <span>$</span>
              <input
                type="text"
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
            </div>
            <div
              className="btn"
              onClick={() => {
                if (amount < 1 || amount < minAmount) {
                  showWarning();
                } else {
                  closePledgeModal();
                  openThanksModal();
                  selectPledge("");
                  updateCurrentAmount(amount);
                  updateBackers();
                }
              }}
            >
              Continue
            </div>
          </div>
        </div>
      )}
      {showWarn && (
        <AlertModal
          message={`Amount should be greater than ${minAmount ? minAmount : 1}`}
        />
      )}
    </Wrapper>
  );
}
const Wrapper = styled.article`
  display: grid;
  row-gap: 1.1rem;
  border: 2px solid var(--clr-light-grey);
  padding: 1.25rem;
  border-radius: 0.5rem;
  opacity: ${(props) => (props.outOfStock ? 0.7 : 1)};
  ${(props) => props.isSelected && `border: 3px solid var(--clr-primary-2)`};
  .container-1 {
    display: flex;
    align-items: center;
  }
  .radio-icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    cursor: pointer;
    color: var(--clr-light-grey);
  }
  .radio-icon.active {
    color: var(--clr-primary-2);
  }
  .stock.stock-1 {
    display: none;
  }
  .title b {
    font-size: 1.2rem;
    cursor: pointer;
  }
  .title b:hover {
    color: var(--clr-primary-2);
  }
  .title p {
    color: var(--clr-primary-2);
    font-weight: 500;
    font-size: 1rem;
  }
  .disabled-text {
    color: var(--clr-dark-grey);
  }
  b.disabled-text:hover {
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
    margin-bottom: 0.25rem;
  }
  .amount {
    background-color: #fff;
    border: 1px solid var(--clr-primary-1);
    padding-right: 0.5rem;
    /* padding-right: 0.25rem; */
    margin-right: 1rem;
  }
  .amount span {
    color: var(--clr-dark-grey);
    font-weight: 700;
  }
  .amount input {
    color: #000;
    font-size: 1.05rem;
    font-weight: 700;
    border: none;
    width: 3rem;
    margin-left: 0.25rem;
    letter-spacing: 1px;
  }
  .continue {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .continue .btn {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .footer p {
    color: var(--clr-dark-grey);
    font-size: 1rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  .amount input:focus {
    outline: none;
  }
  .footer {
    border-top: 2px solid var(--clr-light-grey);
    padding-top: 1rem;
  }
  @media screen and (min-width: 768px) {
    .header,
    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .title {
      display: flex;
      align-items: center;
    }
    .container-1 b {
      font-size: 1.25rem;
      margin-right: 1rem;
    }
    .stock.stock-1 {
      display: flex;
    }
    .stock.stock-2 {
      display: none;
    }
  }
`;

export default Pledge;
