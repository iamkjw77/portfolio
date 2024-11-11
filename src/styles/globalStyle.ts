import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'Pretendard';
    src: url('/font/PretendardVariable.woff2') format('woff2-variations');
    font-weight: 45 920;
    font-style: normal;
    font-display: swap;
  }

  body {
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
