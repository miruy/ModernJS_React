// 부모 컴포넌트에서 자식 컴포넌트로 props를 이용해 전달하고자 하는 것에 대한 파일

import { createContext, useState } from "react";

export const AdminFlagContext = createContext({});  // 이 함수를 이용하여 아래의 AdminFlagProvider를 사용할 수 있음 / 물건을 계산하기 위한 장바구니 역할

export const AdminFlagProvider = (props) => {   // 물건의 역할
    
    const {children} = props;

    // 관리자 플래그
    const [isAdmin, setIsAdmin] = useState(false);  // 물건의 정보 역할

    // AdminFlagContext 안에 Provider가 있으므로 각각 children을 감싼다.
    // value 안에 글로벌로 다룰 실젯값을 설정
    return (
        
            <AdminFlagContext.Provider value={{ isAdmin, setIsAdmin }}>   
                {children}
            </AdminFlagContext.Provider>
        
    );
}