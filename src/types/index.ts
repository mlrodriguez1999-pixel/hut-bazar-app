export interface Product {
  id: number
  name: string
  price: string
  image: string
  category: string
}

export interface Testimonial {
  name: string
  role: string
  text: string
  rating: number
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}