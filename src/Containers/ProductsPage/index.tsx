import React, { useMemo, useState } from 'react';
import { ProductCard } from '../../Components/Products/ProductCard';
import styles from './ProductsPage.module.scss';
import { useSelector } from 'react-redux';
import { getProducts } from '../../store/products/selectors';
import { useBreakpoint } from '../../utils/hooks/useBreakpoint';

const calculateValue = () => {
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result = result + 1;
  }
  return result;
};

export const ProductsPage = () => {
  const [count, setCount] = useState(0);
  const products = useSelector(getProducts);

  const isBreakpoint = useBreakpoint(720);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div className={styles.productsWrapper}>
      {isBreakpoint
        ? (
        <button>Mobile Button</button>
          )
        : (
        <button onClick={handleButtonClick}>{count}</button>
          )}
      <ProductCard productName={`Apple ${count}`} />
      <ProductCard productName="Orange" />
      <div>
        <span>Корзина</span>
        {products.map((product, index) => (
          <div key={index}>
            <span>{`Название товара -  ${product.name}`}</span>
            <span>{`Колличество товара ${product.count}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
