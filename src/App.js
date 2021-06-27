import { NavbarModal, Hero, PageContent } from "./components";
import { useGlobalContext } from "./globalContext";
import styled from "styled-components";

function App() {
  const { isNavModalOpen } = useGlobalContext();
  return (
    <div className="App">
      <Hero />
      {isNavModalOpen && <NavbarModal />}
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
