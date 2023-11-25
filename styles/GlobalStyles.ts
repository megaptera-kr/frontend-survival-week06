import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 0;
        outline: none;
    }

    html,
    body,
    #root {
    height: 100%;
    overflow: hidden;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Noto Sans KR', sans-serif;
        background: ${({ theme }) =>
    theme.palette['amber-100']};
        font-size: 14px;
        letter-spacing: -0.25px;
    }

    

    a { 
        color: #fff; 
        text-decoration: none; 
        outline: none; 
    } 

    svg {
        flex-shrink: 0;
    }
`;

export default GlobalStyles;
