import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Home from './components/Home.js';
import Explore from './components/explore.js';
import './App.css';


const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

function App() {
  return (
     <BrowserRouter>
        <div className="headerImg"></div>
        <Menu mode="horizontal" defaultSelectedKeys={['home']}>
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="explore">
            <Link to="/explore">Explore</Link>
          </Menu.Item>
        </Menu>

        <Switch>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
