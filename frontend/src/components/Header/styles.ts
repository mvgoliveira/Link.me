import styled from "styled-components";

type ContainerPropsType = {
    imageUrl: string;
    isProfileMenuOpen: boolean;
}

export const Container = styled.div<ContainerPropsType>`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 150px;
    padding: 0 150px;

    img {
        width: 190px;
    }

    .profile {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .texts {
            display: flex;
            flex-direction: column;
            align-items: flex-end;

            p {
                font-size: 1rem;
                font-weight: 400;
            }

            button {
                margin-top: 3px;
                cursor: pointer;
                border: none;
                padding: 0;
                background: transparent;
                font-weight: 400;
                color: var(--GREEN);
                width: fit-content;

                &:hover {
                    filter: brightness(0.92);
                }
            }
        }

        #profileImg {
            display: flex;
            justify-content: flex-end;
            cursor: pointer;
            width: 53px;
            height: 53px;

            margin-left: 12px;
            
            background: var(--BUTTON_BG);
            border-radius: 100%;

            background-image: ${props => props ? `url(${props.imageUrl})` : ""};
            background-repeat: no-repeat;
            background-size: contain;

            border: ${props => props.isProfileMenuOpen ? "2px solid var(--GREEN)" : "2px solid transparent"};
        }

        .profileMenuContainer{
            position: absolute;
            
        }
   
        .profileMenu {
            display: ${props => props.isProfileMenuOpen ? "flex" : "none"};

            position: absolute;

            padding: 10px 0;
            border-radius: 4px;
            top: 118px;
            background: var(--INPUT_BG);

            .triangleContainer {
                display: flex;
                justify-content: flex-end;
                position: absolute;
                width: 88%;
                top: -12px;
            }

            .triangle {
                fill: var(--INPUT_BG);
                stroke: var(--INPUT_BG);
                stroke-width: 30;
            }
            
            .signOutButton {
                display: flex;
                align-items: center;
                cursor: pointer;
                gap: 8px;
                padding: 10px 35px;
                background: var(--INPUT_BG);
                border: 0;
                color: #fff;

                &:hover {
                    filter: brightness(1.3);
                }

                p {
                    font-size: 0.938rem;
                }

                svg {
                    width: 0.938rem;
                    height: 0.938rem;
                }
            }
    
        }
    }
`;