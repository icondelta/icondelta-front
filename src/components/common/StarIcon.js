import React from 'react';

import { ReactComponent as Star } from '../../styles/star.svg';

const StarIcon = ({ fill, onClick }) => {
  return <Star fill={fill ? '#f8c917' : 'transparent'} onClick={onClick} />;
};

export default StarIcon;
