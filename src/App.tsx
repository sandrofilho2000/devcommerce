import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './routes';

type Props = {};

export const App: React.FC<Props> = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};
