import React from 'react'
import { Star } from 'lucide-react'

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'María González',
      role: 'Cliente',
      text: 'Excelente variedad y precios muy competitivos. El personal es muy atento.',
      rating: 5,
    },
    {
      name: 'Carlos Fernández',
      role: 'Cliente',
      text: 'Encontré todo lo que buscaba y más. Recomiendo HUT Bazar sin dudarlo.',
      rating: 5,
    },
    {
      name: 'Ana Rodríguez',
      role: 'Cliente',
      text: 'Productos de calidad y atención personalizada. ¡Mi lugar favorito!',
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Opiniones reales de personas que confían en nosotros
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection