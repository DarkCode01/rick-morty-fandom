import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import './header.css';

export default function Header() {
  const [ current, setCurrent ] = useState('1');

  return(
    <Layout.Header className="header">
      <div className="logo">
        Rick & Morty
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[ current ]}
        style={{ lineHeight: '64px', float: 'right' }}
      >
        <Menu.Item key="1" onClick={ () => setCurrent('1') }>
          <Link to="/"> Characters </Link>
        </Menu.Item>
        <Menu.Item key="2" onClick={ () => setCurrent('2') }>
          Episodes
        </Menu.Item>
        <Menu.Item key="3" onClick={ () => setCurrent('2') }>
          Locations
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
}