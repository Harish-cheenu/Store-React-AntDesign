import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import CallApi from '@/src/api/index.js';
import HomeContainer from '@/src/common/HomeContainer/HomeContainer';
import './index.less';

function HomePage() {
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState<any>([]);
  const getCat = () => {
    CallApi('products/categories')
      .then((res) => setCategories(res))
      .catch((err) => console.log('error--', err));
  };
  const getProd = () => {
    CallApi('products?limit=25')
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
      <Card
        style={{
          padding: '5px',
          margin: '0 0 10px 0',
          whiteSpace: 'break-spaces',
          width: 'fit-content',
          justifyContent: 'space-between',
          display: 'flex',
        }}
      >
        {categories && categories?.map((e: any) => (
            <Card.Grid
              style={{
                padding: '5px',
                margin: '5px 5px',
                width: 'auto',
                textAlign: 'center',
                borderRadius: '0.5rem',
              }}
            >
              <h3>
                <a href={e} style={{ color: 'black' }}>
                  {e.toUpperCase()}
                </a>
              </h3>
            </Card.Grid>
          ))}
      </Card>
      <HomeContainer product={product} />
    </>
  );
}
export default HomePage;
