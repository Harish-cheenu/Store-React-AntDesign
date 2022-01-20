/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import MyOrder from './pages/MyOrders/MyOrder';
import HomePage from './pages/Home/Home';
import CommonSidebar from './common/Sidebar/CommonSidebar';
import CommonHeader from './common/Header/CommonHeader';
import Login from './common/Login/Login';
import Categories from './pages/Categories/index';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [sideState, setSideState] = useState('200px');
  const { Content } = Layout;
  useEffect(() => {
    const go = localStorage.getItem('login');
    if (go === 'True') {
      setLoggedIn(false);
    }
  }, []);
  return (
    <>
      <Router>
        {loggedIn ? (
          <Login setLoggedIn={setLoggedIn} />
        ) : (
          <Layout
            style={{
              backgroundColor: '#f0f2f5',
              width: '100vw',
              height: '100vh',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <CommonSidebar setSideState={setSideState} sideState={sideState} />
            <Layout
              className="site-layout"
              style={{
                width: `calc(100vw - ${sideState})`,
              }}
            >
              <CommonHeader />
              <Content
                className="mainContent"
                style={{
                  // margin: '5% 0px 0px 20px',
                  backgroundColor: '#f0f2f5',
                }}
              >
                <Switch>
                  <Route exact path="/">
                    <HomePage />
                  </Route>
                  <Route exact path="/my-order">
                    <MyOrder />
                  </Route>
                  <Route exact path="/categories">
                    <Categories />
                  </Route>
                </Switch>
              </Content>
            </Layout>
          </Layout>
        )}
      </Router>
    </>
  );
}

export default App;
