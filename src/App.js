import { Route, Routes } from 'react-router-dom';

import './App.css';
import Body from './components/Body';
import Drums from './components/Drums';
// import Work from './components/Work';
import Nav from './components/Nav';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <Routes>
      <Route exact path="/" element={<Body />} />
        {/* <Route exact path="/footer" element={<Work />} /> */}
      <Route exact path="/drumkit" element={<Drums />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
