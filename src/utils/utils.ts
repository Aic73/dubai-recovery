import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPhoneNumber(phone: string): string {
  // Format: +971 56 344 6682
  const cleaned = phone.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{2})(\d{3})(\d{4})$/)
  if (match) {
    return `+${match[1]} ${match[2]} ${match[3]} ${match[4]}`
  }
  return phone
}

export function generateWhatsAppLink(phone: string, message: string): string {
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${phone.replace('+', '')}?text=${encodedMessage}`
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}