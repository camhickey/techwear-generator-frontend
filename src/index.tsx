import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router';
import './index.css';
import { Cyberpunk } from './pages/Cyberpunk';
import { Greyman } from './pages/Greyman';
import { Home } from './pages/Home';
import { Outdoors } from './pages/Outdoors';
import { Urban } from './pages/Urban';
import reportWebVitals from './reportWebVitals';
import { NavBar } from './components/NavBar';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  //<React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route path="/urban" element={<Urban />} />
        <Route path="/greyman" element={<Greyman />} />
        <Route path="/cyberpunk" element={<Cyberpunk />} />
        <Route path="/outdoors" element={<Outdoors />} />
      </Route>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
  //</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
