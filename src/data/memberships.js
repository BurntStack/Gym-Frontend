// Pricing is demo/editable data. `monthly` is the base price; other cycles are
// derived with a discount so a client can tune everything from one place.

export const BILLING_CYCLES = [
  { id: 'monthly', label: 'Monthly', months: 1, discount: 0, unit: '/mo' },
  { id: 'quarterly', label: 'Quarterly', months: 3, discount: 0.1, unit: '/mo' },
  { id: 'halfyearly', label: 'Half-Yearly', months: 6, discount: 0.18, unit: '/mo' },
  { id: 'yearly', label: 'Yearly', months: 12, discount: 0.28, unit: '/mo' },
]

export const PLANS = [
  {
    id: 'basic',
    name: 'Basic',
    monthly: 1499,
    highlight: false,
    blurb: 'Everything you need to start strong.',
    features: [
      'Full gym access',
      'Cardio equipment',
      'Strength equipment',
      'Locker access',
      'Access during all open hours',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    monthly: 2499,
    highlight: true,
    badge: 'Most Popular',
    blurb: 'The complete coaching experience.',
    features: [
      'Everything in Basic',
      'All group classes',
      'Fitness assessment',
      'Custom workout plan',
      'Nutrition guidance',
      'Progress tracking',
    ],
  },
  {
    id: 'elite',
    name: 'Elite',
    monthly: 3999,
    highlight: false,
    blurb: 'Premium 1-on-1 personal transformation.',
    features: [
      'Everything in Pro',
      'Dedicated personal trainer',
      'Monthly body analysis',
      'Custom diet plan',
      'Priority support',
      'Recovery & stretching sessions',
    ],
  },
]
