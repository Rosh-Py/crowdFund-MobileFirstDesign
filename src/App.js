import { NavbarModal, Hero, PageContent, BackProjectModal } from "./components";
import { useGlobalContext } from "./globalContext";
import styled from "styled-components";
import PledgeThanks from "./components/PledgeThanks";

function App() {
  const { isNavModalOpen, isThanksModalOpen, isPledgeModalOpen } =
    useGlobalContext();
  return (
    <div className="App">
      <Hero />
      {isNavModalOpen && <NavbarModal />}
      {isThanksModalOpen && <PledgeThanks />}
      {isPledgeModalOpen && <BackProjectModal />}
      <Wrapper>
        <PageContent />
      </Wrapper>
    </div>
  );
}
const Wrapper = styled.div`
  transform: translateY(-4rem);
`;

export default App;
