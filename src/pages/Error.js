import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const error = css`
  width: 100%;
  padding: 16px;
  text-align: center;

  h1 {
    margin: 0.5em;
    font-size: 5rem;
    color: #e12343;
  }
`;

const Error = ({ status, message, location }) => {
  return (
    <div className="card" css={error}>
      <h1>{status}</h1>
      <h2>{message}</h2>
      <p>Requested path: {`${location.pathname}${location.search || ''}`}</p>
    </div>
  );
};

export default Error;
