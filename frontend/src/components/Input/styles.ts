import styled from "styled-components";

type ContainerPropsType = {
    hasLabel: boolean;
}

export const Container = styled.div<ContainerPropsType>`
    display: flex;
    flex-direction: ${props => props.hasLabel ? "column" : "row"};
    align-items:  ${props => props.hasLabel ? "flex-start" : "center"};
    background: ${props => props.hasLabel ? "transparent" : "var(--INPUT_BG)"};
    border: ${props => props.hasLabel ? "none" : "1.5px solid var(--INPUT_BORDER)"};
    border-radius: 4px;
    width: 100%;
    cursor: text;
    
    svg {
        width: 20px;
        height: 20px;
        margin-left: 20px;
    }

    &:focus-within {
        outline: ${props => props.hasLabel ? "none" : "1px solid var(--BUTTON_BG)"};
    }

    label {
        margin-bottom: 10px;
    }
    
    input {
        outline: none;
        background: ${props => props.hasLabel ? "var(--INPUT_BG)" : "transparent"};
        border: ${props => props.hasLabel ? "1.5px solid var(--INPUT_BORDER)" : "none"};
        color: var(--PRIMARY_FONT_COLOR);
        width: calc(100% - 18px);
        padding: 15px 0px;
        font-size: .8rem;
        border-radius: 4px;

        padding-left: 15px;

        &::placeholder {
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            color: var(--INPUT_PLACEHOLDER_TXT)
        }

        &:focus {
            outline: ${props => props.hasLabel ? "1px solid var(--BUTTON_BG)" : "none"};
        }
    }
`; 