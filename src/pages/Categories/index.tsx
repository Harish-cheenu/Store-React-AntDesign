/* eslint-disable quotes */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { Checkbox } from 'antd';
import CallApi from '../../api/index.js';
import HomeContainer from '@/src/common/HomeContainer/HomeContainer';
// import classNames from 'classnames';
import './index.css';

function HomePage() {
  const categories = [
    'ELECTRONICS',
    'JEWELERY',
    "MEN'S CLOTHING",
    "WOMEN'S CLOTHING",
  ];
  const [checkedList, setCheckedList] = useState([...categories]);
  const [indeterminate, setIndeterminate] = useState(false);
  const [checkAll, setCheckAll] = useState(true);
  const CheckboxGroup = Checkbox.Group;
  const [product, setProduct] = useState<any>([]);
  const getProd = () => {
    console.log(indeterminate);
    if (indeterminate === false) {
      CallApi('products?limit=15')
        .then((res) => setProduct(res))
        .catch((err) => console.log('error--', err));
    } else {
      setProduct([]);
      checkedList.map((e) => CallApi(`products/category/${e.toLowerCase()}`)
        .then((res) => setProduct((ele: any) => [...ele, ...res]))
        .catch((err) => console.log('error--', err)));
    }
  };
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const onChange = (list: any[]): void => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < categories.length);
    console.log(!!list.length && list.length < categories.length);
    setCheckAll(list.length === categories.length);
    console.log(list);
  };

  const onCheckAllChange = (e: any) => {
    setCheckedList(e.target.checked ? categories : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
    console.log(e.target.checked);
  };

  useEffect(() => {
    getProd();
  }, [checkAll, indeterminate, checkedList]);
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
        // defaultChecked
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
