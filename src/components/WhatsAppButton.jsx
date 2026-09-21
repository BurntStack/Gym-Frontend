import { MessageCircle } from 'lucide-react'
import { CONTACT } from '../data/site'

// Floating WhatsApp button (bottom-right).
export default function WhatsAppButton() {
  const href = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </a>
  )
}
