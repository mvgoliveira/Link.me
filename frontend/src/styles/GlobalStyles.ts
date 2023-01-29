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
        justify-content: center;
        max-width: 100vw;
        overflow-x: hidden;
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
    }

    h1 {
        font-family: 'Space Grotesk', sans-serif;
    }

     /* width */
    ::-webkit-scrollbar {
        width: 11px;
        background: #FAFAFA;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 2px #a5a5a5;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #c4c4c4;
    }

    :root {
        
        --BG_CARD: #160B36;
        --INPUT_BG: #2E1A68;
        --SECONDARY_BUTTON_BG: #462B9B;
        --INPUT_BORDER: #472BC5;
        --BUTTON_BG: #5F32E8;
        --ICON_PURPLE_COLOR: #8157FF;
        --GREEN: #03DC69;
        --ERROR_INPUT_BORDER: #75161F;
        --ERROR_BUTTON_PRIMARY: #96323B;
        --ERROR_BUTTON_SECONDARY: #72262D;
        --ERROR_MESSAGE_BG: linear-gradient(268.25deg, #862C35 0.72%, #471724 33.5%, #501521 66.29%, #340D1D 99.07%);
        --PRIMARY_FONT_COLOR: #ffffff;
        --SECONDARY_FONT_COLOR: #E2E2E2;
        --INPUT_PLACEHOLDER_TXT: #9993A8;
        
        --LINK_GLASS_BG: linear-gradient(212.1deg, #2C1D60 0%, #221154 40%, #25135D 60%, #2E1B5F 100%);
        --HOME_GLASS_BG: linear-gradient(212.1deg, #100927 0%, #140A31 20%, #1E1049 40%, #160B37 60%, #12092F 80%, #190C41 100%);

        --toastify-color-light: #221154;
        --toastify-color-error: #E14353;
        --toastify-text-color-light: #fff;
    }
`