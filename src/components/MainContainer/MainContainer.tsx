import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const MainContainer: React.FC<Props> = ({ children }) => {
  return (
    <main className="mx-auto max-w-7xl w-full py-4 flex flex-col items-center">
      {children}
    </main>
  );
};
