import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Space Grotesk', sans-serif;
    }

    body {
        height: 100vh;
        width: 100%;

    }
    
    #root, .App {
        width: 100%;
        height: 100vh;
    }


    picture {
        position: absolute;
        top: 0;
        z-index: -10;
        @media screen and (width > 375px) {
            position: fixed;
        }
       
    }

 

`