import React, { useEffect, useState } from 'react';
import CallApi from '@/src/api/index.js';
import HomeContainer from '@/src/common/HomeContainer/HomeContainer';
import '../Home/Home.css';

function Womans() {
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState<any>([]);
  const getCat = () => {
    CallApi('products/categories')
      .then((res) => setCategories(res))
      .catch((err) => console.log('error--', err));
  };
  const getProd = () => {
    CallApi("products/category/women's%20clothing?limit=15")
      .then((res) => setProduct(res))
      .catch((err) => console.log('error--', err));
  };

  useEffect(() => {
    getCat();
    getProd();
  }, []);
  return (
    <div>
      <h3>
        <strong>Categories</strong>
      </h3>
      <HomeContainer categories={categories} product={product} />
    </div>
  );
}
export default Womans;
