import React from 'react';
import { Link } from 'react-router-dom';

export default function PageItem (path) {
  return function (current, type, originalElement ) {
    if (type === 'next' || type === 'prev') return <Link to={`${path}?page=${current}`}> <strong> { type } </strong> </Link>;
  
    return <Link to={`${path}?page=${current}`}> { current } </Link>;
  }
}