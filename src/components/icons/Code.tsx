import { cn } from '../../lib/utils';

type Props = {
  className?: string;
};

function Code({ className }: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className={cn(className, 'w-5 h-5 text-primary mr-0.5')}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z'
      />
    </svg>
  );
}
export default Code;
