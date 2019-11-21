import React from 'react';
import { Alert } from 'antd';


export default function ({ message, description, type}) {
  return (
    <Alert
      message={message}
      description={description}
      type={type}
      // style={{
      //   fontSize: '100px',
      //   display: 'flex',
      //   flexDirection: 'column',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   textAlign: 'center',
      //   minHeight: '100vh'
      // }}
    />
  );
}