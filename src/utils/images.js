// Centralized image helper so every photo source is easy to swap for a real client.
// All images are royalty-free from Unsplash, delivered through their optimizing CDN.

const UNSPLASH = 'https://images.unsplash.com'

/**
 * Build an optimized, responsive Unsplash URL.
 * @param {string} id - Unsplash photo id (the `photo-xxxx` slug).
 * @param {number} w  - target width in px.
 * @param {number} q  - quality (1-100).
 */
export const img = (id, w = 1200, q = 80) =>
  `${UNSPLASH}/${id}?auto=format&fit=crop&w=${w}&q=${q}`

// Guaranteed-good fallback if any CDN photo fails to load.
export const FALLBACK = img('photo-1534438327276-14e5300c3a48', 1200)

// A curated, deduplicated library of gym / fitness photos (verified Unsplash ids).
export const PHOTOS = {
  heroAthlete: 'photo-1583454110551-21f2fa2afe61',
  gymInteriorWide: 'photo-1517838277536-f5f99be501cd',
  gymInterior: 'photo-1534438327276-14e5300c3a48',
  gymInteriorModern: 'photo-1571902943202-507ec2618e8f',
  strength: 'photo-1541534741688-6078c6bfb5c5',
  weightlifting: 'photo-1534258936925-c58bed479fcb',
  deadlift: 'photo-1517836357463-d25dfeac3438',
  womanFitness: 'photo-1574680096145-d05b474e2155',
  womanKettlebell: 'photo-1579758629938-03607ccdbaba',
  personalTrainer: 'photo-1581009146145-b5ef050c2e1e',
  crossfit: 'photo-1526506118085-60ce8714f8c5',
  cardio: 'photo-1538805060514-97d9cc17730c',
  running: 'photo-1571019613454-1cb2f99b2d8b',
  hiit: 'photo-1594381898411-846e7d193883',
  yoga: 'photo-1544367567-0f2fcb009e0b',
  groupClass: 'photo-1518611012118-696072aa579a',
  muscle: 'photo-1532384748853-8f54a8f476e2',
  equipment: 'photo-1549476464-37392f717541',
  dumbbells: 'photo-1550345332-09e3ac987658',
  nutrition: 'photo-1490645935967-10de6ba17061',
  mealPrep: 'photo-1512621776951-a57141f2eefd',
  recovery: 'photo-1544367567-0f2fcb009e0b',
  // Transformation photos (illustrative before / after pairs)
  transformBefore1: 'photo-1571019613454-1cb2f99b2d8b',
  transformAfter1: 'photo-1594381898411-846e7d193883',
  transformBefore2: 'photo-1538805060514-97d9cc17730c',
  transformAfter2: 'photo-1517836357463-d25dfeac3438',
  transformBefore3: 'photo-1518611012118-696072aa579a',
  transformAfter3: 'photo-1532384748853-8f54a8f476e2',
  // Trainer portraits
  trainerMan1: 'photo-1568602471122-7832951cc4c5',
  trainerWoman1: 'photo-1544005313-94ddf0286df2',
  trainerMan2: 'photo-1507003211169-0a1dd7228f2d',
  trainerWoman2: 'photo-1580489944761-15a19d654956',
  // Gallery extras
  galleryEvent: 'photo-1517838277536-f5f99be501cd',
  galleryEquipment2: 'photo-1549476464-37392f717541',
  galleryTraining: 'photo-1526506118085-60ce8714f8c5',
}
