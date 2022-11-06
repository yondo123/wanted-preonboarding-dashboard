import { css } from 'styled-components';
import colors from '../theme';

export const textColor = (color = 'main') => {
  if (color === 'sub') {
    return css`
      color: ${colors.fontsub};
    `;
  }

  if (color === 'active') {
    return css`
      color: ${colors.primary};
    `;
  }
  return css`
    color: ${colors.font};
  `;
};

export const text = (size = 'sm') => {
  switch (size) {
    case 'sm':
      return css`
        font-size: 12px;
        line-height: 14.06px;
      `;
    case 'md':
      return css`
        font-size: 14px;
      `;
    case 'lg':
      return css`
        font-size: 16px;
        line-height: 18.75px;
      `;
    case 'xl':
      return css`
        font-size: 26px;
        line-height: 30.47px;
      `;
    default:
      return css`
        font-size: 12px;
        line-height: 14.06px;
      `;
  }
};
