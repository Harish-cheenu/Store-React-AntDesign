import React from 'react';
import { Card, Layout } from 'antd';

const HomeContainer = (props: any) => {
  const { Content } = Layout;
  const { product } = props;
  return (
    <div>
      <Content
        style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
      >
        {product?.map((e: any) => (
          <Card
            style={{
              width: 250,
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
