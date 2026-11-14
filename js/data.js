// Chakra, note and element data.
// Tuning cents follow an approximate Javanese 7-tone gamelan tuning.

export const CHAKRAS = [
  {
    id: 'muladhara', name: 'Muladhara', en: 'Root', note: 'Ji', cents: 0,
    color: [255, 64, 72], hex: '#ff4048',
    quality: 'Grounding',
    guide: 'Feel the weight of your body resting on the earth. You are held. You are safe.',
  },
  {
    id: 'svadhisthana', name: 'Svadhisthana', en: 'Sacral', note: 'Ro', cents: 120,
    color: [255, 140, 50], hex: '#ff8c32',
    quality: 'Flow',
    guide: 'Let your breath move like water below the navel. Soft, fluid, unforced.',
  },
  {
    id: 'manipura', name: 'Manipura', en: 'Solar Plexus', note: 'Lu', cents: 258,
    color: [255, 212, 70], hex: '#ffd446',
    quality: 'Warmth',
    guide: 'Notice a small warm sun in your belly. Steady focus, quiet strength.',
  },
  {
    id: 'anahata', name: 'Anahata', en: 'Heart', note: 'Pat', cents: 539,
    color: [72, 224, 140], hex: '#48e08c',
    quality: 'Compassion',
    guide: 'Breathe into the centre of your chest. Let the heart widen with every exhale.',
  },
  {
    id: 'vishuddha', name: 'Vishuddha', en: 'Throat', note: 'Ma', cents: 675,
    color: [70, 176, 255], hex: '#46b0ff',
    quality: 'Expression',
    guide: 'Soften the throat and jaw. Let the breath pass through like a clear breeze.',
  },
  {
    id: 'ajna', name: 'Ajna', en: 'Third Eye', note: 'Nem', cents: 785,
    color: [104, 110, 255], hex: '#686eff',
    quality: 'Clarity',
    guide: 'Rest your attention between the brows. Watch thoughts pass like distant stars.',
  },
  {
    id: 'sahasrara', name: 'Sahasrara', en: 'Crown', note: 'Pi', cents: 943,
    color: [196, 120, 255], hex: '#c478ff',
    quality: 'Unity',
    guide: 'Feel the space above your head open into the sky. Nothing to hold. Only stillness.',
  },
];

export const ELEMENTS = [
  { id: 'earth', name: 'Earth', instrument: 'Gong', sanskrit: 'Prithvi' },
  { id: 'water', name: 'Water', instrument: 'Gender', sanskrit: 'Apas' },
  { id: 'fire', name: 'Fire', instrument: 'Bonang', sanskrit: 'Tejas' },
  { id: 'wind', name: 'Wind', instrument: 'Suling', sanskrit: 'Vayu' },
  { id: 'ether', name: 'Akasha', instrument: 'Genta', sanskrit: 'Akasha' },
];

export const BREATH_PATTERNS = [
  { id: 'calm', name: 'Calm', label: '5 · 5', steps: [['Inhale', 5], ['Exhale', 5]] },
  { id: 'box', name: 'Box', label: '4 · 4 · 4 · 4', steps: [['Inhale', 4], ['Hold', 4], ['Exhale', 4], ['Hold', 4]] },
  { id: 'relax', name: 'Relax', label: '4 · 7 · 8', steps: [['Inhale', 4], ['Hold', 7], ['Exhale', 8]] },
];
