import React, { useState } from 'react'
import { ShoppingBag, Heart } from 'lucide-react'

const Products: React.FC = () => {
  const [favorites, setFavorites] = useState<number[]>([])

  const products = [
    {
      id: 1,
      name: 'Juego de Mantas',
      price: '24.99€',
      image: '🧵',
      category: 'Textiles',
    },
    {
      id: 2,
      name: 'Decoración de Pared',
      price: '15.99€',
      image: '🖼️',
      category: 'Decoración',
    },
    {
      id: 3,
      name: 'Set de Almohadas',
      price: '32.99€',
      image: '🛏️',
      category: 'Textiles',
    },
    {
      id: 4,
      name: 'Accesorios de Cocina',
      price: '19.99€',
      image: '🍳',
      category: 'Cocina',
    },
    {
      id: 5,
      name: 'Macetas Decorativas',
      price: '12.99€',
      image: '🌱',
      category: 'Decoración',
    },
    {
      id: 6,
      name: 'Velas Aromáticas',
      price: '9.99€',
      image: '🕯️',
      category: 'Aromática',
    },
    {
      id: 7,
      name: 'Cestas de Almacenaje',
      price: '18.99€',
      image: '🧺',
      category: 'Organización',
    },
    {
      id: 8,
      name: 'Luces LED',
      price: '14.99€',
      image: '💡',
      category: 'Iluminación',
    },
  ]

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    )
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Nuestros Productos</h1>
          <p className="text-xl text-white/90">
            Descubre nuestra amplia variedad de artículos de bazar
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden group"
              >
                {/* Image */}
                <div className="bg-gradient-to-br from-primary to-secondary h-48 flex items-center justify-center text-6xl group-hover:scale-110 transition">
                  {product.image}
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm text-primary font-semibold mb-2">
                    {product.category}
                  </p>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {product.price}
                    </span>
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className="p-2 rounded-lg hover:bg-gray-100 transition"
                    >
                      <Heart
                        size={20}
                        className={`transition ${
                          favorites.includes(product.id)
                            ? 'fill-red-500 text-red-500'
                            : 'text-gray-400'
                        }`}
                      />
                    </button>
                  </div>
                  <button className="w-full mt-4 bg-primary text-white py-2 rounded-lg font-semibold hover:bg-opacity-90 transition flex items-center justify-center">
                    <ShoppingBag className="mr-2" size={18} />
                    Añadir al carrito
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products