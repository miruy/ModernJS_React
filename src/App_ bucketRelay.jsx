

// 버킷릴레이 exam
// 버킷릴레이 : 부모 컴포넌트에서 가장 아래의 자식 컴포넌트로 데이터를 전달하고자 할때 기본 props를 사용하는 방식, 불필요한 props 전달이 생김
// 글로벌 state : 전역에서 사용가능한 상태를 의미, 불필요한 props 전달을 방지함

import { useState } from "react";
import { Card } from "./components/Card";

const App = () => {  

  // 관리자 플래그
  const [isAdmin, setIsAdmin] = useState(false);

  // [전환] 클릭시
  const onClickSwitch = () => {
    setIsAdmin(!isAdmin);
  }

  return (
    <>
      {/* 관리자 플래그가 true일때와 그렇지 않을 때 문자열 출력 구분 */}
      <button onClick={onClickSwitch}>전환</button>
      <Card isAdmin={isAdmin} />
    </>
  );
};

export default App;
