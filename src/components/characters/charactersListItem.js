import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card, Tooltip, Icon } from 'antd';

export default function({ character }) {
  return (
    <Col span={6}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt={ character.name }
            src={ character.image }
          />
        }
        actions={[
          <Tooltip placement="top" title={ character.status }>
            <Icon
              key="alive"
              theme="twoTone"
              type="check-circle"
              twoToneColor={ character.status === 'Alive' ? "#52c41a" : "#eb2f96" }
            />
          </Tooltip>,
          <Icon
            type={ character.gender.toLowerCase() === 'male' ? 'man' : 'woman' }
            style={{
              color: character.gender.toLowerCase() === 'male' ? '#4693f7' : 'hotpink'
            }}
            key="gender"
          />,
          <Tooltip placement="top" title={ character.species }>
            <Icon type="solution" />
          </Tooltip>
        ]}
      >
        <Card.Meta title={ <Link to={`/characters/${character.id}`}> { character.name } </Link> } />
      </Card>
    </Col>
  );
}