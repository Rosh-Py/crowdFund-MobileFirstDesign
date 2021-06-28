import { NavbarModal, Hero, PageContent } from "./components";
import { useGlobalContext } from "./globalContext";
import styled from "styled-components";
import PledgeThanks from "./components/PledgeThanks";

function App() {
  const { isNavModalOpen, isThanksModalOpen } = useGlobalContext();
  return (
    <div className="App">
      <Hero />
      {isNavModalOpen && <NavbarModal />}
      {isThanksModalOpen && <PledgeThanks />}
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
