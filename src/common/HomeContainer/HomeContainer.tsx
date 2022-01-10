import React from 'react';
import { Card, Layout } from 'antd';

const HomeContainer = (props:any) => {
    const { Content } = Layout;
    const { categories, product } = props;
    return (
      <div>
        <Card
          style={{
            padding: '5px',
            margin: '0 0 10px 0',
            whiteSpace: 'break-spaces',
            width: '55%',
            justifyContent: 'space-between',
            display: 'flex',
          }}
        >
          {categories.map((e:any) => (
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
                <a href={e}>{e}</a>
              </h3>
            </Card.Grid>
          ))}
        </Card>
        <Content
          style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
        >
          {product.map((e: any) => (
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
