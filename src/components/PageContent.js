import React from "react";
import { BackProject, Backers, About } from "./";
// import { backersDetails } from "../data";
import { useGlobalContext } from "../globalContext";
import styled from "styled-components";

function PageContent() {
  const { backersDetails } = useGlobalContext();
  const {
    amount: { current, target },
    backers,
    daysLeft,
  } = backersDetails;
  return (
    <Wrapper>
      <BackProject />
      <Backers
        currentAmount={current}
        targetAmount={target}
        backersCount={backers}
        daysLeft={daysLeft}
      />
      <About />
    </Wrapper>
  );
}
const Wrapper = styled.main`
  /* max-width: 690px; */
  max-width: 830px;
  margin: auto;
  display: grid;
  row-gap: 2rem;
`;
export default PageContent;
