import React, { createContext, useContext, useState } from 'react';

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [cursorType, setCursorType] = useState('default'); // default, pointer, text, etc.

  const mouseEnterHandler = (type = 'pointer') => {
    setCursorType(type);
  };

  const mouseLeaveHandler = () => {
    setCursorType('default');
  };

  return (
    <CursorContext.Provider value={{ cursorType, mouseEnterHandler, mouseLeaveHandler }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
