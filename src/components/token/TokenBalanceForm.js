import React, { useState, useCallback } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import InputWrapper from '../common/InputWrapper';

const inputWrapperStyle = css`
  width: calc(50% - 0.5rem);

  &:last-of-type {
    margin-left: 1rem;
  }

  label {
    padding: 0.5rem;
    display: inline-flex;
  }

  input {
    width: 70%;
  }

  button {
    width: 30%;
    margin: 0;
    border: none;
    border-radius: 4px;
    padding: 8px 12px;
  }
`;

const formMenu = css`
  span {
    cursor: pointer;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    display: inline-flex;
    padding: 0.5em 1em;
    border: 2px solid transparent;
    min-width: 15%;
    justify-content: center;

    &.active {
      background: #fafafa;
      border-bottom: 2px solid #1aaaba;
    }
  }
`;

const BalanceForm = ({ token }) => {
  const [type, setType] = useState('DEPOSIT');
  const [inputs, setInputs] = useState({
    withdrawal: 0,
    deposit: 0,
  });

  const changeType = ({ target }) => {
    setType(target.textContent);
  };

  const handleChange = useCallback(
    ({ target }) => {
      const { id, value } = target;
      setInputs({
        ...inputs,
        [id]: value,
      });
    },
    [inputs]
  );

  return (
    <div css={formMenu}>
      <span onClick={changeType} className={type === 'DEPOSIT' ? 'active' : ''}>
        DEPOSIT
      </span>
      <span onClick={changeType} className={type === 'WITHDRAW' ? 'active' : ''}>
        WITHDRAW
      </span>
      <div style={{ display: 'flex' }}>
        <InputWrapper id="withdraw" label={`${type} ${token?.symbol}`} customStyle={inputWrapperStyle}>
          <div>
            <input id="withdraw" type="number" value={inputs.withdrawal} onChange={handleChange} />
            <button>{type}</button>
          </div>
        </InputWrapper>
        <InputWrapper id="deposit" label={`${type} ${token?.symbol}`} customStyle={inputWrapperStyle}>
          <div>
            <input id="deposit" type="number" value={inputs.deposit} onChange={handleChange} />
            <button>{type}</button>
          </div>
        </InputWrapper>
      </div>
    </div>
  );
};

export default BalanceForm;
