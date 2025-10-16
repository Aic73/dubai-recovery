export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  price?: string
  duration: string
}

export interface Area {
  id: string
  name: string
  emirate: string
  popular: boolean
}

export interface ContactFormData {
  name: string
  phone: string
  email?: string
  location: string
  service: string
  message: string
  emergency: boolean
}

export interface Testimonial {
  id: string
  name: string
  rating: number
  comment: string
  date: string
  service: string
}

export interface TeamMember {
  id: string
  name: string
  position: string
  experience: string
  image?: string
  description: string
}