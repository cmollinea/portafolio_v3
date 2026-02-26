import { type SyntheticEvent, useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

function Form() {
  const formRef = useRef<null | HTMLFormElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [body, setBody] = useState<null | HTMLElement>(null);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    setBody(document.body);
  }, []);

  const sendEmail = (e: SyntheticEvent) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        'service_e9w0kwi',
        'template_yc9r5a7',
        formRef.current as HTMLFormElement,
        'XE6Ik-xKdueAIp44K'
      )
      .then(
        () => {
          toast.success('Message sent!');
          setIsOpen(false);
          setCharCount(0);
        },
        () => {
          toast.error('Something went wrong. Try again!');
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <>
      <Toaster position='top-center' richColors />

      {/* Trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        className='group flex items-center justify-between w-full p-3 rounded-xl border border-border bg-primary/5 hover:bg-primary/10 hover:border-primary/30 transition-all duration-150'
      >
        <div className='flex items-center gap-3'>
          <span className='text-primary'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' />
            </svg>
          </span>
          <div className='text-left'>
            <p className='text-sm font-medium text-foreground leading-tight'>
              Send a message
            </p>
            <p className='text-[11px] font-mono text-muted leading-tight mt-0.5'>
              Direct message via email
            </p>
          </div>
        </div>
        <span className='text-muted group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150 text-sm'>
          ↗
        </span>
      </button>

      {body &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { delay: 0.1 } }}
                key='form-overlay'
                className='fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-6 backdrop-blur-xl bg-background/30'
                onClick={() => setIsOpen(false)}
              >
                <motion.form
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40, transition: { duration: 0.15 } }}
                  transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.35 }}
                  ref={formRef}
                  onSubmit={(e) => sendEmail(e)}
                  className='bg-card border border-border rounded-t-2xl sm:rounded-2xl w-full sm:max-w-md flex flex-col shadow-2xl overflow-hidden'
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Header */}
                  <div className='flex items-center justify-between px-5 py-4 border-b border-border'>
                    <div className='flex items-center gap-3'>
                      <div className='h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='15'
                          height='15'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' />
                        </svg>
                      </div>
                      <div>
                        <p className='text-sm font-semibold text-foreground leading-tight'>
                          Send a message
                        </p>
                        <p className='text-[11px] font-mono text-muted mt-0.5'>
                          cympledev · carlos@email
                        </p>
                      </div>
                    </div>
                    <button
                      type='button'
                      onClick={() => setIsOpen(false)}
                      className='h-7 w-7 rounded-full flex items-center justify-center text-muted hover:text-foreground hover:bg-neutral-500/10 transition-all duration-150 text-xs'
                    >
                      ✕
                    </button>
                  </div>

                  {/* Body */}
                  <div className='p-5 flex flex-col gap-4'>
                    <div className='relative'>
                      <textarea
                        defaultValue=''
                        required
                        rows={6}
                        name='message'
                        autoComplete='off'
                        placeholder="Hey Carlos, let's talk about..."
                        maxLength={1000}
                        onChange={(e) => setCharCount(e.target.value.length)}
                        className='outline-none focus:ring-1 focus:ring-primary/40 border border-border focus:border-primary/40 bg-neutral-500/5 w-full px-4 py-3 transition-all duration-150 rounded-xl text-sm text-foreground placeholder:text-muted resize-none'
                      />
                      <span className='absolute bottom-3 right-3 text-[10px] font-mono text-muted/50'>
                        {charCount}/1000
                      </span>
                    </div>

                    {/* Footer */}
                    <div className='flex items-center justify-between'>
                      <p className='text-[11px] font-mono text-muted'>
                        I'll reply within 24h ✦
                      </p>
                      <div className='flex items-center gap-2'>
                        <button
                          type='button'
                          onClick={() => setIsOpen(false)}
                          className='px-4 py-2 text-sm text-muted hover:text-foreground transition-colors rounded-lg hover:bg-neutral-500/5'
                        >
                          Cancel
                        </button>
                        <button
                          type='submit'
                          disabled={isSending || charCount === 0}
                          className='inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-primary text-white text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed'
                        >
                          {isSending ? (
                            <>
                              <svg
                                className='animate-spin h-3.5 w-3.5'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                              >
                                <circle
                                  className='opacity-25'
                                  cx='12'
                                  cy='12'
                                  r='10'
                                  stroke='currentColor'
                                  strokeWidth='4'
                                />
                                <path
                                  className='opacity-75'
                                  fill='currentColor'
                                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z'
                                />
                              </svg>
                              Sending...
                            </>
                          ) : (
                            'Send ↗'
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.form>
              </motion.div>
            )}
          </AnimatePresence>,
          body
        )}
    </>
  );
}

export default Form;
