import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import AboutPage from './pages/About';
import HomePage from './pages/Home';
import CommonSidebar from './common/Sidebar/CommonSidebar';
import CommonHeader from './common/Header/CommonHeader';
import './App.css';

function App() {
  const { Content } = Layout;
  return (
    <Layout>
      <CommonSidebar />
      <Layout className="site-layout">
        <CommonHeader />
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
