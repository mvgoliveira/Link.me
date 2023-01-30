import styled from "styled-components";

type ContainerPropsType = {
    isDeleted: boolean;
}

export const Container = styled.div<ContainerPropsType>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--BG_CARD);
    padding: ${props => props.isDeleted ? "0" : "20px 30px"};
    border-radius: 4px;
    min-width: 370px;
    overflow: hidden;

    margin: ${props => props.isDeleted ? "-10px 0" : "0"};
    max-height: ${props => props.isDeleted ? "0" : "none"};
    
    transition: margin 0.15s ease-out;

    @media(max-width: 570px) {
        min-width: 0;
    }
    
    .texts {
        display: flex;
        flex-direction: column;
        gap: 5px;
        max-width: 428px;
        width: 90%;

        .inputContainer {
            display: flex;
            align-items: center;
            cursor: text;
            
            :focus-within {
                svg {
                    display: none;
                }
            }
            
            input {
                display: inline-grid;
                background: transparent;
                border: none;
                color: var(--PRIMARY_FONT_COLOR);
                width: 370px;
                resize: none;
                outline: none;
                text-overflow: ellipsis;
                resize: horizontal;
            }

            p {
                cursor: text;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-top: 1px;
                padding: 2px 20px 2px 2px;
                max-width: 355px;
            }
            
            #titleSvg {
                width: 11px;
                height: 11px;
            }

            #urlSvg {
                color: var(--SECONDARY_FONT_COLOR);
                width: 10px;
                height: 10px;
                min-width: 10px;
                min-height: 10px;
            }

            .linkTitle {
                font-size: .9rem;
                font-weight: 700;
            }
            
            .linkUrl {
                font-size: .8rem;
                font-weight: 400;
                color: var(--SECONDARY_FONT_COLOR);
            }
        }
    }

    > svg {
        cursor: pointer;
        width: 18px;
        height: 18px;
        color: var(--ICON_PURPLE_COLOR);
    }

    .buttonsContainer {
        display: flex;
        gap: 10px;

        button {
            cursor: pointer;
            border: none;
            padding: 10px 18px;
            border-radius: 4px;
            color: #fff;

            &:nth-child(1) {
                background: var(--SECONDARY_BUTTON_BG);
            }

            &:nth-child(2) {
                background: var(--BUTTON_BG);
            }

            &:hover {
                filter: brightness(0.92);
            }
        }
    }
`