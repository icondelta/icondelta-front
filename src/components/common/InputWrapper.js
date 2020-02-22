import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const inputWrapper = css`
  flex: 1 1 auto;
  position: relative;

  & + & {
    margin-left: 1rem;
  }

  label {
    text-transform: capitalize;
  }

  input {
    width: 100%;
    border: none;
    border-radius: 4px;
    padding: 8px 12px;
    background-color: #fafafa;
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
