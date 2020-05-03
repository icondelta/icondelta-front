import { css } from '@emotion/core';

const menuHeaderStyle = `
  text-transform: uppercase;
  border-top: 1px solid #e4e5e8;
  user-select: none;
  flex: 1 1 auto;
  cursor: pointer;
  line-height: 2.5;
  display: inline-flex;
  color: #9e9e9e;
  background-color: #eeeeee;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`

export const menuHeader = (target) =>
  target
    ? css`
      display: flex;
      background: transparent;

      ${target} {
        ${menuHeaderStyle}
      }
    `
    : css`
      ${menuHeaderStyle}
    `;

export const tableHeader = css`
  display: flex;
  padding: 0 8px;

  div {
    padding: 8px 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;

export const headerSize = (...sizes) => css`
  ${sizes.map(
    (size, i) => css`
      div:nth-of-type(${i + 1}) {
        flex: ${size};
      }
    `
  )}
`;

export const tableBody = css`
  display: flex;
  line-height: 2;
  padding: 0 4px 0 8px;
  div {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;
