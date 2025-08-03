import { useEffect, useState } from 'react'
import { FaUtensils } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import RandomRecipeSection from '../pages/RandomRecipeSection'

const Header = () => {
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down
        setShowHeader(false)
      } else {
        // scrolling up
        setShowHeader(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header
    className={`backdrop-blur-md bg-orange-100/60 shadow-md sticky top-0 z-50 transition-transform duration-700 ease-in-out ${
      showHeader ? 'translate-y-0' : '-translate-y-full'}`}>

        <nav className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-orange-600">
          <FaUtensils className="text-orange-500" />FlavorFinder
          </Link>

          <RandomRecipeSection/>

          {/* Navigation Links */}
          <ul className="flex flex-wrap gap-4 text-gray-800 font-medium">
            <li><Link to="/" className="text-[18px] hover:underline hover:text-orange-500 transition duration-200">Home</Link></li>
            <li><Link to="/about" className="text-[18px] hover:underline hover:text-orange-500 transition duration-200">About</Link></li>
            <li><Link to="/contact" className="text-[18px] hover:underline hover:text-orange-500 transition duration-200">Contact</Link></li>
            <li><Link to="/favorite" className="text-[18px] hover:underline hover:text-orange-500 transition duration-200">Favorite</Link></li>
          </ul>
        </nav>
    </header>
  )
}

export default Header



