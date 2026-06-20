import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import TestimonialsSection from '../components/TestimonialsSection'

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para visitarnos?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Encuentra nuestros mejores productos y promociones exclusivas en HUT Bazar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center bg-white text-primary font-bold px-8 py-3 rounded-lg hover:shadow-lg transition"
            >
              Ver Productos
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <a
              href="https://maps.google.com/maps?q=43.36982780699617,-5.838106605206306"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white bg-opacity-20 text-white font-bold px-8 py-3 rounded-lg hover:bg-opacity-30 transition"
            >
              Ubicación
            </a>
          </div>
        </div>
      </section>

      <TestimonialsSection />
    </div>
  )
}

export default Home