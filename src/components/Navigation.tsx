import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">HB</span>
            </div>
            <span className="text-xl font-bold text-gray-800">HUT Bazar</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-primary transition">
              Inicio
            </Link>
            <Link to="/products" className="text-gray-600 hover:text-primary transition">
              Productos
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-primary transition">
              Sobre Nosotros
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-primary transition">
              Contacto
            </Link>
          </div>

          {/* CTA Button */}
          <a
            href="https://maps.google.com/maps?q=43.36982780699617,-5.838106605206306"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition"
          >
            Ubicación
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-600 hover:text-primary"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              to="/"
              className="block px-4 py-2 text-gray-600 hover:bg-primary hover:text-white rounded transition"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              to="/products"
              className="block px-4 py-2 text-gray-600 hover:bg-primary hover:text-white rounded transition"
              onClick={() => setIsOpen(false)}
            >
              Productos
            </Link>
            <Link
              to="/about"
              className="block px-4 py-2 text-gray-600 hover:bg-primary hover:text-white rounded transition"
              onClick={() => setIsOpen(false)}
            >
              Sobre Nosotros
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-2 text-gray-600 hover:bg-primary hover:text-white rounded transition"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
            <a
              href="https://maps.google.com/maps?q=43.36982780699617,-5.838106605206306"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 bg-primary text-white rounded hover:bg-opacity-90 transition text-center"
            >
              Ubicación
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation