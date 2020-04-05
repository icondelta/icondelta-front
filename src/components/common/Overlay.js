import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const overlay = css`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.05);

  & > * {
    z-index: 101;
  }
`;

const Overlay = ({ style, children }) => {
  return <div css={[overlay, style]}>{children}</div>;
};

export default Overlay;
