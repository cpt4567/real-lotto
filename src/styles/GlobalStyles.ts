import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;800;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-family: 'Noto Sans KR', system-ui, -apple-system, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    color-scheme: dark;
    color: rgba(255, 255, 255, 0.9);
    min-height: 100vh;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    min-height: 100vh;
    overflow-x: hidden;
  }

  #root {
    min-height: 100vh;
  }
`;
