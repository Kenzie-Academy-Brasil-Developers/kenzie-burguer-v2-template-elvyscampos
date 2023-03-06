import { useContext } from 'react';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { CartContext } from '../../context/CartContext';

const ProductList = () => {
  const { product } = useContext(CartContext);
  return (
    <StyledProductList>
      {product.map(() => (
        <ProductCard />
      ))}
    </StyledProductList>
  );
};

export default ProductList;
