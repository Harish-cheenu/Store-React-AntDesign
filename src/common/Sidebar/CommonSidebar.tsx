import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
// import { a } from 'react-router-dom';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  PartitionOutlined,
  ShoppingOutlined,
} from '@ant-design/icons';
import './CommonSidebar.less';

const CommonSidebar = () => {
  //  const { location } = props;
  const { Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{ height: '100vh', position: 'fixed', zIndex: '110' }}
    >
      <div
        className="logo"
        style={{
          padding: '20px 10px',
          color: 'burlywood',
          fontFamily: 'monospace',
        }}
      >
        shrefre
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <a href="/">Home</a>
        </Menu.Item>
        <Menu.Item key="2" icon={<ShoppingOutlined />}>
          <a href="/myOrder">My Order</a>
        </Menu.Item>
        <Menu.Item key="3" icon={<PartitionOutlined />}>
          <a href="/categories">Categories</a>
        </Menu.Item>
      </Menu>
      <div
        className="sliderTrigger"
        onClick={() => setCollapsed(!collapsed)}
        aria-hidden="true"
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
    </Sider>
  );
};
export default CommonSidebar;
