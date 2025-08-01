import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import RecipeDetails from './pages/RecipeDetails'
import Favorite from './components/Favorite'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className="bg-orange-50 min-h-screen flex flex-col">
      <Header />
      <Toaster position="top-center" reverseOrder={false} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
