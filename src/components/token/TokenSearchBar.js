import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import InputWrapper from '../common/InputWrapper';

const searchBox = css`
  border-bottom: 1px solid #9e9e9e;
  padding: calc(1.5rem - 8px) 0 1.5rem;
  input {
    padding: 8px 24px 8px 12px !important; // ...better way?
  }
`;

const iconStyle = css`
  cursor: pointer;
  right: 4px;
  bottom: 1.75rem;
  color: #414141;
  position: absolute;
`;

const TokenSearchBar = ({ text, handleTextChange }) => {
  return (
    <InputWrapper customStyle={searchBox}>
      <input type="text" value={text} onChange={handleTextChange} placeholder="Search Token" />
      <i className="material-icons" css={iconStyle}>
        search
      </i>
    </InputWrapper>
  );
};

export default TokenSearchBar;
