import {
  NavbarModal,
  Hero,
  PageContent,
  BackProjectModal,
  AlertModal,
} from "./components";
import { useGlobalContext } from "./globalContext";
import styled from "styled-components";
import PledgeThanks from "./components/PledgeThanks";

function App() {
  const {
    isNavModalOpen,
    isThanksModalOpen,
    isPledgeModalOpen,
    isAlertModalOpen,
  } = useGlobalContext();
  return (
    <div className="App">
      <Hero />
      {isNavModalOpen && <NavbarModal />}
      {isThanksModalOpen && <PledgeThanks />}
      {isPledgeModalOpen && <BackProjectModal />}
      {isAlertModalOpen && <AlertModal />}
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
