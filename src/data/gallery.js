import { PHOTOS } from '../utils/images'

// Masonry gallery items. `span` controls how tall a tile is on large screens.
export const GALLERY = [
  { id: 'g1', photo: PHOTOS.gymInteriorWide, category: 'Gym Interior', span: 'tall' },
  { id: 'g2', photo: PHOTOS.weightlifting, category: 'Equipment', span: 'normal' },
  { id: 'g3', photo: PHOTOS.deadlift, category: 'Training', span: 'normal' },
  { id: 'g4', photo: PHOTOS.groupClass, category: 'Group Classes', span: 'tall' },
  { id: 'g5', photo: PHOTOS.muscle, category: 'Transformation', span: 'normal' },
  { id: 'g6', photo: PHOTOS.crossfit, category: 'Training', span: 'normal' },
  { id: 'g7', photo: PHOTOS.womanKettlebell, category: 'Training', span: 'tall' },
  { id: 'g8', photo: PHOTOS.equipment, category: 'Equipment', span: 'normal' },
  { id: 'g9', photo: PHOTOS.personalTrainer, category: 'Trainer Sessions', span: 'normal' },
  { id: 'g10', photo: PHOTOS.gymInteriorModern, category: 'Gym Interior', span: 'normal' },
  { id: 'g11', photo: PHOTOS.hiit, category: 'Events', span: 'normal' },
  { id: 'g12', photo: PHOTOS.cardio, category: 'Equipment', span: 'tall' },
]

export const GALLERY_CATEGORIES = [
  'All',
  'Gym Interior',
  'Equipment',
  'Training',
  'Group Classes',
  'Transformation',
  'Events',
  'Trainer Sessions',
]
