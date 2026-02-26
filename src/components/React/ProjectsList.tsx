import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { myProjects } from '../../constants';
import { stack } from '../../constants';

export function ProjectsList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [body, setBody] = useState<HTMLElement | undefined>();

  useEffect(() => {
    setBody(document.body);
  }, []);

  useEffect(() => {
    if (body) {
      body.style.overflow = openIndex !== null ? 'hidden' : 'auto';
    }
  }, [openIndex, body]);

  const info = openIndex !== null ? myProjects[openIndex] : null;

  return (
    <>
      <div className='space-y-0.5'>
        {myProjects.map((project, index) => (
          <button
            key={project.title}
            onClick={() => setOpenIndex(index)}
            className='w-full text-left group flex items-center gap-4 px-3 py-3 rounded-xl hover:bg-neutral-500/5 transition-all duration-150 border border-transparent hover:border-border'
          >
            {/* Index number */}
            <span className='text-[11px] font-mono text-muted w-5 shrink-0 text-right select-none'>
              {String(index + 1).padStart(2, '0')}
            </span>

            {/* Content */}
            <div className='flex-1 min-w-0'>
              <div className='flex items-center gap-2 flex-wrap'>
                <span className='text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-150'>
                  {project.title}
                </span>
                <div className='flex items-center gap-1 opacity-50 group-hover:opacity-100 transition-opacity'>
                  {project.stackIndex.slice(0, 3).map((si) => {
                    const icon = stack[si].component;
                    return (
                      <span key={si} className='block'>
                        {icon({ className: 'h-3 w-3' })}
                      </span>
                    );
                  })}
                </div>
              </div>
              <p className='text-xs text-muted mt-0.5 line-clamp-1 pr-4'>
                {project.description}
              </p>
            </div>

            {/* Arrow */}
            <span className='text-muted group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150 text-sm shrink-0 select-none'>
              ↗
            </span>
          </button>
        ))}
      </div>

      {body &&
        createPortal(
          <AnimatePresence>
            {info && openIndex !== null && (
              <motion.div
                key={info.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { delay: 0.12 } }}
                className='fixed z-50 inset-0 flex items-center justify-center p-4 sm:p-6 backdrop-blur-xl bg-background/20'
                onClick={() => setOpenIndex(null)}
              >
                <motion.div
                  initial={{ opacity: 0, y: 28, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{
                    opacity: 0,
                    y: 28,
                    scale: 0.97,
                    transition: { delay: 0, duration: 0.12 }
                  }}
                  transition={{ ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
                  className='relative flex flex-col md:flex-row bg-card border border-border w-full max-w-3xl md:gap-0 rounded-2xl overflow-hidden shadow-2xl'
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Image */}
                  <div className='relative w-full md:w-72 xl:w-80 shrink-0 overflow-hidden bg-neutral-900 aspect-video md:aspect-auto'>
                    <img
                      src={info.image.src}
                      alt={info.title}
                      className='w-full h-full object-cover'
                    />
                  </div>

                  {/* Info */}
                  <div className='flex flex-col gap-4 p-6 md:p-8 flex-1'>
                    <div>
                      <a
                        href={info.live}
                        rel='noopener nofollow'
                        target='_blank'
                        className='text-xl md:text-2xl font-bold text-foreground hover:text-primary flex items-center gap-1.5 w-fit transition-colors duration-150 group/link'
                      >
                        {info.title}
                        <span className='text-sm text-muted group-hover/link:text-primary group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-150'>
                          ↗
                        </span>
                      </a>

                      <div className='flex items-center gap-1.5 mt-3 flex-wrap'>
                        {info.stackIndex.map((si) => {
                          const icon = stack[si].component;
                          return (
                            <span
                              key={si}
                              className='bg-neutral-500/10 border border-border rounded-lg p-1.5 flex items-center justify-center'
                            >
                              {icon({ className: 'h-4 w-4' })}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    <p className='text-sm text-muted leading-relaxed flex-1'>
                      {info.description}
                    </p>

                    <a
                      href={info.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline w-fit'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='14'
                        height='14'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                      >
                        <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                      </svg>
                      View Code
                    </a>
                  </div>

                  {/* Close button */}
                  <button
                    className='absolute top-3 right-3 h-7 w-7 rounded-full bg-neutral-500/10 border border-border flex items-center justify-center text-muted hover:text-foreground hover:bg-neutral-500/20 transition-all duration-150 text-xs font-medium'
                    onClick={() => setOpenIndex(null)}
                  >
                    ✕
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          body
        )}
    </>
  );
}
