import React from 'react'
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">HUT Bazar</h3>
            <p className="text-gray-400 leading-relaxed">
              Tu tienda de confianza para los mejores productos de bazar en Asturias. Calidad, variedad y atención personalizada.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin size={18} />
                <span>Asturias, España</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={18} />
                <a href="tel:+34123456789" className="hover:text-primary transition">
                  +34 123 456 789
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} />
                <a href="mailto:info@hutbazar.es" className="hover:text-primary transition">
                  info@hutbazar.es
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-primary p-2 rounded-lg hover:bg-secondary transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-primary p-2 rounded-lg hover:bg-secondary transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-primary p-2 rounded-lg hover:bg-secondary transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 mb-8" />

        <div className="text-center text-gray-400">
          <p>&copy; 2024 HUT Bazar. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer