import React, { createContext, useContext, useEffect, useState } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

interface CursorContextType {
  cursorPosition: CursorPosition;
  isHovering: boolean;
  setIsHovering: (hovering: boolean) => void;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};

export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);
    
    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <CursorContext.Provider value={{ cursorPosition, isHovering, setIsHovering }}>
      {children}
    </CursorContext.Provider>
  );
};