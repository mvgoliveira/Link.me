import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 100vh;

    .upper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        min-height: 90vh;
        color: var(--PRIMARY_FONT_COLOR);
        
        .profile {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 100px;
            
            .profileImg {
                display: flex;
                justify-content: flex-end;
                background: var(--BUTTON_BG);
                width: 100px;
                height: 100px;
                border-radius: 100%;
    
                @media(max-width: 530px) {
                    width: 80px;
                    height: 80px;
                }
    
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 100%;
                }
            }
            
            span {
                font-size: 1.25rem;
                font-weight: 500;
                margin-top: 15px;
    
                @media(max-width: 530px) {
                    font-size: 1rem;
                }
            }
        }
    
        .contacts {
            display: flex;
            gap: 10px;
            margin-top: 30px;
    
            button {
                display: flex;
                justify-content: center;
                align-items: center;
                background: var(--BUTTON_BG);
                padding: 18px;
                border-radius: 4px;
                border: none;
                color: var(--PRIMARY_FONT_COLOR);
                
                cursor: pointer;
    
                &:hover {
                    filter: brightness(0.92);
                }
    
                @media(max-width: 530px) {
                    padding: 14px;
                }
                
                svg {
                    color: var(--PRIMARY_FONT_COLOR);
                    height: 20px;
                    width: 20px;
    
                    @media(max-width: 530px) {
                        width: 18px;
                        height: 18px;
                    }
                }
            }
        }

        .adminMessage {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: var(--LINK_BLACK_GLASS_BG);
            padding: 30px;
            width: 440px;
            margin-top: 60px;

            @media(max-width: 530px) {
                width: calc(90% - 60px);
            }

            .adminMessageTexts {
                display: flex;
                flex-direction: column;
                gap: 5px;

                span {
                    font-weight: 700;
                    font-size: 1rem;
                    
                    @media(max-width: 530px) {
                        font-size: 0.9rem;
                    }
                }

                p {
                    font-size: 0.75rem;
                    font-weight: 400;
                    color: var(--SECONDARY_FONT_COLOR);

                    @media(max-width: 530px) {
                        font-size: 0.7rem;
                    }
                }
            }

            button {
                cursor: pointer;
                border: none;
                background: var(--SECONDARY_BUTTON_BG);
                font-size: 0.8rem;
                font-weight: 700;
                padding: 15px;
                color: var(--PRIMARY_FONT_COLOR);

                @media(max-width: 530px) {
                    font-size: 0.7rem;
                    width: 150px;
                }

                &:hover {
                    filter: brightness(0.92);
                }
            }
        }
    }

    .bottom {
        margin-bottom: 100px;

        .footer {
            display: flex;
            flex-direction: column;
            align-items: center;
    
            p {
                display: flex;
                gap: 5px;
                align-items: center;
                color: var(--INPUT_PLACEHOLDER_TXT);
                font-size: 0.8rem;
                margin-top: 20px;

                @media(max-width: 530px) {
                    font-size: 0.7rem;
                }

                svg {
                    height: 13px;
                    width: fit-content;
                }
            }
    
            img {
                width: 230px;
                height: fit-content;
                padding-right: 15px;

                @media(max-width: 530px) {
                    width: 150px;
                }
            }
        }
    }
`

export const LinksContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 500px;
    margin-top: 60px;
    margin-bottom: 100px;

    @media(max-width: 530px) {
        margin-top: 40px;
        width: 90%;
    }
    
    .link {
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--LINK_GLASS_BG);
        width: 100%;
        border: none;
        color: var(--PRIMARY_FONT_COLOR);
        padding: 0 50px;
        
        cursor: pointer;

        &:hover {
            filter: brightness(1.2);
        }

        svg {
            color: var(--PRIMARY_FONT_COLOR);
            min-width: 40px;
            min-height: 40px;
            margin: 25px 0;

            @media(max-width: 530px) {
                min-width: 20px;
                min-height: 20px;
            }
        }

        p {
            margin-left: 20px;
            font-size: .9rem;
            font-weight: 600;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

            @media(max-width: 530px) {
                font-size: 0.8rem;
            }
        }
    }
`;