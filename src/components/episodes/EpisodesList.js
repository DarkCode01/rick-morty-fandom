import React from 'react';
import { List } from 'antd';
import EpisodesListItem from './EpisodesListItem';

export default function EpisodesList({ episodes }) {
  return (
    <List
      style={{ overflow: 'auto' }}
      dataSource={ episodes }
      renderItem={ episode => (
        <EpisodesListItem
          id={ episode.id }
          name={ episode.name }
          episode={ episode.episode }
          air_date={ episode.air_date }
        />
      )}
    />
  );
}