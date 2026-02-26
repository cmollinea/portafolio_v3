import { AnimatedContainer } from './AnimatedContainer';
import { BentoContainer } from './BentoContainer';
import Astro from '../icons/Astro';
import Css from '../icons/CSS';
import Git from '../icons/Git';
import HTML from '../icons/HTML';
import JavaScript from '../icons/JavaScript';
import Next from '../icons/Next';
import React from '../icons/React';
import TailwndCss from '../icons/TailwndCss';
import TypeScript from '../icons/TypeScript';

const techStack = [
  { component: HTML, label: 'HTML' },
  { component: Css, label: 'CSS' },
  { component: JavaScript, label: 'JavaScript' },
  { component: TypeScript, label: 'TypeScript' },
  { component: React, label: 'React' },
  { component: TailwndCss, label: 'Tailwind' },
  { component: Next, label: 'Next.js' },
  { component: Astro, label: 'Astro' },
  { component: Git, label: 'Git' }
];

function MotionStack() {
  return (
    <AnimatedContainer key='Skills Container' className='col-span-12 bento-container'>
      <p className='section-label mb-6'>Tech Stack</p>
      <div className='grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-9 gap-2'>
        {techStack.map((tech, index) => (
          <AnimatedContainer key={index} delay={index * 0.05}>
            <BentoContainer className='flex flex-col items-center justify-center gap-2 p-3 rounded-xl transition-all duration-150 group cursor-default hover:bg-primary/5'>
              <tech.component className='h-7 group-hover:scale-110 transition-transform duration-150' />
              <span className='text-[10px] font-mono text-muted group-hover:text-primary transition-colors duration-150 text-center leading-tight'>
                {tech.label}
              </span>
            </BentoContainer>
          </AnimatedContainer>
        ))}
      </div>
    </AnimatedContainer>
  );
}

export default MotionStack;
