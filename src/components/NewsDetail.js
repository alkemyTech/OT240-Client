import React from 'react';
import { useParams } from 'react-router-dom';

const NewsDetail = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default NewsDetail;
