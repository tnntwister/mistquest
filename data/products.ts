
export interface Price {
  [key: string]: number;
}

export interface Product {
  id: string;
  name: string;
  prices: Price[];
  description: string;
  images: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Lot Batman JDR vf (Monolith)",
    prices: [
      { EUR: 150 }, 
      { ETH: 0.001 }
    ],
    description: `
      <p>Le jeu de rôles Batman proposé par Monolith (qui fait également le jeu de figurines) avec une esthétique vraiment très réussie (ca ne crée pas du temps et un groupe pour jouer, ceci dit)</p>
      <ul>
        <li>Le livre d'univers et l'écran dans un coffret</li>
        <li>Le livre de règles</li>
        <li>Le livre d'aventure</li>
        <li>Une pochette confidentielle avec le plan de la ville, une dizaine de plans recto verso de scènes typiques de l'univers, des fiches de renseignement.</li>
        <li>2 médailles</li>
        <li>marque-pages</li>
      </ul>
    `,
    images: [
      "/images/products/batman.jpg",
      "/images/products/batman2.jpg",
      "/images/products/batman3.jpg"
    ]
  },
  {
    id: "2",
    name: "Prophecy seconde édition jdr",
    prices: [
      { EUR: 30 }
    ],
    description: `
      <p>Le livre de base de la seconde édition de Julien Blondel, sur le système qui va poser les bases du système TOTEM utilisé dans Vermine 2027 et Gods.</p>
      <p>Un coin du livre est abîmé (voir photo), le reste est en très bon état.</p>
    `,
    images: [
      "/images/products/prophecy.jpg"
    ]
  }
]; 