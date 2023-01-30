import styled from "styled-components";

import bars from "../../assets/small_bars_illustration.svg";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    width: 100vw;
    color: var(--PRIMARY_FONT_COLOR);

    background-image: url(${bars});
    background-repeat: no-repeat;
    background-position: top left;
    background-size: 300px;
    
    section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 350px;

        margin-top: 100px;

        > button {
            display: flex;
            align-items: center;
            gap: 5px;

            cursor: pointer;
            border: none;
            color: var(--PRIMARY_COLOR);
            font-weight: 500;
            font-size: .9rem;
            background: transparent;

            svg {
                margin-left: -9px;
            }
        }

        .userInfos {
            display: flex;
            flex-direction: column;
            width: 100%;
            align-items: center;
            margin-top: 50px;
            gap: 20px; 

            .userImage {
                display: flex;
                width: 130px;
                height: 130px;
                border-radius: 100%;
                background: var(--BUTTON_BG);
                
                img {
                    border-radius: 100%;
                    width: 100%;
                    height: 100%;
                }
            }

            span {
                font-size: 1rem;
                font-weight: 600;
            }
        }

        form {
            width: 100%;
            margin-top: 50px;

            .inputsContainer {
                display: flex;
                flex-direction: column;
                gap: 30px;
            }

            .buttonsContainer {
                display: flex;
                justify-content: space-between;
                width: 100%;
                gap: 15px;

                button {
                    cursor: pointer;
                    border: none;
                    color: var(--PRIMARY_COLOR);
                    font-weight: 500;
                    font-size: .9rem;
                    background: transparent;
                    padding: 15px 0;
                    margin-top: 45px;
                    border-radius: 4px;
                    
                    &:hover {
                        filter: brightness(0.9)
                    }

                    &:nth-child(1) {
                        flex: 5;
                        background: var(--SECONDARY_BUTTON_BG);
                    }

                    &:nth-child(2) {
                        flex: 7;
                        background: var(--BUTTON_BG);
                    }
                }
            }
        }

        .deleteAccountContainer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding: 25px 0;
            background: var(--ERROR_MESSAGE_BG);
            
            margin-top: 50px;
            margin-bottom: 80px;

            .deleteAccountTexts {
                display: flex;
                flex-direction: column;
                gap: 5px;
                margin-left: 20px;

                span {
                    font-weight: 600;
                    font-size: 1rem;
                }

                p {
                    font-weight: 300;
                    font-size: 0.7rem;
                }
            }

            .deleteAccountButtons {
                display: flex;
                justify-content: center;
                gap: 10px;
                margin-right: 20px;

                button {
                    cursor: pointer;
                    border: none;
                    background: transparent;
                    font-weight: 600;
                    color: var(--PRIMARY_FONT);
                    padding: 12px 15px;
                    border-radius: 6px;
                    background: var(--ERROR_BUTTON_SECONDARY);

                    :last-child {
                        background: var(--ERROR_BUTTON_PRIMARY);
                    }
                    
                    :nth-child(2) {
                        background: var(--ERROR_BUTTON_PRIMARY);
                    }
    
                    &:hover {
                        filter: brightness(0.9)
                    }
                }
            }

        }
    }
`