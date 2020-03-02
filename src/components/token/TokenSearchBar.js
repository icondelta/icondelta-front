import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import InputWrapper from '../common/InputWrapper';

const searchBox = css`
  border-bottom: 1px solid #e0e0e0;
  padding: 0 0 24px;
  margin-top: 16px;
  input {
    padding: 8px 28px 8px 12px;
  }
  i {
    cursor: default;
    top: calc((100% - 48px) / 2);
    right: 4px;
    color: #414141;
    position: absolute;
  }
`;

const TokenSearchBar = ({ text, handleTextChange }) => {
  return (
    <InputWrapper customStyle={searchBox}>
      <input type="text" value={text} onChange={handleTextChange} placeholder="Search Token" />
      <i className="material-icons">search</i>
    </InputWrapper>
  );
};

export default TokenSearchBar;
