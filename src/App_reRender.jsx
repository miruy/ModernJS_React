import { useState, memo, useCallback } from "react";
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";

// 불필요한 재랜더링 제어 exam
// memo() : 부모컴포넌트가 재렌더링 되도 자식컴포넌트는 재랜더링 되지 않도록 제어, 컴포넌트 재랜더링 제어
// useCallback() : 컴포넌트 내 함수 재랜더링 제어

const App = memo(() => {  

  console.log("App 재랜더링");

  const [num, setNum] = useState(0);

  const onClickBtn = () => {
    setNum(prev => prev + 1);
  }

  const onClickReset = useCallback(() => {  
    setNum(0);
  }, []);

  return (
    <>
      <button onClick={onClickBtn}>버튼</button>
      <p>{num}</p>
      <Child1 onClickReset={onClickReset}/>
      <Child4 />
    </>
  );
});

export default App;



