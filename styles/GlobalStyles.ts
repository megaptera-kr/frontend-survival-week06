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
    
    }

    html {
        font-size: 62.5%;
        font-family: 'Noto Sans KR', sans-serif;
    }
    
    #root{
        background: ${({ theme }) => theme.palette['green-900']};
        border-radius: 3.2rem;
        min-width: 37.5rem;
        max-width: 42.8rem;
        padding: 2rem 1.6rem;
        margin: 4rem auto;
    }

    body {
        font-size: 1.4rem;
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
  }
`;

export default GlobalStyles;
