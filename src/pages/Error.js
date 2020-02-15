import React from 'react';

const Error = ({ status, message, location }) => {
  return (
    <div className="error card">
      <h1>{status}</h1>
      <h2>{message}</h2>
      <p>Requested path: {`${location.pathname}${location.search || ''}`}</p>
    </div>
  );
};

export default Error;
