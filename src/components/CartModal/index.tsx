/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/button-has-type */
import { MdClose } from 'react-icons/md';
import { useState } from 'react';
import CartProductList from './CartProductList';

import { StyledCartModalBox } from './style';
import { StyledParagraph, StyledTitle } from '../../styles/typography';

const CartModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <StyledCartModalBox>
          <dialog>
            <header>
              <StyledTitle tag='h2' $fontSize='three'>
                Carrinho de compras
              </StyledTitle>
              <button
                type='button'
                aria-label='Fechar'
                onClick={handleCloseModal}
              >
                <MdClose size={21} />
              </button>
            </header>
            <div className='cartBox'>
              <CartProductList />

              <div className='emptyBox'>
                <StyledTitle tag='h3' $fontSize='three' textAlign='center'>
                  Sua sacola está vazia
                </StyledTitle>
                <StyledParagraph textAlign='center'>
                  Adicione itens
                </StyledParagraph>
              </div>
            </div>
          </dialog>
        </StyledCartModalBox>
      )}
    </>
  );
};

export default CartModal;
