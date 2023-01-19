import styled from "styled-components";

const StyledDiv = styled.div`
    padding: "8px";
`;

const SContainer = styled.div`
    border : solid 1px yellow;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const STitle = styled.p`
    margin: 0;
    color: yellow;
`;

const SButton = styled.button`
    background-color: pink;
    border: none;
    padding: 8px;
    border-radius: 8px; 
    &:hover {   
        background-color: tomato;
        color: green;
        cursor: pointer;
    }
`;

export const StyledComponents = () => {
    return(
        <SContainer>
            <STitle>StyledCoponents 입니다.</STitle>
            <SButton>버튼</SButton>
        </SContainer>
    )
}