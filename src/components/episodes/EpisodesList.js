import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Card, Typography, List } from 'antd';

export default function EpisodesList({ episodes }) {
  return (
    <Layout.Content>
      <Card>
        <Typography.Title level={ 1 }>
          Episodes
        </Typography.Title>

        {/* Espisodes list */}
        <List
          style={{ overflow: 'auto', height: '300px' }}
          dataSource={ episodes }
          renderItem={ episode => (
            <List.Item key={ episode.id }>
              <List.Item.Meta
                title={<Link to="/episodes/1">{ episode.name }</Link>}
                description={ episode.episode }
              />
              <div>{ episode.air_date }</div>
            </List.Item>
          )}
        />
      </Card>
    </Layout.Content>
  );
}