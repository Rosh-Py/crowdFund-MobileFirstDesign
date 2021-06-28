import React from "react";
import styled from "styled-components";
import { navLinks } from "../data";
import { v4 as uuidv4 } from "uuid";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../globalContext";

function NavbarModal() {
  const { closeNavModal, isNavModalOpen } = useGlobalContext();
  return (
    <Wrapper>
      {isNavModalOpen && (
        <FaTimes className="close-icon" onClick={closeNavModal} />
      )}
      <div className="nav-links">
        {navLinks.map((link, index) => {
          return (
            <div key={uuidv4()}>
              <p>{link}</p>
              {index < navLinks.length - 1 && <hr />}
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1;
  .close-icon {
    font-size: 2rem;
    color: #fff;
    position: fixed;
    top: 2rem;
    right: 2rem;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    align-content: center;
    background: white;
    border-radius: 0.5rem;
    width: 80vw;
    margin: auto;
    transform: translateY(40%);
  }
  .nav-links p {
    font-weight: 500;
    font-size: 1.25rem;
    padding: 1.5rem;
  }
`;

export default NavbarModal;
