// this is the root component for how React components render

import React from 'react';
import PortfolioContainer from './components/PortfolioContainer';

// vdom rendering
function App() {
  return (
    <PortfolioContainer />
  );
}

export default App;
