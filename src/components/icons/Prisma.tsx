import { cn } from '../../lib/utils';

type Props = { className?: string };

function Prisma({ className }: Props) {
  return (
    <svg
      role='img'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('h-8', className)}
    >
      <title>Prisma</title>
      <path
        className='fill-foreground'
        d='M0 18.945 13.546.195a.392.392 0 0 1 .32-.165.388.388 0 0 1 .388.337l2.31 18.494-9.698 5.13a.9.9 0 0 1-.838.003zm14.985 4.875-2.413-19.32L24 9.31z'
      />
    </svg>
  );
}

export default Prisma;
