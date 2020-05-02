import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import media from '../../styles/media';
import InputWrapper from '../common/InputWrapper';
import { useState } from 'react';

const trollBoxWrapper = css`
  flex: 1;

  ${media.up('sm')} {
    margin-top: 16px;
  }

  ${media.down('sm')} {
    margin-top: 8px;
  }

  .card__title {
    padding: 8px 16px;
    border-bottom: 1px solid #e0e0e0;
  }
  .inner_scroll {
    margin-bottom: 8px;
    ${media.down('sm')} {
      margin-bottom: 4px;
      min-height: 120px;
      max-height: 120px;
    }
  }
`;

const trollingInput = css`
  display: flex;
  input {
    width: 75%;
  }
  button {
    width: 25%;
    color: #1aaaba;
    padding: 8px 12px;
    ${media.up('sm')} {
      margin-left: 8px;
    }

    ${media.down('sm')} {
      margin-left: 4px;
    }
  }
`;

const TrollBox = () => {
  const [say, setSay] = useState('');

  const handleChange = ({ target }) => {
    setSay(target.value);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      console.log('enter!');
    }
  };

  return (
    <div className="card" css={[trollBoxWrapper]}>
      <div className="card__title">TROLLBOX</div>
      <div className="inner_scroll" />
      <div className="card__footer">
        <InputWrapper id="trolling" customStyle={[trollingInput]}>
          <input
            type="text"
            id="trolling"
            name="trolling"
            value={say}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <button className="btn">send</button>
        </InputWrapper>
      </div>
    </div>
  );
};

export default TrollBox;
