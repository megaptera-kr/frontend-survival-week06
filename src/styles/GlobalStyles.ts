import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    :root {}

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 1.6rem;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${({ theme }) => theme.bodyColor};
        
        line-height: 1.5;
        letter-spacing: -0.375px;
        font-weight: 400;
        
        -webkit-overflow-scrolling: touch;
        
    }

    #root {
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 0;
        outline: none;
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
