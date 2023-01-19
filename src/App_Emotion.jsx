
// Emotion exam
import { ColoredMessage } from "./components/ColoredMessage";
import { useState, useEffect } from "react";
import { Emotion } from "./Emotion";


function App() {

  // console.log("렌더링");

  // const [num, setNum] = useState(0);

  // useEffect([() => {alert();}], [num]);

  // const onClickButton = () => {
  //   setNum(prev => prev + 1);
  // }

  return (
    <>
      {/* <h1 style={{color: "red"}}>안녕하세요</h1>
      <ColoredMessage color="blue" message="잘 지내세요?"></ColoredMessage>
      <ColoredMessage color="pink" message="잘 지냅니다."></ColoredMessage>
      <button onClick={onClickButton}>버튼</button>
      <p>{num}</p> */}
      <Emotion />
    </>
  );
}

export default App;