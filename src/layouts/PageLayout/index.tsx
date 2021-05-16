import React from 'react';
import { Header } from '@layouts/PageLayout/styles';

interface Props {
  children: React.ReactNode;
}

const App = ({ children }: Props) => {
  return (
    <div>
      <Header>Page Layout</Header>
      {children}
    </div>
  );
};

export default App;
