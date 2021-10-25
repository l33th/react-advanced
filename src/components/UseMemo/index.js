import React, { useState, useEffect, useCallback, useMemo } from 'react';
import useFetchHook from '../CustomHooks/useFetchHook';

const url = 'https://course-api.com/javascript-store-products';

// every time props or state changes, component re-renders

const Index = () => {
  const { products } = useFetchHook(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  const addToCart = () => {
    setCart(cart + 1);
  };

  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1 style={{marginTop:'3rem'}}>cart: {cart}</h1>
      <BigList products={products} />
    </>
  );
};

const BigList = React.memo(({ products }) => {
  useEffect(() => {
    console.log('big list called');
  });

  return (
    <section className='products'>
      {products.map((product) => {
        return <SingleProduct key={product.id} {...product}></SingleProduct>;
      })}
    </section>
  );
});

const SingleProduct = ({ fields }) => {
  useEffect(() => {
    console.log('single product called');
  });

  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
    </article>
  );
};

export default Index;
