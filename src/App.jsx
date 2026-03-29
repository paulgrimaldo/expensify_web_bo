import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LangProvider } from './i18n/LangContext'
import Navbar from './components/Navbar.jsx'
import Home from './Home.jsx'
import LegalPage from './components/LegalPage.jsx'

export default function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<LegalPage type="terms" />} />
          <Route path="/privacy" element={<LegalPage type="privacy" />} />
        </Routes>
      </BrowserRouter>
    </LangProvider>
  )
}
