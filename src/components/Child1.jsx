import {Child2} from "./Child2";
import {Child3} from "./Child3";
import { memo } from "react";

const style = {
    height: "200px",
    backgroundColor: "lightblue",
    padding: "8px"
};

export const Child1 = memo((props) => { // props : App에서 보낸 onclickReset()
    console.log("Child1 렌더링");

    const {onClickReset} = props;   // 인자로 받은 props(=함수)를 함수의 형태로 정의 

    return (
        <>
            <div style={style}>
                <p>Child1</p>
                <button onClick={onClickReset}>Reset</button>
                <Child2 />
                <Child3 />
            </div>
        </>
    );
})
