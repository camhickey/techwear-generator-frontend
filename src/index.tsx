import React from 'react';
import ReactDOM from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router';
import './index.css';
import { Home } from './pages/Home';
import reportWebVitals from './reportWebVitals';
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
      <Analytics />
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
