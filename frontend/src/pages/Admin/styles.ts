import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100vw;
    max-width: 1560px;
    color: var(--PRIMARY_FONT_COLOR);
    
    .content {
        display: flex;
        flex: 1;
        gap: 85px;
        margin-top: 50px;
        padding: 0 150px;
        
        @media(max-width: 1335px) {
            padding: 0 50px;
        }
        
        @media(max-width: 1145px) {
            padding: 0 30px;
            gap: 30px;
        }

        @media(max-width: 1040px) {
            align-items: center;
            flex-direction: column; 
            padding: 0 50px;
        }
        
        @media(max-width: 570px) {
            padding: 0 20px;
        }

        article {
            flex: 1;
        }

        .linkContainer {
            display: flex;
            flex: 1;
            flex-direction: column;
            gap: 20px;
            margin-bottom: 50px;

            @media(max-width: 1040px) {
                width: 100%;
            }
        }
    }
`

type MenuPropsType = {
    isAddNewLinkActive: boolean;
}

export const Menu = styled.article<MenuPropsType>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    background: var(--HOME_GLASS_BG);
    margin-bottom: 50px;
    padding: 50px 0;
    width: 100%;
    min-width: 465px;
    height: 100%;
    min-height: 521px;

    @media(max-width: 570px) {
        min-width: 0;
    }

    .upper {
        display: flex;
        flex-direction: column;
        width: 80%;
        align-items: center;
        gap: 15px;
        
        .addNewLinkContainer {
            display: ${props => props.isAddNewLinkActive ? "flex" : "none"};
            width: 100%;
            
            form {
                display: flex;
                width: 100%;
                flex-direction: column;
                gap: 15px;
            }

            .addNewLinkButtonsContainer {
                display: flex;
                gap: 25px;

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
                    width: 100%;
                    padding: 18px;
                    border-radius: 8px;
                    margin-bottom: 30px;

                    &:hover {
                        filter: brightness(0.92);
                    }

                    &:nth-child(1) {
                        flex: 1;
                        background: #462B9B;
                    }

                    &:nth-child(2) {
                        flex: 2;
                    }
                }
            }
        }

        > button {
            display: ${props => props.isAddNewLinkActive ? "none" : "flex"};
            justify-content: center;
            align-items: center;
            
            cursor: pointer;
            border: none;
            background: var(--BUTTON_BG);
            color: var(--PRIMARY_FONT_COLOR);
            font-weight: 600;
            font-size: .9rem;
            width: 100%;
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
    }

    .bottom {
        display: flex;
        width: 80%;
        justify-content: space-between;
        padding-top: 65px;
        gap: 15px;

        @media(max-width: 570px) {
            flex-direction: column;
        }
        
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
                width: 18px;
                height: 18px;
            }
        }
    }
`