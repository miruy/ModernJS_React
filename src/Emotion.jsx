import {jsx, css} from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {

    // scss와 동일하게 작성 가능
    const containerStyle = css`
        border : solid 1px #aaa;
        border-radius: 20px;
        padding: 8px;
        margin: 8px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    `;

    //inline style과 동일하게 작성 가능
    const titleStyle = css({
        margin: 0,
        color: "tomato"
    });

    const SButton = styled.button`
        background-color: #ddd;
        border: none;
        padding: 8px;
        border-radius: 8px; // radius : 각짐 정도
        &:hover {   // scss 표기법
            background-color: #aaa;
            color: #fff;
            cursor: pointer;
        }
    `;

    return(
        <div css={containerStyle}>
            <p css={titleStyle}>Emotion 입니다.</p>
            <SButton>버튼</SButton>
        </div>
    )
}