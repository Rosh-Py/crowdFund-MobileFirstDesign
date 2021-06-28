import React from "react";
import styled from "styled-components";
import { MdWarning } from "react-icons/md";

function AlertModal({ message }) {
  return (
    <Wrapper>
      <div className="container">
        <MdWarning className="warning" />
        <p>{message}</p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  margin-top: 2rem;
  justify-content: center;
  width: 100%;
  .container {
    display: flex;
    justify-content: center;
    background: #fff;
    padding: 0.5rem;
    border-radius: 0.5rem;
  }
  .container p {
    font-size: 1rem;
    font-weight: 500;
    color: black;
  }
  .warning {
    font-size: 1.5rem;
    color: orange;
    margin-right: 0.25rem;
  }
`;
export default AlertModal;
