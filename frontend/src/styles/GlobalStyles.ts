import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        display: flex;
        max-width: 100vw;
        overflow: hidden;
        line-height: 1;
        background: rgb(3,2,8);
        background: linear-gradient(180deg, #030208 0%, #0F0628 100%);
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    * {
        font-family: 'Inter', sans-serif;
        color: #fff;
    }

    h1 {
        font-family: 'Space Grotesk', sans-serif;
    }

    :root {
        --INPUT_BG: #2E1A68;
        --INPUT_PLACEHOLDER_TXT: #9993A8;
        --INPUT_BORDER: #472BC5;
        --BUTTON_BG: #5F32E8;
        --GREEN: #03DC69;
        --ERROR_INPUT_BORDER: #75161F;
    }
`