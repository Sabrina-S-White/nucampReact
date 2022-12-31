import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CampsitesDirectoryPage from './pages/campsitesDirectoryPage';
import { Routes, Route } from 'react-router-dom'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import CampsiteDetailPage from './pages/CampsiteDetailPage'
import AboutPage from './pages/AboutPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCampsites } from './features/campsites/campsitesSlice';
import { fetchPartners } from './features/partners/partnersSlice';
import { fetchPromotions } from './features/promotions/promotionsSlice';
import { fetchComments } from './comments/commentsSlice';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCampsites())
    dispatch(fetchPartners())
    dispatch(fetchPromotions())
    dispatch(fetchComments())
  }, [dispatch])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='contact' element={<ContactPage />}/>
        <Route path='directory' element={<CampsitesDirectoryPage />}/>
        <Route path='about' element={<AboutPage />}/>
        <Route path='directory/:campsiteId' element={<CampsiteDetailPage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
