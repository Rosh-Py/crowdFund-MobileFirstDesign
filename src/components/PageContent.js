import React from "react";
import { BackProject, Backers, About } from "./";
import { backersDetails } from "../data";
import styled from "styled-components";

const {
  amount: { current, target },
  backers,
  daysLeft,
} = backersDetails;

function PageContent() {
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
const Wrapper = styled.section`
  max-width: 690px;
  margin: auto;
  display: grid;
  row-gap: 2rem;
`;
export default PageContent;
