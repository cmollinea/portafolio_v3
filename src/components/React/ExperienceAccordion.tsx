import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedContainer } from './AnimatedContainer';

const jobs = [
  {
    company: 'DiAngTech',
    location: 'USA',
    role: 'FullStack Developer',
    period: 'Sep 2025 – Present',
    photo: '/diangtech.jpg',
    highlights: [
      'Working on a legacy Laravel project, developing frontend modules with new features and UI components.',
      'Built an AI-powered chat application for the insurance industry using React, with Stripe payments and a custom streaming response parser.'
    ]
  },
  {
    company: 'Nexa Labs',
    location: 'Rep. Dominicana',
    role: 'FrontEnd Developer',
    period: 'Jul 2025 – Present',
    photo: null,
    highlights: [
      'Designed a property management SaaS dashboard in React — financial modules, interactive charts, auth, complex filters, and map integrations.',
      'Built a monitoring app with Next.js featuring WebSockets, drag-and-drop, and PWA support.',
      'Delivered dashboards for cabin rental, social media, and gym management platforms.'
    ]
  },
  {
    company: 'Mandao Inc.',
    location: 'Cuba',
    role: 'FrontEnd Developer',
    period: 'Nov 2024 – Ago 2025',
    photo: '/mandao.jpg',
    highlights: [
      'Migrated the authentication system to OAuth2, enhancing security and user experience.',
      'Sole developer of an admin dashboard using React, React Router, Zustand, and React Query.',
      'Optimized existing components and collaborated on RESTful API integrations.'
    ]
  },
  {
    company: 'Freelance',
    location: 'Remote',
    role: 'Web Developer',
    period: 'Feb 2024 – Present',
    photo: null,
    highlights: [
      'Built restaurant and business websites using React, Astro, and Contentful CMS.',
      'Created Katarogu — transforms CSV spreadsheets into static digital menus and catalogs.',
      'SvelteKit projects with LuciaAuth, PostgreSQL, and Prisma ORM for robust auth.'
    ]
  }
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <motion.svg
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.22, ease: 'easeInOut' }}
      xmlns='http://www.w3.org/2000/svg'
      width='14'
      height='14'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='shrink-0'
    >
      <path d='m6 9 6 6 6-6' />
    </motion.svg>
  );
}

export function ExperienceAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AnimatedContainer className='bento-container'>
      <p className='section-label mb-8' id='experience'>
        Work Experience
      </p>

      <div>
        {jobs.map((job, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={job.company}
              className='border-t border-border first:border-t-0'
            >
              <button
                onClick={() => toggle(index)}
                className='w-full text-left py-4 flex items-center justify-between gap-4 group cursor-pointer'
              >
                <div className='flex items-center gap-3.5'>
                  <span
                    className={`block h-1.5 w-1.5 rounded-full shrink-0 transition-colors duration-200 ${
                      isOpen ? 'bg-primary' : 'bg-border'
                    }`}
                  />
                  <div className='flex flex-col sm:flex-row sm:items-baseline sm:gap-2.5'>
                    <span
                      className={`font-semibold text-sm transition-colors duration-200 ${
                        isOpen
                          ? 'text-primary'
                          : 'text-foreground group-hover:text-primary'
                      }`}
                    >
                      {job.company}
                    </span>
                    <span className='text-[11px] font-mono text-muted'>
                      {job.location}
                    </span>
                  </div>
                </div>

                <div className='flex items-center gap-3 shrink-0'>
                  <span className='text-[11px] font-mono text-muted hidden sm:block'>
                    {job.period}
                  </span>
                  <span
                    className={`transition-colors duration-200 ${isOpen ? 'text-primary' : 'text-muted group-hover:text-foreground'}`}
                  >
                    <ChevronIcon open={isOpen} />
                  </span>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key={`${job.company}-content`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className='overflow-hidden'
                  >
                    <div className='pb-6 pl-5 pr-2'>
                      <div className='flex flex-wrap items-center gap-x-3 gap-y-1 mb-1'>
                        <span className='text-[10px] font-mono text-primary uppercase tracking-[0.15em] font-semibold'>
                          {job.role}
                        </span>
                        <span className='text-[11px] font-mono text-muted sm:hidden'>
                          {job.period}
                        </span>
                      </div>

                      {job.photo && (
                        <div className='mt-3 w-36 h-16 rounded-lg overflow-hidden border border-border'>
                          <img
                            src={job.photo}
                            alt={job.company}
                            className='w-full h-full object-cover'
                          />
                        </div>
                      )}

                      <ul className='mt-4 space-y-2.5'>
                        {job.highlights.map((h, i) => (
                          <li
                            key={i}
                            className='text-sm text-muted flex gap-3 leading-relaxed'
                          >
                            <span className='text-primary font-mono shrink-0 mt-0.5 select-none'>
                              ›
                            </span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </AnimatedContainer>
  );
}
