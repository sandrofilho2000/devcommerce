import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import { Header, MainContainer } from '../../components';

type Props = {
  children: ReactNode;
  setModal: () => void;
  handleHasAccount: (state: boolean) => void;
};

export const Base: React.FC<Props> = ({
  children,
  setModal,
  handleHasAccount,
}) => {
  return (
    <>
      <Header setModal={setModal} handleHasAccount={handleHasAccount} />
      <MainContainer>{children}</MainContainer>
    </>
  );
};
