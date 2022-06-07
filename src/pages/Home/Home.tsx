import React from 'react';
import { ProductsContainer } from '../../components';
import { Base } from '../Base/Base';
import mock from './mock';

type Props = {};

export const Home: React.FC<Props> = () => {
  return (
    <Base>
      <ProductsContainer products={mock} />
    </Base>
  );
};
