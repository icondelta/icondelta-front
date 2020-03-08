import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const inputWrapper = css`
  flex: 1;
  position: relative;

  label {
    text-transform: capitalize;
  }
  input {
    width: 100%;
    padding: 8px 12px;
    border-radius: 4px;
    border: 1px solid #eee;
    &[type='number'] {
      text-align: right;
    }
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
