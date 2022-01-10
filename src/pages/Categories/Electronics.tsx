import React, { useEffect, useState } from 'react';
import CallApi from '@/src/api/index.js';
import HomeContainer from '@/src/common/HomeContainer/HomeContainer';
import '../Home/Home.css';

function Electronics() {
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState<any>([]);
  const getCat = () => {
    CallApi('products/categories')
      .then((res) => setCategories(res))
      .catch((err) => console.log('error--', err));
  };
  const getProd = () => {
    CallApi('products/category/electronics?limit=15')
      .then((res) => setProduct(res))
      .catch((err) => console.log('error--', err));
  };

  useEffect(() => {
    getCat();
    getProd();
  }, []);
  return (
    <>
      <h3>
        <strong>Categories</strong>
      </h3>
      <HomeContainer categories={categories} product={product} />
    </>
  );
}
export default Electronics;
