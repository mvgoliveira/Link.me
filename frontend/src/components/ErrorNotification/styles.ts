import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    align-items: flex-start;
    margin-top: 25px;

    background: var(--ERROR_MESSAGE_BG);
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
`;