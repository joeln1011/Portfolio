import NavBar from './components/NavBar/NavBar';
import Container from '@mui/material/Container';
import HomePage from './pages/HomePage';
import BarsAnimation from './components/BarsAnimation/BarsAnimation';
function App() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        height: '100vh',
      }}
    >
      <NavBar />
      <BarsAnimation />
      <HomePage />
    </Container>
  );
}

export default App;
