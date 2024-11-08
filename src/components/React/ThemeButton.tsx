import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function ThemeButton() {
  const [theme, setThemeState] = useState<'light' | 'dark' | 'system'>('light');

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setThemeState(isDarkMode ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    const isDark =
      theme === 'dark' ||
      (theme === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
  }, [theme]);
  return (
    <>
      <button
        key={'dark'}
        className=' h-7 w-7  flex items-center place-content-center border rounded-md border-neutral-500/20  bg-neutral-500/5'
        onClick={() =>
          setThemeState((theme) => (theme === 'dark' ? 'light' : 'dark'))
        }
      >
        <div className='relative h-5 w-5 overflow-hidden'>
          {' '}
          {theme === 'light' ? (
            <AnimatePresence>
              <motion.svg
                key={'light'}
                initial={{ opacity: 0, rotate: -100, translateY: 50 }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  translateY: 0
                }}
                exit={{ opacity: 0, rotate: -100, translateY: 50 }}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-5 w-5 absolute inset-0'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z'
                />
              </motion.svg>
            </AnimatePresence>
          ) : (
            <AnimatePresence>
              <motion.svg
                key={'dark'}
                initial={{ opacity: 0, rotate: -100, translateY: -50 }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  translateY: 0
                }}
                exit={{ opacity: 0, rotate: -100, translateY: -50 }}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-5 w-5 absolute inset-0'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z'
                />
              </motion.svg>
            </AnimatePresence>
          )}
        </div>
      </button>
    </>
  );
}
