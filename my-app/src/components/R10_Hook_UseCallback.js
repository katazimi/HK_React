import React, { useCallback, useState } from 'react';

//자식 컴포넌트
// - memo함수: 부모 컴포넌트가 리렌더링되더라도, props가 변경되지 않으면 리렌더링을 방지
const ChildButton = React.memo(({ onClick }) => {
    console.log("자식 컴포넌트 렌더링");
    return (
        <button onClick={onClick}>자식 버튼</button>
    );
})

function R10_Hook_UseCallback(props) {

    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    //부모 컴포넌트에서 state가 자주 변경되는데, 자식컴포넌트는 꼭 렌더링될 필요가 없는 경우 -> 성능최적화
    const handleClick = useCallback(() => {
        alert("자식버튼 클릭됨");
    }, []); //의존성 배열[]을 비워두면 최초 1회만 함수 생성

    // 일반함수를 사용하면 자식 컴포넌트를 전달할때 마다 새로 생성된 함수가 전달됨
    // -> 자식 컴포넌트는 props가 변경되었다고 인식하여 리렌더링됨
    const handleClick2 = () => {
        alert("자식버튼 클릭됨");
    }

    return (
        <div>
            <h2>useCallback 확인</h2>
            <p>부모 count: {count}</p>
            <button onClick={() => setCount(count + 1)}>부모 count 증가</button>
            <br />
            <ChildButton onClick={handleClick} />

        </div>
    );
}

export default R10_Hook_UseCallback;