import React, { useState } from 'react';
import { ProductCard } from '../../Components/Products/ProductCard';
import styles from './ProductsPage.module.scss';

export const ProductsPage = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div className={styles.productsWrapper}>
      <button onClick={handleButtonClick}>{count}</button>
      <ProductCard productName={`Apple ${count}`} />
      <ProductCard productName="Orange" />
    </div>
  );
};
