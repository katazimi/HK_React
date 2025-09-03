import { Fragment } from "react/jsx-runtime";

//JSX는 JS+XML 문법
// - 반드시 하나의 부모요소로 감싸야함
// - 중괄호 {} 사용하여 JS 표현식 삽입 가능
// - 속성 작성시 카멜방식 사용(fontWeight, onClick)

function R01_JSXBasic() {

    const name = "Kang";
    const isStudent = true;
    const notAStudent = true;
    const score = 88;
    const upper = (s) => s.toUpperCase(); //함수선언
    // css를 인라인 방식으로 사용할 경우
    const highlight = { color: "blue", fontWeight: "bold" };

    return (
        <div>
            <p>안녕하세요, {name}님!!</p>
            <p>{isStudent ? "학생입니다." : "학생이 아닙니다."}</p>
            <p>{notAStudent && "학생이 아닙니다."}</p>
            <p>점수: {score}점, 목표점수: {score + 12}점</p>
            <p>대문자로 변환: {upper(name)}</p>
            <p style={highlight}>폰트색은 파란색, 굵게 표시</p>
            <button onClick={() => alert("버튼이 클릭되었습니다.")}>클릭</button>

        </div>

        // <Fragment>
        //    <div></div>
        // </Fragment>

        // <>  
        //     <div></div>
        // </>
    );
}

export default R01_JSXBasic;