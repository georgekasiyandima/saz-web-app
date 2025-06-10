import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import News from './pages/News';
import Certifications from './pages/Certifications'; // Create this page
import Membership from './pages/Membership'; // Create this page
import Registration from './pages/Registration';
import Contests from './pages/Contests'; // Import Contests page

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main">
          <Suspense
            fallback={
              <div className="loading">
                Loading...
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/news" element={<News />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/contests" element={<Contests />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;