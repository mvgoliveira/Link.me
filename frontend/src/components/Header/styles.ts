import styled from "styled-components";

type ContainerPropsType = {
    imageUrl: string;
}

export const Container = styled.div<ContainerPropsType>`
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

        .profileImg {
            cursor: pointer;
            width: 55px;
            height: 55px;
            border: 1px solid var(--GREEN);

            margin-left: 12px;
            
            background: var(--BUTTON_BG);
            border-radius: 100%;

            background-image: ${props => props ? `url(${props.imageUrl})` : ""};
            background-repeat: no-repeat;
            background-size: contain;
        }
    }
`;