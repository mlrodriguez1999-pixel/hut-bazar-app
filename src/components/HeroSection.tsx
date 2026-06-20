import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const HeroSection: React.FC = () => {
  return (
    <section className="pt-20 pb-32 bg-gradient-to-br from-primary via-purple-500 to-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Bienvenido a <br /> <span className="text-yellow-300">HUT Bazar</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Tu destino favorito para encontrar los mejores productos de bazar con calidad garantizada y precios competitivos en Asturias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center bg-white text-primary font-bold px-8 py-3 rounded-lg hover:shadow-xl hover:scale-105 transition transform"
              >
                Explorar Catálogo
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white/20 text-white font-bold px-8 py-3 rounded-lg hover:bg-white/30 transition"
              >
                Contáctanos
              </Link>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-white/10 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/5 rounded-3xl p-8 border border-white/20 backdrop-blur">
              <div className="bg-white/10 h-96 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🛍️</div>
                  <p className="text-white/80">Variedad de Productos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection