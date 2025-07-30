import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Container from '@mui/material/Container';
import NavBar from './components/NavBar/NavBar';
import BarsAnimation from './components/BarsAnimation/BarsAnimation';
import HomePage from './pages/HomePage/HomePage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import ResumePage from './pages/ResumePage/ResumePage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
function App() {
  const location = useLocation();

  return (
    <Container disableGutters maxWidth={false}>
      <NavBar />
      <BarsAnimation key={location.pathname} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Container>
  );
}

export default App;
