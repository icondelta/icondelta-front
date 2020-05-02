import React, { useState } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import media from '../../styles/media';
import InputWrapper from '../common/InputWrapper';
import { useTokenContext } from '../../contexts/TokenContext';
import { menuHeader } from '../../styles/common';
import { icxToLoop } from '../../utils/converter';
import { useWalletContext } from '../../contexts/WalletContext';
import { dispatchIconexEvent } from '../../commons/iconex';

const balanceFormWrapper = css`
  border-top: none;
  flex: 2;
  ${media.down('sm')} {
    flex: 1;
  }
`;

const balanceFormBody = css`
  &,
  & > form {
    display: flex;
    flex: 1;
    ${media.down('sm')} {
      flex-direction: column;
    }
  }
`;

const inputWrapperStyle = css`
  ${media.up('sm')} {
    &:first-of-type {
      margin-right: 8px;
    }
    &:last-of-type {
      margin-left: 8px;
    }
  }
  label {
    display: inline-flex;
    padding: 8px;
    ${media.down('sm')} {
      padding: 4px;
    }
  }
  div {
    display: flex;
  }
  input {
    ${media.up('xs')} {
      width: auto;
    }
    flex: 2;
  }
  button {
    flex: 1;
    color: #1aaaba;
    padding: 8px 12px;
    margin-left: 8px;
    ${media.down('sm')} {
      margin-left: 4px;
    }
  }
`;

const activeStyle = (active) => css`
  & div {
    &:first-of-type {
      border-right: 1px solid #e4e5e8;
    }
    &:last-of-type {
      border-left: 1px solid #e4e5e8;
    }
  }
  & div:nth-of-type(${active}) {
    color: #1aaaba;
    background: #fff;
  }
`;

const TokenBalanceForm = () => {
  const { token } = useTokenContext();
  const { address, balance } = useWalletContext();

  const [type, setType] = useState('DEPOSIT');
  const [inputs, setInputs] = useState({
    tokenAmount: '',
    icxAmount: '',
  });

  const changeType = ({ target }) => {
    if (type !== target.textContent) {
      setType(target.textContent);
    }
  };

  const handleChange = ({ target }) => {
    const { id, value } = target;
    if (Number(value) >= 0 || !value) {
      setInputs((prev) => ({
        ...prev,
        [id]: value,
      }));
    }
  };

  const handleSubmit = (target) => (e) => {
    e.preventDefault();
    if (!address) {
      return dispatchIconexEvent({ type: 'REQUEST_ADDRESS' });
    }
    if (!inputs[`${target}Amount`]) {
      return;
    }
    if (
      (type === 'DEPOSIT' && balance[target].wallet < Number(inputs[`${target}Amount`]))
      || (type === 'WITHDRAW' && balance[target].deposited < Number(inputs[`${target}Amount`]))
    ) {
      return;
    }
    console.log(icxToLoop(inputs[`${target}Amount`]));
  };

  return (
    <div className="card" css={[balanceFormWrapper]}>
      <div css={[activeStyle(type === 'DEPOSIT' ? 1 : 2), menuHeader('div')]}>
        <div onClick={changeType}>DEPOSIT</div>
        <div onClick={changeType}>WITHDRAW</div>
      </div>
      <div className="card__body" css={[balanceFormBody]}>
        <form onSubmit={handleSubmit('icx')}>
          <InputWrapper id="icxAmount" label={`${type} ICX`} customStyle={inputWrapperStyle}>
            <div>
              <input
                id="icxAmount"
                type="number"
                min={0}
                value={inputs.icxAmount}
                onChange={handleChange}
                placeholder="0"
              />
              <button type="submit" className="btn">
                {type}
              </button>
            </div>
          </InputWrapper>
        </form>
        <form onSubmit={handleSubmit('token')}>
          <InputWrapper
            id="tokenAmount"
            label={`${type} ${token?.symbol}`}
            customStyle={inputWrapperStyle}
          >
            <div>
              <input
                id="tokenAmount"
                type="number"
                min={0}
                value={inputs.tokenAmount}
                onChange={handleChange}
                placeholder="0"
              />
              <button type="submit" className="btn">
                {type}
              </button>
            </div>
          </InputWrapper>
        </form>
      </div>
    </div>
  );
};

export default TokenBalanceForm;
