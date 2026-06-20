import React from 'react'
import { Award, Users, Heart, Target } from 'lucide-react'

const About: React.FC = () => {
  const values = [
    {
      icon: Award,
      title: 'Calidad',
      description: 'Productos de la mejor calidad para garantizar tu satisfacción',
    },
    {
      icon: Users,
      title: 'Atención al Cliente',
      description: 'Equipo profesional listo para ayudarte en todo momento',
    },
    {
      icon: Heart,
      title: 'Pasión',
      description: 'Amamos lo que hacemos y se refleja en nuestro servicio',
    },
    {
      icon: Target,
      title: 'Diversidad',
      description: 'Amplia variedad de productos para todas las necesidades',
    },
  ]

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Sobre Nosotros</h1>
          <p className="text-xl text-white/90">
            Conoce nuestra historia y misión
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Nuestra Historia
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                HUT Bazar nació hace más de 15 años con la visión de ser la mejor tienda de bazares en Asturias. Comenzamos como un pequeño negocio familiar con la convicción de ofrecer productos de calidad a precios accesibles.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                A lo largo de los años, hemos crecido manteniendo siempre nuestros valores fundamentales: honestidad, calidad y atención personalizada. Hoy somos un referente en la zona, confiados por miles de clientes satisfechos.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Continuamos innovando y mejorando nuestro catálogo para ofrecerte siempre lo mejor.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary h-96 rounded-2xl flex items-center justify-center text-9xl">
              🏪
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Lo que nos define como empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition"
                >
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <p className="text-lg text-white/90">Años de experiencia</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <p className="text-lg text-white/90">Clientes satisfechos</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <p className="text-lg text-white/90">Productos disponibles</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-lg text-white/90">Garantía de calidad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Profesionales dedicados a tu satisfacción
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['👨‍💼', '👩‍💼', '👨‍💼'].map((emoji, index) => (
              <div key={index} className="text-center bg-gray-50 p-8 rounded-xl">
                <div className="text-6xl mb-4 flex justify-center">{emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Miembro del Equipo
                </h3>
                <p className="text-gray-600">Profesional comprometido con la excelencia</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About