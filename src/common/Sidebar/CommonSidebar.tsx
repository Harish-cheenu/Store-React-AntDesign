import React, { useState } from 'react';
import { Layout, Menu, Anchor } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  PartitionOutlined,
  ShoppingOutlined,
} from '@ant-design/icons';
import './CommonSidebar.css';

const CommonSidebar = () => {
  const { Link } = Anchor;
  const { Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const { SubMenu } = Menu;

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
        store
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key={1} icon={<HomeOutlined />}>
          <Anchor affix={false} style={{ border: 'none', color: 'white' }}>
            <Link href="/" title="Home" />
          </Anchor>
        </Menu.Item>
        <Menu.Item key={6} icon={<ShoppingOutlined />}>
          <Anchor affix={false} style={{ border: 'none', color: 'white' }}>
            <Link href="/myOrder" title="My Order" />
          </Anchor>
        </Menu.Item>
        <SubMenu key="sub1" icon={<PartitionOutlined />} title="Categories">
          <Menu.Item key="2">
            <Anchor>
              <Link href="/electronics" title="Electronics" />
            </Anchor>
          </Menu.Item>
          <Menu.Item key="3">
            <Anchor>
              <Link href="/jewelry" title="Jewelry" />
            </Anchor>
          </Menu.Item>
          <Menu.Item key="4">
            <Anchor>
              <Link href="/men's%20clothing" title="men's clothing" />
            </Anchor>
          </Menu.Item>
          <Menu.Item key="5">
            <Anchor>
              <Link href="/woman's%20clothing" title="woman's clothing" />
            </Anchor>
          </Menu.Item>
        </SubMenu>
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
