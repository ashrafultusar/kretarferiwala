"use client";
import React, { createContext, useContext, useState } from "react";

interface CheckoutContextType {
  hasProduct: boolean;
  setHasProduct: (value: boolean) => void;
  hasCheckoutInfo: boolean;
  setHasCheckoutInfo: (value: boolean) => void;
}

const CheckoutContext = createContext<CheckoutContextType | null>(null);

export const CheckoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [hasProduct, setHasProduct] = useState(false);
  const [hasCheckoutInfo, setHasCheckoutInfo] = useState(false);

  return (
    <CheckoutContext.Provider value={{ hasProduct, setHasProduct, hasCheckoutInfo, setHasCheckoutInfo }}>
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () => {
  const context = useContext(CheckoutContext);
  if (!context) throw new Error("useCheckout must be used inside CheckoutProvider");
  return context;
};
