// Global brand + contact configuration. Change these to rebrand for any client.

export const BRAND = {
  name: 'IRONCORE',
  nameAccent: 'FITNESS',
  tagline: 'Train hard. Live strong.',
  established: 2016,
}

export const CONTACT = {
  phone: '+91 98765 43210',
  phoneRaw: '+919876543210',
  whatsapp: '919876543210',
  whatsappMessage: "Hi IRONCORE FITNESS! I'd like to know more about your memberships and a free trial.",
  email: 'hello@ironcorefitness.in',
  addressLine1: '42 Strength Avenue, Jubilee Hills',
  addressLine2: 'Hyderabad, Telangana 500033',
  mapsQuery: 'Jubilee Hills Hyderabad',
  mapsEmbed: 'https://www.google.com/maps?q=Jubilee+Hills+Hyderabad&output=embed',
}

export const HOURS = [
  { day: 'Monday – Saturday', time: '5:00 AM – 11:00 PM' },
  { day: 'Sunday', time: '6:00 AM – 10:00 PM' },
]

export const SOCIALS = [
  { name: 'Instagram', href: 'https://instagram.com', icon: 'Instagram' },
  { name: 'Facebook', href: 'https://facebook.com', icon: 'Facebook' },
  { name: 'YouTube', href: 'https://youtube.com', icon: 'Youtube' },
]

// Navigation — each item maps to a section id used for smooth scrolling.
export const NAV_LINKS = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Programs', to: 'programs' },
  { label: 'Trainers', to: 'trainers' },
  { label: 'Membership', to: 'membership' },
  { label: 'Schedule', to: 'schedule' },
  { label: 'Gallery', to: 'gallery' },
  { label: 'Contact', to: 'contact' },
]

// A few trust figures shown in the hero + about.
export const STATS = [
  { value: 500, suffix: '+', label: 'Active Members' },
  { value: 15, suffix: '+', label: 'Expert Trainers' },
  { value: 30, suffix: '+', label: 'Machines' },
  { value: 10, suffix: '+', label: 'Years Experience' },
]
