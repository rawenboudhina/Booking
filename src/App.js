import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Destination1 from './pages/Destination1';
import Destination2 from './pages/Destination2';
import Destination3 from './pages/Destination3';
import Destination4 from './pages/Destination4';
import Destination5 from './pages/Destination5';
import Destination6 from './pages/Destination6';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route  exact path="/" element={<Home />} />
        <Route path="/destination/1" element={<Destination1 />} />
        <Route path="/destination/2" element={<Destination2 />} />
        <Route path="/destination/3" element={<Destination3 />} />
        <Route path="/destination/4" element={<Destination4 />} />
        <Route path="/destination/5" element={<Destination5 />} />
        <Route path="/destination/6" element={<Destination6 />} />
      </Routes>
    </Router>
  );
}
