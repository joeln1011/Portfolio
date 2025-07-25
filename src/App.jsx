import Box from '@mui/material/Box';
import NavBar from './components/NavBar/NavBar';
import Container from '@mui/material/Container';
import HomePage from './pages/HomePage';
function App() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <NavBar />
      <HomePage />
    </Container>
  );
}

export default App;
