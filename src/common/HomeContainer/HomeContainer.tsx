/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Card, Layout, Skeleton } from 'antd';
import './index.css';

const HomeContainer = (props: any) => {
  const { Content } = Layout;
  const { product } = props;
  const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <div>
      <Content
        style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
      >
        {product.length === 0
          ? dummy.map((e: number) => (
            <Card
              style={{
                margin: '10px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                borderRadius: '1rem',
                cursor: 'pointer',
              }}
            >
              <Skeleton.Image
                style={{
                  width: 250,
                  height: '100px',
                  backgroundColor: '#bebebeb3',
                }}
              />
              <Skeleton active />
              <div style={{ display: 'none' }}>{e}</div>
            </Card>
          ))
          : product.map((e: any) => (
            <Card
              className="productCard"
              style={{
                margin: '10px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                borderRadius: '1rem',
                cursor: 'pointer',
              }}
              cover={<img src={e?.image} alt="product" max-height="100px" />}
            >
              <h4
                style={{
                  width: '210px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {e?.title}
              </h4>
              <div>
                <span>Price : </span>
                <strong>&#x20B9;</strong>
                {e?.price}
              </div>
            </Card>
          ))}
      </Content>
    </div>
  );
};
export default HomeContainer;
