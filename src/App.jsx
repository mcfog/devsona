import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Landing from './pages/Landing';
import Test from './pages/Test';
import Result from './pages/Result';
import AllTypes from './pages/AllTypes';

function App() {
  const [lang, setLang] = useState(() => {
    // Auto-detect browser language
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.toLowerCase().startsWith('zh') ? 'cn' : 'en';
  });

  return (
    <Router>
      <header className="app-header">
        <Link to="/" className="logo">DEVSONA</Link>
        <button
          className="lang-switch"
          onClick={() => setLang(lang === 'cn' ? 'en' : 'cn')}
        >
          {lang === 'cn' ? 'En' : '中'}
        </button>
      </header>
      <Routes>
        <Route path="/" element={<Landing lang={lang} />} />
        <Route path="/test" element={<Test lang={lang} />} />
        <Route path="/result" element={<Result lang={lang} />} />
        <Route path="/result/:type" element={<Result lang={lang} />} />
        <Route path="/types" element={<AllTypes lang={lang} />} />
      </Routes>
    </Router>
  );
}

export default App;
