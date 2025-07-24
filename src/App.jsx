import Box from '@mui/material/Box';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage';
import Container from '@mui/material/Container';
function App() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <Box>
        <NavBar />
      </Box>
      <Box sx={{ height: 'calc(100vh - 60px)' }}>
        <HomePage />
      </Box>
    </Container>
  );
}

export default App;
