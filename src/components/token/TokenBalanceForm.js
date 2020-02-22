import React, { useState, useCallback } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import InputWrapper from '../common/InputWrapper';

const inputWrapperStyle = css`
  label {
    padding: 0.5rem;
    display: inline-flex;
  }

  div {
    display: flex;
  }

  input {
    width: auto;
    flex: 2 0 auto;
  }

  button {
    flex: 1 0 auto;
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
    tokenAmount: '',
    icxAmount: '',
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
        <InputWrapper id="tokenAmount" label={`${type} ${token?.symbol}`} customStyle={inputWrapperStyle}>
          <div>
            <input id="tokenAmount" type="number" value={inputs.tokenAmount} onChange={handleChange} placeholder="0" />
            <button>{type}</button>
          </div>
        </InputWrapper>
        <InputWrapper id="icxAmount" label={`${type} ${token?.symbol}`} customStyle={inputWrapperStyle}>
          <div>
            <input id="icxAmount" type="number" value={inputs.icxAmount} onChange={handleChange} placeholder="0" />
            <button>{type}</button>
          </div>
        </InputWrapper>
      </div>
    </div>
  );
};

export default BalanceForm;
