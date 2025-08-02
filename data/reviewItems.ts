import { ReviewItem } from '../types';

export const reviewItems: ReviewItem[] = [
  {
    id: 1,
    imageUrl: 'https://picsum.photos/seed/reviewWomanCentral/400/400',
    metric: '10+ YEARS OF EXPERIENCE',
    positionClasses: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    sizeClasses: 'w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44', // Responsive sizing
    zIndex: 20,
  },
  {
    id: 2,
    imageUrl: 'https://picsum.photos/seed/reviewManTopRight/300/300',
    metric: '27+ COUNTRIES REACHED',
    positionClasses: 'top-10 sm:top-12 md:top-16 right-8 sm:right-12 md:right-24', // Adjusted for responsiveness
    sizeClasses: 'w-28 h-28 sm:w-32 sm:h-32',
    zIndex: 10,
  },
  {
    id: 3,
    imageUrl: 'https://picsum.photos/seed/reviewManTopLeft/300/300',
    metric: '200+ SUCCESS CASES',
    positionClasses: 'top-20 sm:top-24 left-8 sm:left-12 md:left-16', // Adjusted for responsiveness
    sizeClasses: 'w-24 h-24 sm:w-28 sm:h-28',
    zIndex: 10,
  },
  {
    id: 4,
    imageUrl: 'https://picsum.photos/seed/reviewGamerBottomLeft/350/350',
    metric: '93%+ ENGAGEMENT GROWTH RATE',
    positionClasses: 'bottom-12 sm:bottom-16 md:bottom-20 left-8 sm:left-12 md:left-20', // Adjusted for responsiveness
    sizeClasses: 'w-32 h-32 sm:w-36 sm:h-36',
    zIndex: 10,
  },
  {
    id: 5,
    imageUrl: 'https://picsum.photos/seed/reviewWomanBottomRight/300/300',
    metric: '65M+ VIEWS',
    positionClasses: 'bottom-10 sm:bottom-12 md:bottom-16 right-12 sm:right-16 md:right-32', // Adjusted for responsiveness
    sizeClasses: 'w-24 h-24 sm:w-28 sm:h-28',
    zIndex: 10,
  },
];