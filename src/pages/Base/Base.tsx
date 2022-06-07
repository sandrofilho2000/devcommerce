import React, { ReactNode } from 'react';
import { Header, MainContainer } from '../../components';

type Props = {
  children: ReactNode;
};

export const Base: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <MainContainer>{children}</MainContainer>
    </>
  );
};
