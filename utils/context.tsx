"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface ContextProps {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const LoadContext = createContext<ContextProps>({
  loading: false,
  setLoading: (): boolean => false,
});

export const LoadContextProvider = ({ children }: { children: any }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadContext.Provider>
  );
};

export const useLoadContext = () => useContext(LoadContext);
