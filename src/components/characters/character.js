import React, { useState } from 'react';
// import { Redirect } from 'react-router-dom';
import { Layout, Card, Row, Col, Typography, Tag, Icon, Divider } from 'antd';

// components
import Residents from '../residents';

export default function Character({ character }) {
  const [ state, setState ] = useState({ isVisible: false, residents: [] });

  return (
    <Layout.Content>
      {/* Modals to display residents */}
      <Residents residents={ state.residents } isVisible={ state.isVisible } handle={ setState } />

      <Card>
        <Row>
          <Col xs={ 24 } md={ 9 } sm={ 24 } >
            <img alt={character.name} src={character.image} />
          </Col>
          <Col xs={ 24 } md={ 15 } sm={ 24 } >
            <Layout.Content style={{ textAlign: 'left' }}>
              <Typography.Title level={ 2 }>
                { character.name } <Icon
                                      type={ character.gender.toLowerCase() === 'male' ? 'man' : 'woman' }
                                      style={{
                                        color: character.gender.toLowerCase() === 'male' ? '#4693f7' : 'hotpink'
                                      }}
                                      key="gender"
                                    />
              </Typography.Title>
              <div>
                <Tag
                  color={ character.status === 'Alive' ? '#87d068' : '#f50' }
                >
                  { character.status }
                </Tag>
                <Tag
                  color="#2db7f5"
                >
                  { character.species }
                </Tag>
                { character.type && <Tag color="#2db7f5"> { character.type } </Tag> }
              </div>

              <Divider />

              <Layout.Content>
                <Card>
                  <Card.Grid style={{ width: '50%' }} hoverable={ false }>
                    <Typography.Title level={ 4 }>
                      Origin
                    </Typography.Title>
                    <strong>
                      { character.origin.name }
                    </strong>
                    <br />
                    <strong> { character.origin.dimension } </strong>
                    <br />
                    <br />
                    <strong
                      style={{ cursor: 'pointer' }}
                      onClick={ () => setState({ isVisible: true, residents: character.origin.residents }) }
                    >
                      <Icon type="usergroup-add"/> <span style={{ color: "#87d068" }}>{ character.origin.residents.length }</span>
                    </strong>
                  </Card.Grid>
                  <Card.Grid style={{ width: '50%' }} hoverable={ false }>
                    <Typography.Title level={ 4 }>
                      Lives In
                    </Typography.Title>
                    <strong>
                      { character.location.name }
                    </strong>
                    <br />
                    <strong> { character.location.dimension } </strong>
                    <br />
                    <br />
                    <strong
                      style={{ cursor: 'pointer' }}
                      onClick={ () => setState({ isVisible: true, residents: character.location.residents }) }
                    >
                      <Icon type="usergroup-add"/> <span style={{ color: "#87d068" }}>{ character.location.residents.length }</span>
                    </strong>
                  </Card.Grid>
                </Card>
              </Layout.Content>
            </Layout.Content>
          </Col>
        </Row>
      </Card>
    </Layout.Content>
  );
}