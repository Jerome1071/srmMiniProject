import logo from './logo.svg';
import './App.css';
import Signup from './components/userValidation/Signup';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Layout from './components/Layout/Header';
import './App.css';
function App() {
  return (
    <div className="App">
      <Box className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/Home" element={<Layout><Dashboard /></Layout>} />
          </Routes>
        </BrowserRouter>
      </Box>
    </div>
  );
}

export default App;