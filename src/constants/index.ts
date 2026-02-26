import content from './content.json';
import Astro from '../components/icons/Astro';
import Css from '../components/icons/CSS';
import Git from '../components/icons/Git';
import HTML from '../components/icons/HTML';
import JavaScript from '../components/icons/JavaScript';
import Next from '../components/icons/Next';
import React from '../components/icons/React';
import TailwndCss from '../components/icons/TailwndCss';
import TypeScript from '../components/icons/TypeScript';
import animecu from '../assets/images/animecu.webp';
import samu from '../assets/images/samu.webp';
import bazar from '../assets/images/bazar.webp';
import bill from '../assets/images/bill.webp';
import calcuplador from '../assets/images/calcuplador.webp';
import countinkly from '../assets/images/countinkly.webp';
import mixologa from '../assets/images/mixologa.webp';
import lambda from '../assets/images/lambda.webp';
import movieParadise from '../assets/images/movie-paradise.webp';

type Stack = {
  component: ({ className }: { className?: string }) => JSX.Element;
  className?: string;
}[];

export const stack: Stack = [
  { component: HTML },
  { component: Css },
  { component: JavaScript },
  { component: TypeScript },
  { component: React, className: 'lg:col-span-2 lg:row-span-2' },
  { component: TailwndCss, className: 'lg:col-span-2 lg:row-span-2' },
  { component: Next, className: 'col-span-2 lg:row-span-2' },
  { component: Astro },
  { component: Git }
];

// This variable index must match with content index
const shared = [
  {
    live: 'https://countinkly.vercel.app/kkWWjxxLXj?source=Portfolio',
    github: 'https://github.com/cmollinea/countinkly',
    image: countinkly,
    stackIndex: [6, 5, 3],
    className: 'col-span-4 row-span-2'
  },
  {
    live: 'https://samullanes.com/',
    github: 'https://github.com/cmollinea/samu-llanes-portafolio',
    image: samu,
    stackIndex: [7, 4, 5, 3],
    className: 'col-span-4 row-span-2'
  },

  {
    live: 'https://countinkly.vercel.app/tgpXR6nwE1?source=Portfolio',
    github: 'https://github.com/cmollinea/lambda-solar-landing',
    image: lambda,
    stackIndex: [7, 5, 3]
  },

  {
    live: 'https://countinkly.vercel.app/V5NsLjSq27?source=Portfolio',
    github: 'https://github.com/cmollinea/movie-paradise',
    image: movieParadise,
    stackIndex: [6, 5, 3],
    className: 'col-span-4 row-span-2'
  },

  {
    live: 'https://countinkly.vercel.app/SRp5b7-Kk0?source=Portfolio',
    github: 'https://github.com/cmollinea/mixologa-menu',
    image: mixologa,
    stackIndex: [7, 5, 3]
  },

  {
    live: 'https://countinkly.vercel.app/ugJ2TNsjWF?source=Portfolio',
    github: 'https://github.com/cmollinea/calcuplator',
    image: calcuplador,
    stackIndex: [6, 5, 3]
  },

  {
    live: 'https://animecu.netlify.app/',
    github: 'https://github.com/cmollinea/AnimeCu',
    image: animecu,
    stackIndex: [6, 5, 3]
  },

  {
    live: 'https://cuban-bazar.vercel.app',
    github: 'https://github.com/cmollinea/bazar-online',
    image: bazar,
    stackIndex: [6, 5, 3]
  },
  {
    live: 'https://cuban-electric-bill.vercel.app',
    github: 'https://github.com/cmollinea/cuban-electric-bill',
    image: bill,
    stackIndex: [4, 5, 2]
  },
  {
    live: 'https://www.euforiahabana.com/',
    github: 'https://github.com/cmollinea',
    image: mixologa,
    stackIndex: [7, 5]
  }
];

export const myProjects = content.en.myWork.projects.map((project, index) => {
  return { ...project, ...shared[index] };
});
