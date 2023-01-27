import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    background: var(--INPUT_BG);
    border: 1.5px solid var(--INPUT_BORDER);
    border-radius: 4px;
    width: 100%;
    cursor: text;
    
    svg {
        width: 20px;
        height: 20px;
        margin-left: 20px;
    }

    &:focus-within {
        outline: 1px solid var(--BUTTON_BG);
    }
    
    input {
        outline: none;
        background: transparent;
        border: none;
        color: var(--PRIMARY_FONT_COLOR);
        width: 100%;
        padding: 15px 0px;
        font-size: .8rem;
        margin-left: 15px;

        &::placeholder {
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            color: var(--INPUT_PLACEHOLDER_TXT)
        }
    }
`; 