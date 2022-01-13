import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import MyOrder from './pages/MyOrders/MyOrder';
import HomePage from './pages/Home/Home';
import CommonSidebar from './common/Sidebar/CommonSidebar';
import CommonHeader from './common/Header/CommonHeader';
import Login from './common/Login/Login';
import Categories from './pages/Categories/index';
import './App.less';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const { Content } = Layout;
  useEffect(() => {
    const go = localStorage.getItem('login');
    if (go === 'True') {
      setLoggedIn(false);
    }
  }, []);
  return (
    <>
      {loggedIn ? (
        <Login setLoggedIn={setLoggedIn} />
      ) : (
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
                  <Route path="/myOrder">
                    <MyOrder />
                  </Route>
                  <Route exact path="/categories">
                    <Categories />
                  </Route>
                </Switch>
              </Router>
            </Content>
          </Layout>
        </Layout>
      )}
    </>
  );
}

export default App;
