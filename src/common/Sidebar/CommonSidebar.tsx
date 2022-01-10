import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  ShoppingOutlined,
  UserOutlined,
  HeartOutlined,
} from '@ant-design/icons';
import './CommonSidebar.css';

const CommonSidebar = () => {
  const { Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const menuArr = [
    {
      uid: 1,
      menu: 'Home',
      link: '/',
      icon: <HomeOutlined />,
    },
    {
      uid: 2,
      menu: 'My Order',
      link: '/myOrder',
      icon: <ShoppingOutlined />,
    },
    {
      uid: 3,
      menu: 'Wish List',
      link: '/wishList',
      icon: <HeartOutlined />,
    },
    {
      uid: 4,
      menu: 'profile',
      link: '/profile',
      icon: <UserOutlined />,
    },
  ];
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{ height: '100vh' }}
    >
      <div
        className="logo"
        style={{
          padding: '20px 10px',
          color: 'burlywood',
          fontFamily: 'monospace',
        }}
      >
        store
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        {menuArr.map((e) => (
          <Menu.Item key={e.uid} icon={e.icon}>
            <Link to={e.link}>{e.menu}</Link>
          </Menu.Item>
        ))}
      </Menu>
      <div
        className="siderTrigger"
        onClick={() => setCollapsed(!collapsed)}
        aria-hidden="true"
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
    </Sider>
  );
};
export default CommonSidebar;
