// 이름 변경 어플리케이션

import { useContext } from "react";
import { AdminFlagContext } from "./providers/AdminFlagProvider";

const style = {
    width: "100px",
    padding: "6px",
    borderRadius: "8px"
}

export const EditButton = () => {

    // useContext의 인수에 참조할 Context를 지정
    const {isAdmin} = useContext(AdminFlagContext);

    // isAdmin이 false일때(관리자가 아닐때) 버튼을 비활성화 함
    return (
        
            <button style={style} disabled={!isAdmin}>수정</button>
        
    );
}