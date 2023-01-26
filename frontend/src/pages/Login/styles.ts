import styled from "styled-components";

import bars from "../../assets/bars_illustration.svg";

export const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    min-height: 100vh;
    width: 100vw;
    color: #fff;

    background-image: url(${bars});
    background-repeat: no-repeat;
    background-position: top left;
    background-size: 60vh;

    section {
        display: flex;
        flex-direction: column;
        width: 60vw;
        justify-content: center;
        padding: 50px 50px 50px 0;
        align-items: center;
        
        article {
            display: flex;
            flex-direction: column;
            width: 350px;
            
            img {
                width: 300px;
            }

            h1 {
                font-size: 2.4rem;
                font-weight: bold;
                margin-top: 60px;
            }

            > span {
                font-weight: 300;
                font-size: 1.2rem;
                line-height: 1.5rem;
                color: #E2E2E2;
                max-width: 300px;
                margin-top: 20px;
            }

            .errorContainer {
                display: flex;
                flex-direction: column;
                padding: 20px;
                align-items: flex-start;
                margin-top: 25px;

                background: linear-gradient(268.24deg, rgba(255, 85, 85, 0.51) 0.72%, rgba(255, 78, 78, 0.25) 34.11%, rgba(255, 60, 60, 0.29) 67.51%, rgba(255, 55, 55, 0.17) 100.9%);
                border: 1px solid var(--ERROR_INPUT_BORDER);

                span {
                    font-size: .8rem;
                    font-weight: 600;
                }
                
                p {
                    font-size: .8rem;
                    font-weight: 300;
                    margin-top: 8px;
                }
            }
            
            form {
                display: flex;
                flex-direction: column;
                margin: 25px 0;
                gap: 10px;

                input {
                    background: var(--INPUT_BG);
                    border: 1.5px solid var(--INPUT_BORDER);
                    padding: 16px 20px;
                    border-radius: 4px;
                    color: #fff;
                    
                    &::placeholder {
                        font-family: 'Inter', sans-serif;
                        font-weight: 400;
                        color: var(--INPUT_PLACEHOLDER_TXT)
                    }

                    :focus {
                        outline: 1px solid var(--BUTTON_BG);
                    }
                }

                button {
                    border-radius: 4px;
                    cursor: pointer;
                    font-weight: 300;
                    padding: 20px;
                    background: var(--BUTTON_BG);
                    margin-top: 5px;
                    border: none;
                    color: #fff;

                    &:hover {
                        filter: brightness(0.9)
                    }

                    &:disabled {
                        opacity: 0.7;
                        cursor: not-allowed;
                    }
                }
            }

            small {
                color: #CFCFCF;
                font-size: 0.8rem;

                a {
                    color: var(--GREEN)
                }
            }
        }
    }
`