import React from 'react';
import { useLocation } from 'react-router-dom';

function CatImage() {
  const location = useLocation();
  const { catUrl } = location.state;

  return (
    <div>
      <img src={catUrl} alt="Cat" />
    </div>
  );
}

export default CatImage;