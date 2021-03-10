import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    html {
        box-sizing: border-box;
    }

    *,*::after, *::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        background: ${({ theme }) => theme.colors.darkGreen};
        color: ${({ theme }) => theme.colors.white};
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100vh;
    }

    a, button {
        font-family: 'Montserrat', sans-serif;
    }

    h1 {
        margin: 10px;
    }

`;
