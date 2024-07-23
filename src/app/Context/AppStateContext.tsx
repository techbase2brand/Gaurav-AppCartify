"use client"
import React, { createContext, useState } from 'react';

// Define the shape of the context value
interface AppStateContextValue {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context with a default value
export const AppStateContext = createContext<AppStateContextValue>({
  state: false,
  setState: () => { },
});

// Create a provider component
export const AppStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState(false);
  console.log("state", state);

  return (
    <AppStateContext.Provider value={{ state, setState }}>
      {children}
    </AppStateContext.Provider>
  );
};
