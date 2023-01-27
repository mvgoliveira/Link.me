import styled from "styled-components";

export const Container = styled.div`
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
            width: 55px;
            height: 55px;

            margin-left: 12px;
            
            background: #fff;
            border-radius: 100%100%;
        }
    }
`;