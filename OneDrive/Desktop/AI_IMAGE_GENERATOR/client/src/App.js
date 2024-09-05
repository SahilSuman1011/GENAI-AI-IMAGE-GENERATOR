import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/Theme';
import Home from './pages/Home';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden; 
  overflow-y: auto;
  transition: all 0.2s ease;
`;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: red;
  flex-direction: column;
  flex: 3;
  `;


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>

        <Wrapper> <Home/> </Wrapper>

      </Container>

    </ThemeProvider>
  );
}

export default App;


