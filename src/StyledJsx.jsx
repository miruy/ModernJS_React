export const StyledJsx = () => {
    return(
        <>
        <div className="container">
            <p className="title">StyledJsx 입니다.</p>
            <button className="button">버튼</button>
        </div>

        <style jsx>
            {`
                .container {
                    border : solid 1px blue;
                    border-radius: 20px;
                    padding: 8px;
                    margin: 8px;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }
                
                .title {
                    margin: 0;
                    color: blue;
                }
                
                .button {
                    background-color: red;
                    border: none;
                    padding: 8px;
                    border-radius: 8px; 
                }
            `}
        </style>
        </>
    );
};