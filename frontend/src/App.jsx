import './App.css';
import Viewproduct from './components/Viewproduct';
import Navbar from './components/Navbar';
import Addproduct from './components/Addproduct';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Viewproduct />} />
        <Route path="/addproduct" element={<Addproduct />} />
      </Routes>
    </>
  );
}

export default App;
