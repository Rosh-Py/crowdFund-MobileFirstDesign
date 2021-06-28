import React, { useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../globalContext";
import { ReactComponent as MasterCraftLogo } from "../images/logo-mastercraft.svg";
import { ReactComponent as BookmarkIcon } from "../images/icon-bookmark.svg";

function BackProject() {
  const [isBookmarked, setIsBookmarked] = useState(
    localStorage.getItem("bookmarked") === "true" ? true : false
  );

  const { openPledgeModal } = useGlobalContext();
  const toggleBookmark = () => {
    setIsBookmarked((state) => !state);
    localStorage.setItem("bookmarked", !isBookmarked);
  };

  return (
    <Wrapper>
      <MasterCraftLogo className="mc-icon" />
      <h4 className="text-center title">Mastercraft Bamboo Monitor Riser</h4>
      <p className="grey-text text-center">
        A beautiful &amp; handcrafted monitor stand to reduce neck and eye
        strain.
      </p>
      <div className="footer">
        <div className="btn" onClick={openPledgeModal}>
          <b>Back this project</b>
        </div>
        <div
          className={`bookmark-container ${isBookmarked ? "bookmarked" : ""}`}
          onClick={toggleBookmark}
        >
          <BookmarkIcon className="bookmark-icon" />
          <p className="bookmark-text">
            <b>Bookmark</b>
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  position: relative;
  box-shadow: var(--dark-shadow);
  padding: 2rem;
  border-radius: 0.5rem;
  background: white;
  margin: 0 2rem;
  .btn b {
    font-size: 0.85rem;
  }
  .title {
    margin-top: 1.5rem;
  }
  .mc-icon {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
  }
  .grey-text {
    color: var(--clr-dark-grey);
    margin-top: 0.25rem;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .bookmark-text {
    display: none;
  }
  .bookmark-container {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .bookmark-icon {
    box-sizing: content-box;
    border: 2px solid white;
    border-radius: 50%;
    transform: translateX(20%);
  }
  /* Bookmarked css starts */
  .bookmarked .bookmark-icon {
    circle {
      fill: var(--clr-primary-1);
    }
    path {
      fill: #fff;
    }
  }
  .bookmarked .bookmark-text {
    color: var(--clr-primary-1);
  }
  /* Bookmarked css ends */
  @media screen and (min-width: 768px) {
    .bookmark-text {
      display: block;
      color: var(--clr-dark-grey);
      padding: 0.85rem;
      padding-left: 1.5rem;
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
      background-color: var(--clr-light-grey);
    }
    .btn b {
      font-size: 1rem;
    }
  }
`;

export default BackProject;
