import React from 'react';
import { Link } from 'react-router-dom';
import { List } from 'antd';

export default function({ id, name, episode, air_date }) {
  return (
    <List.Item key={ id }>
      <List.Item.Meta
        title={<Link to="/episodes/1">{ name }</Link>}
        description={ episode }
      />
      <div>{ air_date }</div>
    </List.Item>
  );
}