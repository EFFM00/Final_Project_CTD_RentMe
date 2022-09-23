import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Montserrat', sans-serif;
        cursor: none;
    }

    .cursor, .cursor:hover {
        z-index: 1;
        width: 25px;
        height: 25px;
        border: 5px solid #FD866E;
        border-radius: 50%;
        position: absolute;
    }

    @keyframes cursorAnim {
        from {
            transform: scale(1);
        }
        to {
            transform: scale(.7);
        }
    }

    @keyframes cursorAnim2 {
        from {
            transform: scale(1);
        }
        to {
            transform: scale(.4);
        }
    }

    @keyframes cursorAnim3 {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(3);
        }
        100% {
            transform: scale(1);
            opacity: 0;
        }
    }

    .expand {
        animation: cursorAnim3 .5s forwards;
        border: 1px solid #FD866E;
    }
`;
