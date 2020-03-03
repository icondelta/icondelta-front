import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const historyHeaderWrapper = css`
  display: flex;
  border-bottom: 1px solid #e0e0e0;

  div {
    flex: 1;
    padding: 8px 0;
    position: relative;
    text-align: center;
    text-transform: uppercase;
  }
`;

const HistoryHeader = ({ type }) => {
  return (
    <div css={[historyHeaderWrapper]}>
      {type === 'order' ? (
        <>
          <div>price</div>
          <div>amount</div>
          <div>icx</div>
          <div>filled</div>
          <div>orderedAt</div>
        </>
      ) : (
        <>
          <div>price</div>
          <div>amount</div>
          <div>total</div>
          <div>tradedAt</div>
        </>
      )}
    </div>
  );
};

export default HistoryHeader;
