import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, List, Comment, Avatar } from 'antd';

export default function Residents({ residents, isVisible, handle}) {
  return (
    <Modal
      title="Residents"
      visible={isVisible}
      onOk={() => handle({ isVisible: false, residents: [] })}
      onCancel={() => handle({ isVisible: false, residents: [] })}
      okButtonProps={{ style: { display: 'none' } }}
      cancelButtonProps={{ style: { display: 'none' } }}
    >
      <List
        style={{ overflow: 'auto', height: '300px' }}
        grid={{ gutter: 16, column: 4 }}
        dataSource={ residents }
        renderItem={ resident => (
          <List.Item>
            <Comment
              author={
                <Link to={`/character/${resident.id}`}>
                  {
                    `
                      ${
                        resident
                          .name
                          .split('')
                          .splice(0, 5)
                          .join('')
                      }...
                    `
                  }
                </Link>
              }
              avatar={
                <Avatar
                  src={ resident.image }
                  alt={ resident.name }
                />
              }
            />
          </List.Item>
        )}
      />
    </Modal>
  );
}