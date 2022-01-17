import React, { useEffect, useState } from 'react';
import { Checkbox } from 'antd';
import CallApi from '@/src/api/index.js';
import HomeContainer from '@/src/common/HomeContainer/HomeContainer';
// import classNames from 'classnames';
import './index.css';

function HomePage() {
  const [checkedList, setCheckedList] = useState(['All']);
  const [indeterminate, setIndeterminate] = useState(false);
  const [checkAll, setCheckAll] = useState(true);
  const CheckboxGroup = Checkbox.Group;
  const categories = [
    'ELECTRONICS',
    'JEWELERY',
    'MENS CLOTHING',
    'WOMEN CLOTHING',
  ];
  const [product, setProduct] = useState<any>([]);
  const getProd = () => {
    CallApi('products?limit=15')
      .then((res) => setProduct(res))
      // eslint-disable-next-line no-console
      .catch((err) => console.log('error--', err));
  };
  const onChange = (list: any) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < categories.length);
    setCheckAll(list.length === categories.length);
    console.log(checkedList);
  };

  const onCheckAllChange = (e: any) => {
    setCheckedList(e.target.checked ? categories : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  useEffect(() => {
    getProd();
  }, []);
  return (
    <>
      <h3>
        <strong>By Categories</strong>
      </h3>

      {/* <Menu className="menu">
        {categories.length > 0 &&
          categories?.map((e: any) => (
            <Menu.Item className="menuItem">{e?.toUpperCase()}</Menu.Item>
          ))}
      </Menu> */}
      <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        Check all
      </Checkbox>
      <CheckboxGroup
        options={categories}
        value={checkedList}
        onChange={onChange}
      />

      <HomeContainer product={product} />
    </>
  );
}
export default HomePage;
