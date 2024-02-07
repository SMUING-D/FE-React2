import { RESPONSIVE_SIZE } from './constants/size'

/**
 * 반응형 디자인 (MOBILE, TABLET, PC)
 */
const WINDOW_SIZE = {
  MOBILE: `screen and (max-width: ${RESPONSIVE_SIZE.MOBILE})`,
  TABLET: `screen and (max-width: ${RESPONSIVE_SIZE.TABLET})`,
  PC: `screen and (max-width: ${RESPONSIVE_SIZE.PC})`,
}

/**
 * 정렬 사용방법
 * ROW_CENTER: 가로 정렬
 * COLUMN_CENTER: 세로 정렬
 */
const ALIGN = {
  ROW_CENTER: `
    display: flex;
    justify-content: center;
    align-items: center
    `,
  COLUMN_CENTER: `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
}

const COLOR = {
  PRIMARY: {
    BLUE: '#4a6bf9',
    BLUE_PALE: '#b0c2fc',
    BLUE_LIGHT: '#9bb4ee',
    BLUE_SECONDARY: '#eef3fe',
  },
  DARK: {
    BLACK: '#000000',
    NAVY: '#232731',
    GRAY: '#2f2f2f',
    VULCAN: '#10121d',
    LIGHT_GRAY: '#74757b',
    LIGHT_LIGHT_GRAY: '#E6E6E6',
    BROWN: '#85662b',
    BEIGE_BROWN: '#8b7f75',
  },
  LIGHT: {
    WHITE: '#ffffff',
    WHITE_GRAY: '#f6f6f7',
    YELLOW: '#ffca3d',
    BEIGE: '#f0ebe1',
  },
  TRANSPARENT: 'transparent',
}

const MAIN_COLOR = {
  BOLD_TITLE: COLOR.DARK.NAVY,
  TITLE: COLOR.DARK.GRAY,
  CONTENT: COLOR.DARK.VULCAN,
  CONTENT_BACKGROUND: COLOR.LIGHT.WHITE_GRAY,
}

const theme = { WINDOW_SIZE, ALIGN, COLOR, MAIN_COLOR }

export default theme
