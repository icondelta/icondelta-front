import { css } from '@emotion/core';

import media from './media';

export const global = css`
  html {
    display: flex;
    font-size: 14px;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    width: 100%;
    font-family: 'Ubuntu Mono', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fdfdfd;
  }

  * {
    box-sizing: inherit;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 4px;
    transition: background ease-in 0.1s;
  }

  input {
    appearance: none;
  }

  input:focus {
    outline-width: 1px;
    outline-color: rgba(26, 170, 186, 0.7);
  }

  .card {
    background-color: #fff;
    border: 1px solid #e4e5e8;
    border-radius: 8px;
    display: inline-flex;
    flex-direction: column;
    box-shadow: 0 3px 10px 0 rgba(66, 66, 66, 0.05);

    .card__title {
      padding: 8px 16px;

      ${media.down('sm')} {
        padding: 4px 8px;
      }
    }

    .card__body {
      padding: 8px 16px;

      ${media.down('sm')} {
        padding: 4px 8px;
      }
    }

    .card__footer {
      margin-top: -8px;
      padding: 0 16px 8px;

      ${media.down('sm')} {
        margin-top: -4px;
        padding: 0 8px 4px;
      }
    }
  }

  .inner_scroll {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    scrollbar-width: thin;
    -ms-overflow-style: -ms-autohiding-scrollbar;

    &::-webkit-scrollbar {
      cursor: pointer;
      width: 4px;
      height: 4px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background-color: #c9ccd2;
    }

    &::-webkit-scrollbar-track {
      border-radius: 8px;
      background-color: transparent;
    }
  }

  ${media.down('sm')} {
    html {
      font-size: 12px;
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
`;
