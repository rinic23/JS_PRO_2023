import React, { useState } from 'react';
import './index.css';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../store/products';

interface TProps {
  productName: string;
}

const Product = ({ productName }: TProps) => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const addCount = () => {
    setCount((prevValue) => prevValue + 1);
  };

  const deleteCount = () => {
    setCount((prevValue) => prevValue - 1);
  };

  const addProductHandler = () => {
    dispatch(addProduct({ name: productName, count }));
  };

  return (
    <div className="card_wrapper">
      <span>{productName}</span>
      <div className="button_section">
        <button onClick={deleteCount} disabled={count === 0}>
          delete
        </button>
        <span>{count}</span>
        <button onClick={addCount}>add</button>
      </div>
      <div>
        <button onClick={addProductHandler}>добавить в корзину</button>
      </div>
    </div>
  );
};

export const ProductCard = React.memo(Product);
