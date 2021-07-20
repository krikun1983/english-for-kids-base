export enum Pages {
  actionSetA = 'Action (set A)',
  actionSetB = 'Action (set B)',
  actionSetC = 'Action (set C)',
  adjective = 'Adjective',
  animalA = 'Animal (set A)',
  animalB = 'Animal (set B)',
  clothes = 'Clothes',
  emotion = 'Emotion',
}

export enum Path {
  main = '/',
  actionSetA = '/action_a',
  actionSetB = '/action_b',
  actionSetC = '/action_c',
  adjective = '/adjective',
  animalA = '/animal_a',
  animalB = '/animal_b',
  clothes = '/clothes',
  emotion = '/emotion',
  statistic = '/statistic',
  errorsWords = '/errors_words',
  errorsPath = '/**',
}

export const pathMainPages = [
  Path.actionSetA,
  Path.actionSetB,
  Path.actionSetC,
  Path.adjective,
  Path.animalA,
  Path.animalB,
  Path.clothes,
  Path.emotion,
];

export const nameMainPages = [
  Pages.actionSetA,
  Pages.actionSetB,
  Pages.actionSetC,
  Pages.adjective,
  Pages.animalA,
  Pages.animalB,
  Pages.clothes,
  Pages.emotion,
];

export const pathPages = [
  Path.main,
  Path.actionSetA,
  Path.actionSetB,
  Path.actionSetC,
  Path.adjective,
  Path.animalA,
  Path.animalB,
  Path.clothes,
  Path.emotion,
  Path.statistic,
];

export const namePages = [
  'Main Page',
  'Action (set A)',
  'Action (set B)',
  'Action (set C)',
  'Adjective',
  'Animal (set A)',
  'Animal (set B)',
  'Clothes',
  'Emotion',
  'Statistic',
];
