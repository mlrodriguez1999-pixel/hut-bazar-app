import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Contacto</h1>
          <p className="text-xl text-white/90">
            ¿Tienes preguntas? Estamos aquí para ayudarte
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Información de Contacto
                </h2>
              </div>

              {/* Contact Items */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Ubicación</h3>
                    <p className="text-gray-600">
                      Asturias, España<br />
                      43.3698°N, 5.8381°W
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Teléfono</h3>
                    <a href="tel:+34123456789" className="text-primary hover:underline">
                      +34 123 456 789
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                    <a href="mailto:info@hutbazar.es" className="text-primary hover:underline">
                      info@hutbazar.es
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Horario</h3>
                    <p className="text-gray-600">
                      Lunes - Viernes: 9:00 - 18:00<br />
                      Sábados: 10:00 - 14:00<br />
                      Domingos: Cerrado
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Envíanos un mensaje
              </h2>

              {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  ¡Mensaje enviado correctamente! Te responderemos pronto.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Asunto del mensaje"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tu mensaje aquí..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-opacity-90 transition"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Visita nuestro mapa
          </h2>
          <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181.27150873646977!2d-5.838106605206306!3d43.36982780699617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd368d002cbbdaab%3A0xfbc7e843e9b17778!2sHUT%20Bazar!5e0!3m2!1ses!2ses!4v1781966561784!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact