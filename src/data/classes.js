// Weekly group-class timetable. `type` maps to an accent color in the UI.
export const CLASS_TYPES = {
  HIIT: 'hiit',
  CrossFit: 'crossfit',
  Yoga: 'yoga',
  Zumba: 'zumba',
  'Strength Circuit': 'strength',
  Mobility: 'mobility',
  'Functional Training': 'functional',
}

export const SCHEDULE = [
  {
    day: 'Monday',
    sessions: [
      { time: '6:00 AM', name: 'HIIT', coach: 'Sneha' },
      { time: '7:00 PM', name: 'Strength Circuit', coach: 'Arjun' },
    ],
  },
  {
    day: 'Tuesday',
    sessions: [
      { time: '6:30 AM', name: 'Yoga', coach: 'Priya' },
      { time: '7:00 PM', name: 'CrossFit', coach: 'Vikram' },
    ],
  },
  {
    day: 'Wednesday',
    sessions: [
      { time: '6:00 AM', name: 'Functional Training', coach: 'Sneha' },
      { time: '7:00 PM', name: 'Zumba', coach: 'Priya' },
    ],
  },
  {
    day: 'Thursday',
    sessions: [
      { time: '6:30 AM', name: 'Mobility', coach: 'Priya' },
      { time: '7:00 PM', name: 'HIIT', coach: 'Arjun' },
    ],
  },
  {
    day: 'Friday',
    sessions: [
      { time: '6:00 AM', name: 'Strength Circuit', coach: 'Vikram' },
      { time: '7:00 PM', name: 'CrossFit', coach: 'Arjun' },
    ],
  },
  {
    day: 'Saturday',
    sessions: [
      { time: '7:00 AM', name: 'Zumba', coach: 'Priya' },
      { time: '6:00 PM', name: 'Functional Training', coach: 'Sneha' },
    ],
  },
]
