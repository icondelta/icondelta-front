import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import InputWrapper from '../common/InputWrapper';

const searchBox = css`
  padding: 0;
  margin-top: 16px;
  margin-bottom: 24px;
  display: inline-flex;
  align-items: center;
  label {
    display: none;
  }
  input {
    flex: 1;
    width: auto;
    padding-right: 28px;
  }
  i {
    cursor: default;
    top: calc(100% / 2 - 0.5em);
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
