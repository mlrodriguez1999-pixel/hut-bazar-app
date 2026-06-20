import React from 'react'
import { MapPin, Clock, Package, Award } from 'lucide-react'

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Package,
      title: 'Amplio Catálogo',
      description: 'Miles de productos de bazar para todo tipo de necesidades y ocasiones',
    },
    {
      icon: Award,
      title: 'Calidad Garantizada',
      description: 'Todos nuestros productos cumplen los más altos estándares de calidad',
    },
    {
      icon: Clock,
      title: 'Horarios Accesibles',
      description: 'Abierto de lunes a sábado para tu comodidad',
    },
    {
      icon: MapPin,
      title: 'Ubicación Céntrica',
      description: 'Fácil de encontrar en el corazón de Asturias',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Somos la opción confiable para todos tus productos de bazar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection