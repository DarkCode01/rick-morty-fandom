import React, { useState } from 'react';
import { Layout, Menu, Icon } from 'antd';

import './sider.css';

function Side({ handle }) {
  const [ collapsed, setCollapse ] = useState(false);

  return(
    <Layout.Sider collapsible collapsed={collapsed} onCollapse={() => setCollapse(!collapsed)}>
      <figure>
        { !collapsed
          ? <img
              alt=""
              className="logo-image"
              onClick={handle('main')}
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.QPmwoiAaDpGnhWUPI8jdzQHaEK%26pid%3DApi&f=1"
            />
          : null
        }
      </figure>
      <Menu theme="dark"  mode="inline">
        <Menu.Item key="user" onClick={handle('main')}>
          <Icon type="user" />
          <span>Characters</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="contacts" />
          <span>Episodes</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="idcard" />
          <span>Locations</span>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
}

export default Side;