import React, { useState } from 'react';
import './index.css';

interface TProps {
  productName: string;
  limit: number;
}

export const ProductCard = ({ productName, limit }: TProps) => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount((prevValue) => prevValue + 1);
  };

  const deleteCount = () => {
    setCount((prevValue) => prevValue - 1);
  };

  return (
    <div className="card_wrapper">
      <span>{productName}</span>
      <div className="button_section">
        <button onClick={deleteCount} disabled={count === 0}>
          delete
        </button>
        <span>{count}</span>
        <button onClick={addCount} disabled={count >= limit}>
          add
        </button>
      </div>
    </div>
  );
};
