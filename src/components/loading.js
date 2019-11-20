import React from 'react';
import { Icon } from 'antd';

export default function () {
  return (
    <Icon
      type="loading"
      style={{
        fontSize: '100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '100vh'
      }}
    />
  )
}