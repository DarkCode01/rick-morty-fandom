import React from 'react';
import { Row } from 'antd';

import CharectersItem from './charactersListItem';

export default function({ characters }) {
  return (
    <Row gutter={[16, 16]}>
      { characters.map(character => (
          <CharectersItem key={character.id} character={character} />
        ))
      }
    </Row>
  );
}