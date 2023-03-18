import React, { useState } from 'react';
import './App.css';
import { ProductCard } from './ProductCard';

const productArray = [
  {
    id: 1,
    name: 'Apple',
  },
  {
    id: 2,
    name: 'Orange',
  },
  {
    id: 3,
    name: 'Tomato',
  },
];

function App() {
  const [limit, setLimit] = useState(10);

  const addLimit = () => {
    setLimit(limit + 1);
  };

  const deleteLimit = () => {
    setLimit(limit - 1);
  };

  return (
    <div className="App">
      <button onClick={deleteLimit} disabled={limit === 0}>
        delete
      </button>
      <span>{limit}</span>
      <button onClick={addLimit}>add</button>
      {productArray.map(({ id, name }) => (
        <ProductCard productName={name} key={id} limit={limit} />
      ))}
    </div>
  );
}

export default App;
