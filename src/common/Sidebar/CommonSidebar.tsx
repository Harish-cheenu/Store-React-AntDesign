/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import './sidebar.css';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  PartitionOutlined,
  ShoppingOutlined,
} from '@ant-design/icons';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const CommonSidebar = (props: { setSideState: any; sideState: any }) => {
  const { setSideState, sideState } = props;
  const { Sider } = Layout;
  const [collapsed, setCollapsed] = useState(true);
  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    collapsed ? setSideState('80px') : setSideState('200px');
  }, [collapsed, setSideState]);

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      breakpoint="md"
      onBreakpoint={() => handleCollapsed()}
      style={{
        height: '100vh',
        position: 'relative',
        zIndex: 2,
        width: sideState,
      }}
    >
      <div
        className="logo"
        style={{
          padding: '20px 10px',
          color: 'burlywood',
          fontFamily: 'monospace',
        }}
      >
        Store
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<ShoppingOutlined />}>
          <Link to="/my-order">My Order</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<PartitionOutlined />}>
          <Link to="/categories">Categories</Link>
        </Menu.Item>
      </Menu>
      <div
        className="sliderTrigger"
        onClick={() => handleCollapsed()}
        aria-hidden="true"
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
    </Sider>
  );
};
export default CommonSidebar;
