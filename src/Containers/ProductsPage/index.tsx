import React, { useEffect, useState } from 'react';
import { ProductCard } from '../../Components/Products/ProductCard';
import styles from './ProductsPage.module.scss';

export const ProductsPage = () => {
  const [count, setCount] = useState(0);

  console.log('PRODUCTS PAGE RENDER');

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log('COMPONETDIDMOUNT PRODUCTS PAGE');
  }, []);

  return (
    <div className={styles.productsWrapper}>
      <button onClick={handleButtonClick}>{count}</button>
      <ProductCard productName="Apple" />
      <ProductCard productName="Orange" />
    </div>
  );
};
