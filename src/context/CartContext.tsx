import { createContext, useState } from 'react';


export const CartContext = createContext({} as ICartContext);

interface IDefaultProviderProps {
  children: React.ReactNode;
}

interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

interface ICartContext {
  product: IProduct[];
}

export const CardProvider = ({ children }: IDefaultProviderProps) => {
  const [product] = useState([] as IProduct[]);

  
  return (
    <CartContext.Provider
      value={{
        product,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
