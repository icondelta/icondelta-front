import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import media from '../../common/media';
import InputWrapper from '../common/InputWrapper';
import { useState } from 'react';

const trollboxWrapper = css`
  flex: 1;

  ${media.up('sm')} {
    margin-top: 16px;
  }

  ${media.down('sm')} {
    margin-top: 8px;
  }

  .card__title {
    padding-bottom: 8px;
    border-bottom: 1px solid #e0e0e0;
  }
  .card__body {
    flex: 1;
    padding-top: 0;
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

const Trollbox = () => {
  const [say, setSay] = useState('');

  const handleChange = e => {
    console.log(e);
    setSay(e.target.value);
  };

  const handleSearch = e => {
    console.log('?');
  };

  return (
    <div className="card" css={[trollboxWrapper]}>
      <div className="card__title">Trollbox</div>
      <div className="card__body">
        <div className="inner_scroll"></div>
      </div>
      <div className="card__footer">
        <InputWrapper id="trolling" customStyle={[trollingInput]}>
          <input
            type="search"
            id="trolling"
            name="trolling"
            value={say}
            onChange={handleChange}
            // onKeyPress={handleKeyPress}
          />
          <button className="btn">send</button>
        </InputWrapper>
      </div>
    </div>
  );
};

export default Trollbox;
