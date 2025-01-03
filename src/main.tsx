import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Outlet, Navigate } from 'react-router';
import './index.css';
import { Home } from './pages/Home';
import { NavBar } from './components/NavBar';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { ClothingStyles } from './enums/enums';
import { StylePage } from './pages/StylePage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <div className="flex flex-col min-h-screen bg-[#2d2d2d]">
              <NavBar />
              <Outlet />
            </div>
          }
        >
          <Route
            path="/urban"
            element={<StylePage clothingStyle={ClothingStyles.URBAN} />}
          />
          <Route
            path="/greyman"
            element={<StylePage clothingStyle={ClothingStyles.GREYMAN} />}
          />
          <Route
            path="/cyberpunk"
            element={<StylePage clothingStyle={ClothingStyles.CYBERPUNK} />}
          />
          <Route
            path="/outdoors"
            element={<StylePage clothingStyle={ClothingStyles.OUTDOORS} />}
          />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
