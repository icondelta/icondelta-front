import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const inputWrapper = css`
  flex: 1 1 auto;
  position: relative;

  label {
    text-transform: capitalize;
  }

  input {
    width: 100%;
    border: none;
    text-align: right;
    border-radius: 4px;
    padding: 8px 12px;
    border: 1px solid #eee;
  }
`;

const InputWrapper = ({ id, label, customStyle, children }) => {
  return (
    <div css={[inputWrapper, customStyle]}>
      <label htmlFor={id}>{label || ''}</label>
      {children}
    </div>
  );
};

export default InputWrapper;
