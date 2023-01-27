import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    min-height: 100vh;
    max-width: 100vw;
    width: 100vw;
    color: var(--PRIMARY_FONT_COLOR);

    .content {
        display: flex;
        flex: 1;
        margin: 0 150px;
        gap: 85px;
        margin-top: 50px;

        article {
            flex: 1;
        }
        
        .menu {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            border-radius: 4px;
            background: var(--HOME_GLASS_BG);
            margin-bottom: 50px;
            padding: 50px 0;

            .upper {
                display: flex;
                flex-direction: column;
                width: 100%;
                align-items: center;
                gap: 15px;

                button {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    
                    cursor: pointer;
                    border: none;
                    background: var(--BUTTON_BG);
                    color: var(--PRIMARY_FONT_COLOR);
                    font-weight: 600;
                    font-size: .9rem;
                    width: 80%;
                    padding: 20px;
                    border-radius: 8px;
                    margin-bottom: 30px;

                    svg {
                        width: 20px;
                        height: 20px;
                    }

                    &:hover {
                        filter: brightness(0.92);
                    }
                }

                .socialInput {
                    display: flex;
                    align-items: center;
                    background: var(--INPUT_BG);
                    border: 1.5px solid var(--INPUT_BORDER);
                    border-radius: 4px;
                    gap: 15px;
                    width: calc(80% - 0px);
                    cursor: text;
                    
                    svg {
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

                        &::placeholder {
                            font-family: 'Inter', sans-serif;
                            font-weight: 400;
                            color: var(--INPUT_PLACEHOLDER_TXT)
                        }
                    }
                }
            }

            .bottom {
                display: flex;
                width: 80%;
                justify-content: space-between;
                padding-top: 65px;
                gap: 15px;

                
                button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    background: var(--SECONDARY_BUTTON_BG);
                    border: none;
                    color: var(--PRIMARY_FONT_COLOR);
                    font-weight: 400;
                    padding: 20px 16px;
                    border-radius: 8px;
                    gap: 5px;

                    &:nth-child(1) {
                        flex: 2;
                    }

                    &:nth-child(2) {
                        flex: 1;
                    }

                    &:hover {
                        filter: brightness(0.92);
                    }

                    svg {
                        width: 15px;
                        height: 15px;
                    }
                }
            }
        }
    }
`

export const LinksContainer = styled.article`
    display: flex;
    flex-direction: column;
    gap: 20px;
`