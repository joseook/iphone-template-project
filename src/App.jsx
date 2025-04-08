import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';

// Import pages
import HomePage from './pages/HomePage';
import StorePage from './pages/StorePage';
import MacPage from './pages/MacPage';
import IPhonePage from './pages/IPhonePage';
import SupportPage from './pages/SupportPage';

import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <main className="bg-black min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/mac" element={<MacPage />} />
            <Route path="/iphone" element={<IPhonePage />} />
            <Route path="/support" element={<SupportPage />} />
          </Routes>
          <Footer />
        </main>
      </AppProvider>
    </BrowserRouter>
  )
}

export default Sentry.withProfiler(App);
