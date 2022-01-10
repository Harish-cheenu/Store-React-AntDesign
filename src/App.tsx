import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import AboutPage from './pages/About';
import HomePage from './pages/Home';
import './App.less';

function App() {
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const menuArr = ['Home', 'My Order', 'Wish List', 'Settings'];
  return (
    <Layout>
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
            <Menu.Item key={e}>{e}</Menu.Item>
          ))}
        </Menu>
        <div
          className="sider-trigger"
          onClick={() => setCollapsed(!collapsed)}
          aria-hidden="true"
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0, color: '#ffff' }}
        >
          hello
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Router>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/about">
                <AboutPage />
              </Route>
            </Switch>
          </Router>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
