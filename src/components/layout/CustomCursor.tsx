import React, { useEffect, useRef } from 'react';
import { useCursor } from '../../context/CursorContext';

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const { cursorPosition, isHovering } = useCursor();

  useEffect(() => {
    const moveCursor = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px, 0)`;
      }
      if (outlineRef.current) {
        outlineRef.current.style.transform = `translate3d(${cursorPosition.x - 12}px, ${cursorPosition.y - 12}px, 0)`;
      }
    };

    moveCursor();
    
    // Add hover effect
    if (dotRef.current && outlineRef.current) {
      if (isHovering) {
        dotRef.current.style.transform = `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px, 0) scale(0.5)`;
        outlineRef.current.style.transform = `translate3d(${cursorPosition.x - 12}px, ${cursorPosition.y - 12}px, 0) scale(1.5)`;
      } else {
        dotRef.current.style.transform = `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px, 0) scale(1)`;
        outlineRef.current.style.transform = `translate3d(${cursorPosition.x - 12}px, ${cursorPosition.y - 12}px, 0) scale(1)`;
      }
    }
  }, [cursorPosition, isHovering]);

  // Hide on mobile devices
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot"></div>
      <div ref={outlineRef} className="cursor-outline"></div>
    </>
  );
};

export default CustomCursor;