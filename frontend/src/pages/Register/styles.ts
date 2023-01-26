import styled from "styled-components";

import bars from "../../assets/bars_illustration.svg";

export const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    min-height: 100vh;
    width: 100vw;
    color: var(--PRIMARY-FONT-COLOR);

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
                color: var(--SECONDARY-FONT-COLOR);
                max-width: 300px;
                margin-top: 20px;
                line-height: 1.5rem;
            }
            
            form {
                display: flex;
                flex-direction: column;
                margin: 25px 0;
                gap: 10px;

                input {
                    background: var(--INPUT_BG);
                    border: 1.5px solid var(--INPUT_BORDER);
                    color: var(--PRIMARY-FONT-COLOR);
                    padding: 16px 20px;
                    border-radius: 4px;
                    
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
                    color: var(--PRIMARY-FONT-COLOR);


                    &:hover {
                        filter: brightness(0.9)
                    }
                }
            }

            small {
                color: var(--SECONDARY-FONT-COLOR);
                font-size: 0.8rem;

                a {
                    color: var(--GREEN)
                }
            }
        }
    }
`