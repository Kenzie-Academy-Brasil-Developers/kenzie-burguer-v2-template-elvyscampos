import { useContext } from 'react';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { CartContext } from '../../context/CartContext';


// eslint-disable-next-line arrow-body-style
const ProductList = () => {
  const {product} = useContext(CartContext)
  return (
    <StyledProductList>
      {/* {product.map( card => (
        <ProductCard />
      ) )} */}
      
    </StyledProductList>
  );
};

export default ProductList;
