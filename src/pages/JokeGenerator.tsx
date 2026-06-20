import React, { useState } from 'react'
import { RotateCw, Copy, Share2 } from 'lucide-react'

interface Joke {
  setup?: string
  delivery?: string
  joke?: string
  type?: string
}

const JokeGenerator: React.FC = () => {
  const [joke, setJoke] = useState<Joke | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const fetchJoke = async () => {
    setLoading(true)
    setError(null)
    setCopied(false)

    try {
      const response = await fetch(
        'https://official-joke-api.appspot.com/random_joke'
      )
      if (!response.ok) throw new Error('Failed to fetch joke')

      const data: Joke = await response.json()
      setJoke(data)
    } catch (err) {
      setError('No se pudo cargar el chiste. Intenta de nuevo.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = () => {
    if (!joke) return

    const jokText = joke.setup
      ? `${joke.setup}\n${joke.delivery}`
      : joke.joke || ''

    navigator.clipboard.writeText(jokText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareJoke = () => {
    if (!joke) return

    const jokText = joke.setup
      ? `${joke.setup}\n${joke.delivery}`
      : joke.joke || ''

    if (navigator.share) {
      navigator.share({
        title: 'Random Joke',
        text: jokText,
      })
    }
  }

  const getJokeText = () => {
    if (!joke) return ''
    return joke.setup ? `${joke.setup}\n${joke.delivery}` : joke.joke || ''
  }

  React.useEffect(() => {
    fetchJoke()
  }, [])

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">😂 Generador de Chistes</h1>
          <p className="text-xl text-white/90">
            Obtén chistes aleatorios para reír sin parar
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50 min-h-screen">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Joke Display */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block">
                  <div className="animate-spin">
                    <div className="text-6xl">🔄</div>
                  </div>
                </div>
                <p className="text-gray-600 mt-4 text-lg">
                  Buscando un chiste divertido...
                </p>
              </div>
            ) : error ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">😕</div>
                <p className="text-red-600 font-semibold mb-4">{error}</p>
              </div>
            ) : joke ? (
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-6xl mb-4">😄</div>
                  {joke.setup ? (
                    <div>
                      <p className="text-xl text-gray-800 font-semibold mb-4">
                        {joke.setup}
                      </p>
                      <p className="text-lg text-primary font-bold">
                        {joke.delivery}
                      </p>
                    </div>
                  ) : (
                    <p className="text-xl text-gray-800">{joke.joke}</p>
                  )}
                  {joke.type && (
                    <p className="text-sm text-gray-500 mt-4">
                      Tipo: {joke.type}
                    </p>
                  )}
                </div>
              </div>
            ) : null}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button
              onClick={fetchJoke}
              disabled={loading}
              className="bg-primary text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition disabled:opacity-50 flex items-center justify-center"
            >
              <RotateCw className="mr-2" size={20} />
              {loading ? 'Cargando...' : 'Nuevo Chiste'}
            </button>

            <button
              onClick={copyToClipboard}
              disabled={!joke || loading}
              className="bg-secondary text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition disabled:opacity-50 flex items-center justify-center"
            >
              <Copy className="mr-2" size={20} />
              {copied ? '¡Copiado!' : 'Copiar'}
            </button>

            <button
              onClick={shareJoke}
              disabled={!joke || loading}
              className="bg-accent text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition disabled:opacity-50 flex items-center justify-center"
            >
              <Share2 className="mr-2" size={20} />
              Compartir
            </button>
          </div>

          {/* Info Section */}
          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              💡 Sobre este generador
            </h2>
            <p className="text-gray-700">
              Este generador de chistes utiliza la API de{' '}
              <a
                href="https://official-joke-api.appspot.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                Official Joke API
              </a>
              {' '}para traerte chistes aleatorios en inglés. Presiona el botón "Nuevo Chiste" para
              obtener uno diferente cada vez.
            </p>
          </div>

          {/* Features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="text-4xl mb-3">🎲</div>
              <h3 className="font-bold text-gray-900 mb-2">Aleatorio</h3>
              <p className="text-gray-600 text-sm">
                Cada chiste es completamente aleatorio
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="text-4xl mb-3">📋</div>
              <h3 className="font-bold text-gray-900 mb-2">Copiar</h3>
              <p className="text-gray-600 text-sm">
                Copia el chiste para compartirlo
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="font-bold text-gray-900 mb-2">Rápido</h3>
              <p className="text-gray-600 text-sm">
                Obtén chistes al instante
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default JokeGenerator