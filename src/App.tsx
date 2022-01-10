import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import MyOrder from './pages/MyOrders/MyOrder';
import HomePage from './pages/Home/Home';
import CommonSidebar from './common/Sidebar/CommonSidebar';
import CommonHeader from './common/Header/CommonHeader';
import Electronics from './pages/Categories/Electronics';
import Jewelery from './pages/Categories/Jewelery';
import './App.css';
import Mens from './pages/Categories/mens';
import Womans from './pages/Categories/woman';

function App() {
  const { Content } = Layout;
  return (
    <Layout>
      <CommonSidebar />
      <Layout className="site-layout">
        <CommonHeader />
        <Content
          style={{
            margin: '10vh 0px 0px calc(101vw - (100vw - 200px))',
            minHeight: 280,
            backgroundColor: '#f0f2f5',
          }}
        >
          <Router>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/electronics">
                <Electronics />
              </Route>
              <Route exact path="/jewelery">
                <Jewelery />
              </Route>
              <Route exact path="/men's clothing">
                <Mens />
              </Route>
              <Route exact path="/woman's clothing">
                <Womans />
              </Route>
              <Route path="/myOrder">
                <MyOrder />
              </Route>
            </Switch>
          </Router>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
