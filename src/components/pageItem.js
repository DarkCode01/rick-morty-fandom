import React from 'react';
import { Link } from 'react-router-dom';

export default function PageItem(current, type, originalElement ) {
  if (type === 'next' || type === 'prev') return <Link to={`/?page=${current}`}> <strong> { type } </strong> </Link>;

  return <Link to={`/?page=${current}`}> { current } </Link>;
}