import React, { useRef } from 'react';

// ref는 특정 DOM요소나 자식 컴포넌트를 직접 참조할 수 있게 해주는 기능
// - 주로 포커스 제어
// - ref는 current 프로퍼티 실제 DOM요소를 가리킴
function R07_Hook_UseRef(props) {

    //input 요소에 참조할 ref 선언
    const inputRef = useRef(null);

    //버튼 클릭시 입력창에 포커스 주기
    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    //버튼 클릭시 입력창에 값 채우기
    const fillValue = () => {
        if (inputRef.current) {
            inputRef.current.value = "리액트 공부중";
        }
    }

    //버튼 클릭시 입력창의 값 읽기
    const readValue = () => {
        if (inputRef.current) {
            alert(`입력창의 값: ${inputRef.current.value}`);
        }
    }

    // 값 저장에 활용 가능
    //  - 리렌더링 없이 값을 변경
    //  - 리렌더링이 되어도 값 유지
    const valueRef = useRef(0);
    const [num, setNum] = React.useState(0);
    let count = 0;

    //useRef 값 변경
    const updateRefValue = () => {
        valueRef.current += 1;
        console.log(`useRef: ${valueRef.current}`);
    }

    //State 값 변경
    const updateStateValue = () => {
        setNum((prev) => prev + 1);
        console.log(`State: ${num + 1}`);
    }

    //일반변수 값 변경
    const updateValue = () => {
        count += 1;
        console.log(`일반변수: ${count}`);
    }

    return (
        <div>
            {/* ref 속성으로 DOM에 참조를 연결 */}
            <input type="text" placeholder="ref 테스트용 입력창" ref={inputRef} />
            <div>
                <button onClick={focusInput}>포커스 주기</button>
                <button onClick={fillValue}>값 자동 입력</button>
                <button onClick={readValue}>현재 값 읽기</button>
            </div>
            <div>
                <h2>값 저장에 사용</h2>
                <span>useRef 값: {valueRef.current} </span>
                <button onClick={updateRefValue}>useRef 값 변경</button>
                <br />
                <span>State 값: {num} </span>
                <button onClick={updateStateValue}>State 값 변경</button>
                <br />
                <span>일반변수 값: {count} </span>
                <button onClick={updateValue}>일반변수 값 변경</button>
            </div>
        </div>
    );
}

export default R07_Hook_UseRef;