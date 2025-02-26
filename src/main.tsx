import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router';
import './index.css';
import { Home } from '@pages/Home';
import { NavBar } from '@components/NavBar';
import { NotFound } from '@pages/NotFound';
import { ClothingStyle } from '@/enums';
import { StylePage } from '@pages/StylePage';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Register } from '@pages/Register';
import { Login } from '@pages/Login';
import { Account } from '@pages/Account';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import supabase from '../supabaseClient';
import { Outfits } from '@pages/Outfits';
import { ProtectedRoute } from './components/ProtectedRoute';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
      <BrowserRouter>
        <Analytics />
        <SpeedInsights />
        <Routes>
          <Route
            element={
              <div className="flex flex-col min-h-screen bg-black">
                <NavBar />
                <Outlet />
              </div>
            }
          >
            <Route
              path="/urban"
              element={<StylePage clothingStyle={ClothingStyle.URBAN} />}
            />
            <Route
              path="/grayman"
              element={<StylePage clothingStyle={ClothingStyle.GRAYMAN} />}
            />
            <Route
              path="/cyberpunk"
              element={<StylePage clothingStyle={ClothingStyle.CYBERPUNK} />}
            />
            <Route
              path="/outdoors"
              element={<StylePage clothingStyle={ClothingStyle.OUTDOORS} />}
            />
            <Route element={<ProtectedRoute redirectPath="/login" />}>
              <Route path="/account" element={<Account />} />
              <Route path="/outfits" element={<Outfits />} />
            </Route>
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route
            element={
              <ProtectedRoute
                allowAuthenticated={false}
                redirectPath="/account"
              />
            }
          >
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          {/*<Route path="/reset-password" element={<ResetPassword />} />*/}
        </Routes>
      </BrowserRouter>
    </SessionContextProvider>
  </StrictMode>,
);
