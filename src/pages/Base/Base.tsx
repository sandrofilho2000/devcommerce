import React, { ReactNode } from 'react';
import { Header, MainContainer } from '../../components';
import { CartPopUp } from '../../components/CartPopUp/CartPopUp';

type Props = {
  children: ReactNode;
};

export const Base: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <CartPopUp />
      <MainContainer>{children}</MainContainer>
    </>
  );
};
