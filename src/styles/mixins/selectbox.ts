import { css } from 'styled-components';
import theme from '../theme';

export const base = css`
  border: 1px solid ${theme.border};
  border-radius: 10px;
  appearance: none;
`;

export const selectbox = (size = 'md') => {
  if (size === 'lg') {
    return css`
      ${base}
      width: 240px;
      height: 60px;
    `;
  }

  return css`
    ${base}
    width: 123px;
    height: 40px;
  `;
};

export const noneSelectbox = css`
  border-style: none;
`;
