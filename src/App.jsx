import React from 'react';
import ReactLenis from 'lenis/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CursorProvider } from './components/Cursor/CursorContext';
import CustomCursor from './components/Cursor/CustomCursor';
import Navbar from './components/UI/Navbar';
import Home from './components/UI/Home';
import PodcastPage from './components/UI/PodcastPage';
import './App.css';

function App() {
  return (
    <ReactLenis root>
      <CursorProvider>
        <CustomCursor />
        <Router>
          <div className="app-container font-montserrat bg-[#111]" style={{ fontFamily: 'var(--font-body)' }}>
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/podcast" element={<PodcastPage />} />
            </Routes>

          </div>
        </Router>
      </CursorProvider>
    </ReactLenis>
  );
}

export default App;
