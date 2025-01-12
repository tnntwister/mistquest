import { Encounter } from '@/types/encounter';

export const encounters: Encounter[] = [
  {
    id: 'embuscade_bandits',
    label: 'Embuscade de Bandits',
    description: 'Des bandits surgissent des fourrés',
    type: 'combat',
    region: 'hinterlands',
    rank: 'dangerous',
    details: {
      theme: 'conflit',
      action: 'attaquer',
      threats: ['embuscade', 'supériorité numérique'],
      opportunities: ['négociation possible', 'butin potentiel']
    },
    moves: ['Face Danger', 'Enter the Fray', 'Strike']
  },
  {
    id: 'voyageur_mysterieux',
    label: 'Voyageur Mystérieux',
    description: 'Un voyageur solitaire approche sur le chemin',
    type: 'social',
    region: 'ravenland',
    disposition: 'neutral',
    details: {
      theme: 'mystère',
      action: 'proposer',
      features: ['cape usée', 'bâton de marche'],
      opportunities: ['informations', 'commerce']
    },
    moves: ['Gather Information', 'Compel', 'Make a Connection']
  },
  {
    id: 'ruines_anciennes',
    label: 'Ruines Anciennes',
    description: 'Vous découvrez les vestiges d\'une ancienne structure',
    type: 'exploration',
    region: 'tempest_hills',
    rank: 'formidable',
    details: {
      theme: 'découverte',
      action: 'explorer',
      features: ['murs effondrés', 'symboles mystérieux'],
      threats: ['pièges', 'gardiens'],
      opportunities: ['artefacts', 'connaissances']
    },
    moves: ['Explore a Waypoint', 'Face Danger', 'Secure an Advantage']
  }
]; 