import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--BG_CARD);
    padding: 20px 30px;
    border-radius: 4px;
    
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
                overflow: hidden;
                text-overflow: ellipsis;
                margin-top: 1px;
                padding: 2px 20px 2px 2px;
                max-width: 355px;
            }

            svg {
                width: 12px;
                height: 12px;
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
`