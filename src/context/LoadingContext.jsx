import { createContext, useContext, useState } from "react";
import Loading from "../components/Loading";

export const LoadingContext = createContext(null);

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [percent, setPercent] = useState(0);

  const value = {
    isLoading,
    setIsLoading,
    percent,
    setPercent,
  };

  return (
    <LoadingContext.Provider value={value}>
      {isLoading && <Loading percent={percent} onFinish={() => setIsLoading(false)} />}
      <div className={`transition-opacity duration-700 ${isLoading ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        {children}
      </div>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
