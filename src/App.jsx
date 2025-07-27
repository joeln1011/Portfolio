import Container from '@mui/material/Container';
import NavBar from './components/NavBar/NavBar';
import BarsAnimation from './components/BarsAnimation/BarsAnimation';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
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
      {/* <HomePage /> */}
      <ServicesPage />
    </Container>
  );
}

export default App;
