// src/components/LazyLayout.jsx
import React, { Suspense } from 'react';

// This is a simple loading spinner component. 
// You can style it however you want.
const Loader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <p>Loading...</p>
  </div>
);

const LazyLayout = ({ component: Component }) => {
  return (
    <Suspense fallback={<Loader />}>
      <Component />
    </Suspense>
  );
};

export default LazyLayout;