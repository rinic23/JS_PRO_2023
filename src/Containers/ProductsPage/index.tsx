import React, { useState } from 'react';
import { ProductCard } from '../../Components/Products/ProductCard';
import styles from './ProductsPage.module.scss';
import { useSelector } from 'react-redux';
import { getProducts } from '../../store/products/selectors';

export const ProductsPage = () => {
  const [count, setCount] = useState(0);
  const products = useSelector(getProducts);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div className={styles.productsWrapper}>
      <button onClick={handleButtonClick}>{count}</button>
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
