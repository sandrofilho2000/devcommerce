import React, { KeyboardEvent, useEffect, useState } from 'react';
import { Modal, ProductsContainer } from '../../components';
import { api } from '../../services/api';
import { Base } from '../Base/Base';

type Props = {};

export const Home: React.FC<Props> = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [hasAccount, setHasAccount] = useState(false);
  const [allProductsData, setAllProductsData] = useState([]);

  const allProductsHandler = async () => {
    const allProduct = await api.get('/product-index-all');
    const { data } = allProduct;
    setAllProductsData(data);
  };

  useEffect(() => {
    allProductsHandler();
  }, []);

  const setModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const handleHasAccount = (state: boolean) => {
    setHasAccount(state);
  };

  return (
    <>
      <div className={`${modalIsOpen && 'blur-[2px]'}`}>
        <Base setModal={setModal} handleHasAccount={handleHasAccount}>
          <ProductsContainer products={allProductsData} />
        </Base>
      </div>
      {modalIsOpen ? (
        <Modal
          setModal={setModal}
          handleHasAccount={handleHasAccount}
          hasAccount={hasAccount}
        />
      ) : null}
    </>
  );
};
