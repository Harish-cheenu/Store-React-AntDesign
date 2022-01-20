/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import CallApi from '../../api/index.js';
import './Home.css';

function HomePage() {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    const go = () => {
      CallApi('products?limit=5')
        .then((res) => setData(res))
        .catch((err) => console.log('error--', err));
    };
    go();
    console.log(data);
  }, []);

  return (
    <>
      <h3>
        <strong>Home</strong>
        <Carousel autoplay dotPosition="bottom">
          {data?.map((e: any) => (
            <div className="content">
              <img
                className="img"
                src={e?.image}
                alt=""
                width={100}
                height={100}
              />
              <h3 className="contentStyle">{e?.title}</h3>
            </div>
          ))}
        </Carousel>
        ,
      </h3>
    </>
  );
}
export default HomePage;
