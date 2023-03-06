import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Api } from '../services/api';

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
  const [product, setProduct] = useState([] as IProduct[]);

  const listProduct = async () => {
    try {
      const reponse = await Api.get('/products');
      setProduct(reponse.data);
    } catch (error) {
      toast.error('error na Api')
    }
  };

  useEffect(() => {
    listProduct();
    
  }, []);

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
