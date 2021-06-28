import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
// import { pledgeRewards } from "../data";
import { v4 as uuidv4 } from "uuid";
import { Pledge } from "./";
import { useGlobalContext } from "../globalContext";

function BackProjectModal() {
  const { closePledgeModal, pledgeSelected, selectPledge, pledgeRewards } =
    useGlobalContext();
  return (
    <Wrapper>
      <div className="backproject-container">
        <FaTimes
          className="close-icon"
          onClick={() => {
            closePledgeModal();
            selectPledge("");
          }}
        />
        <h4 className="title">Back this project</h4>
        <p className="desc">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        <div className="pledge-container">
          <Pledge
            title="Pledge with no reward"
            selected={pledgeSelected === "Pledge with no reward" ? true : false}
            description="Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
          />
          {pledgeRewards.map((reward) => {
            return (
              <Pledge
                key={uuidv4()}
                {...reward}
                selected={pledgeSelected === reward.title ? true : false}
              />
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100%;
  height: auto;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: grid;
  place-items: center;
  .backproject-container {
    max-width: 768px;
    margin: 6rem 1rem 1rem;
    height: 85vh;
    overflow-y: auto;
    width: 90%;
    background-color: #fff;
    padding: 2rem;
    position: relative;
    border-radius: 0.5rem;
    /* overflow: auto; */
  }
  .close-icon {
    color: var(--clr-dark-grey);
    font-size: 1.4rem;
    position: absolute;
    top: 1rem;
    right: 2rem;
    cursor: pointer;
    transition: var(--transition);
  }
  .close-icon:hover {
    color: red;
  }
  .desc {
    color: var(--clr-dark-grey);
    margin: 1rem 0;
  }
  .pledge-container {
    display: grid;
    row-gap: 1rem;
  }
`;
export default BackProjectModal;
