

// 버킷릴레이 제어 및 글로벌 state exam
// 버킷릴레이 : 부모 컴포넌트에서 가장 아래의 자식 컴포넌트로 데이터를 전달하고자 할때 기본 props를 사용하는 방식, 불필요한 props 전달이 생김
// 글로벌 state : 전역에서 사용가능한 상태를 의미, 불필요한 props 전달을 방지함
/* 
  React에서 제공하는 createContext를 이용한 state관리
  1. React.createContext로 Context의 provider(파일)을 작성한다.
  2. 작성한 Context의 Provider로 글로벌 State를 다루고자 하는 컴포넌트를 감싼다.
  3. State를 참조할 컴포넌트에서 React.useContext를 사용한다.
*/

import { useContext, useState } from "react";
import { Card } from "./components/Card";
import { AdminFlagContext } from "./components/providers/AdminFlagProvider";

const App = () => {  

  // 관리자 플래그
  const {isAdmin, setIsAdmin} = useContext(AdminFlagContext);

  // [전환] 클릭시
  const onClickSwitch = () => {
    setIsAdmin(!isAdmin);
  }

  return (
    <>
      <div>
        {isAdmin ? <span>관리자 입니다.</span> : <span>관리자가 아닙니다.</span>}
      
        <button onClick={onClickSwitch}>전환</button>
        <Card isAdmin={isAdmin} />
      </div>
    </>
  );
};

export default App;
