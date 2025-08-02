

import React, { useEffect, useRef } from 'react';

const MAIN_QUOTES_DATA = [
  "“I believe our civilization stands on the cusp of a\ntechnological revolution with the power to reshape\nlife as we know it.",
  "To ignore the millennia of human struggle that serves\nas our society’s foundation, however — to merely ‘disrupt,’\nwith the blitheness that has accompanied so much of this\ncentury’s innovation — would be an intolerable mistake.",
  "This revolution must build on that foundation, faithfully.”"
];
const ATTRIBUTION_TEXT = "— Fei-Fei Li";

interface ScrollingQuotesProps {
  contentAboveRef: React.RefObject<HTMLDivElement>;
}

const ScrollingQuotes: React.FC<ScrollingQuotesProps> = ({ contentAboveRef }) => {
  const animationAreaRef = useRef<HTMLDivElement>(null);
  const wordSpansRef = useRef<HTMLSpanElement[]>([]);
  const paragraphRefs = useRef<HTMLParagraphElement[]>([]);


  // Prepare word spans and paragraph refs once on mount
  useEffect(() => {
    if (animationAreaRef.current) {
      wordSpansRef.current = Array.from(animationAreaRef.current.querySelectorAll('.word'));
      paragraphRefs.current = Array.from(animationAreaRef.current.querySelectorAll('p[data-quote-para]'));
    }
  }, []);

  useEffect(() => {
    const animationArea = animationAreaRef.current;
    const contentAbove = contentAboveRef.current;
    const allWordSpans = wordSpansRef.current;
    const allParagraphs = paragraphRefs.current;
    
    if (!animationArea || !contentAbove || allWordSpans.length === 0) return;

    // Reset styles
    allWordSpans.forEach(span => {
      span.style.backgroundSize = '0% 100%';
      span.style.transition = 'background-size 0.4s ease-in-out'; // Added transition to span
    });
    allParagraphs.forEach(p => {
        p.style.opacity = '0';
        p.style.transition = 'opacity 0.5s ease-in-out 0.1s';
    });


    const handleScroll = () => {
      if (!animationAreaRef.current || !contentAboveRef.current) return;
      
      const pageScrollY = window.pageYOffset;
      const windowHeight = window.innerHeight;

      // The animation should start when the bottom of the "contentAbove" div passes the top of the viewport.
      const contentAboveRect = contentAboveRef.current.getBoundingClientRect();
      // textAnimStartScrollY is the scroll position where the bottom of contentAbove is at the top of the viewport.
      const textAnimStartScrollY = pageScrollY + contentAboveRect.bottom - windowHeight;

      // The total distance over which the animation should complete (e.g., 75% of viewport height).
      const animationEffectiveRange = windowHeight * 0.75; 

      let scrollProgress = 0;
      if (pageScrollY > textAnimStartScrollY) {
        const scrolledPastAnimStart = pageScrollY - textAnimStartScrollY;
        scrollProgress = Math.min(1, scrolledPastAnimStart / animationEffectiveRange);
      }
      
      scrollProgress = Math.max(0, scrollProgress); // Ensure progress is not negative

      const wordsToReveal = Math.floor(scrollProgress * allWordSpans.length);

      allWordSpans.forEach((span, index) => {
        span.style.backgroundSize = index < wordsToReveal ? '100% 100%' : '0% 100%';
      });
      
      // Paragraph visibility based on whether their first word is revealed
      let wordOffset = 0;
      allParagraphs.forEach((p) => {
        const numWordsInP = p.querySelectorAll('.word').length;
        if (numWordsInP === 0) {
            p.style.opacity = '0';
            return;
        }
        // A paragraph becomes visible if its first word is meant to be revealed
        if (wordsToReveal > wordOffset) {
            p.style.opacity = '1';
        } else {
            p.style.opacity = '0';
        }
        wordOffset += numWordsInP;
      });
       // Special handling for the attribution text (last paragraph)
      if (allParagraphs.length > 0) {
        const attributionPara = allParagraphs[allParagraphs.length -1];
        const attributionWords = attributionPara.querySelectorAll('.word').length;
        if (wordsToReveal >= (allWordSpans.length - attributionWords) && scrollProgress > 0.9) { // Make it appear towards the end
             attributionPara.style.opacity = '1';
        } else if (wordsToReveal < (allWordSpans.length - attributionWords) ) {
            // attributionPara.style.opacity = '0'; // Allow it to stay if revealed
        }
      }


    };

    const initTimeoutId = setTimeout(handleScroll, 100); // Initial check
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(initTimeoutId);
    };
  }, [contentAboveRef]); // Rerun if the ref to the content above changes

  const renderTextWithSpans = (text: string) => {
    // Splits by any whitespace sequence and keeps the delimiter
    return text.split(/(\s+)/).map((segment, index) => (
      // If the segment is just whitespace, render it as is to preserve formatting (e.g. newlines)
      segment.match(/\s+/) ? 
        <React.Fragment key={index}>{segment}</React.Fragment> : 
        // Otherwise it's a word, so wrap it
        <span 
          key={index} 
          className="word text-transparent bg-clip-text bg-gradient-to-r from-nexusbyte-primary-dark to-nexusbyte-primary-dark" 
          style={{ backgroundSize: '0% 100%', backgroundRepeat: 'no-repeat' }}
        >
          {segment}
        </span>
    ));
  };
  
  return (
    <div 
      ref={animationAreaRef} 
      className="scrolling-text flex-grow flex flex-col justify-center items-center text-center px-6 pb-12" // flex-grow takes available space
    >
      {MAIN_QUOTES_DATA.map((line, pIndex) => (
        <p key={pIndex} data-quote-para className="text-4xl font-semibold text-nexusbyte-primary-dark mb-6 leading-normal opacity-0">
          {renderTextWithSpans(line)}
        </p>
      ))}
      {ATTRIBUTION_TEXT && (
        <p data-quote-para className="text-2xl font-medium text-nexusbyte-primary-dark mt-4 opacity-0">
          {renderTextWithSpans(ATTRIBUTION_TEXT)}
        </p>
      )}
    </div>
  );
}

export default ScrollingQuotes;