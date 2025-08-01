import { FaFacebookF, FaGithub, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-100 to-yellow-100">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
        
        {/* About */}
        <div>
          <h2 className="text-xl font-bold text-orange-600 mb-3">FlavorFinder</h2>
          <p className="text-sm">
            Discover delicious meals from around the world. Search, explore, and cook your favorite recipes with ease.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md font-semibold text-orange-600 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-orange-600 font-semibold">Home</a></li>
            <li><a href="/about" className="hover:text-orange-600 font-semibold">About</a></li>
            <li><a href="/contact" className="hover:text-orange-600 font-semibold">Contact</a></li>
            <li><a href="/favorite" className="hover:text-orange-600 font-semibold">Favorite</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-md font-semibold text-orange-600 mb-3">Follow Us</h3>
          <div className="flex gap-4 text-gray-600 text-xl">
            <a href="https://www.facebook.com/sk.nayeem.922535" className="hover:text-orange-600 text-[21px]"><FaFacebookF /></a>
            <a href="https://www.instagram.com/sknayeem6906/" className="hover:text-orange-600 text-[22px]"><FaInstagram /></a>
            <a href="https://github.com/Nayeem0011" className="hover:text-orange-600 text-[22px]"><FaGithub /></a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-sm text-gray-600 py-4 border-t border-orange-200">
        © {new Date().getFullYear()} FlavorFinder. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer


