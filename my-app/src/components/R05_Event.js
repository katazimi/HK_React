import React, { useState } from 'react';

//React에서 입력요소는 보통 제어 컴포넌트로 다룬다.
// - value값을 state로 설정하고, onChange이벤트로 state를 변경한다.
// - 이 패턴으로 입력값을 제어 및 관리한다.

//state를 사용하여 입력값 관리하는 이유
// - React 철학: 단방향 데이터 흐름, single source of truth(데이터를 신뢰할 수 있는 하나의 출처)
// - 입력값을 다른 로직에서 활용할 때 state로 관리하면 편리하다.
// - 리렌더링 시에도 입력값이 유지된다.
function R05_Event() {

    // 입력필드가 적다면 useState를 여러개 사용
    // 입력필드가 많다면 state, onChange함수로 공통처리
    // 규모가 크고, 검증이나 조건등이 많이 쓸 경우 userReducer훅 사용 권장

    const [text, setText] = React.useState('');

    // 입력요소들이 많아진다면...
    // state를 객체로 선언, handleChange함수 하나로 관리
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: ''
    });

    const handleFormChange = (e) => {
        const { name, value } = e.target; // e.target은 이벤트가 발생한 요소
        setFormData({
            ...formData, // 기존 formData 객체의 속성들을 복사, ...은 스프레드 연산자 -> username:"", password:"", email:""
            [name]: value // name 속성에 해당하는 값을 업데이트
        });
        console.log(formData);
    }

    const handleChange = (e) => {
        setText(e.target.value);
        console.log("state값: ", text);
    }

    const handleClick = (e) => {
        // 입력요소를 기본 DOM탐색으로 접근하는 방법(비추천)
        // - 리렌더링 최적화, 데이터 흐름 관리 측면에서 바람직하지 않음
        const txt = document.querySelectorAll('input')[1].value; //0번째 input요소는 App.js요소에서 병합되어 1번째로 인식됨
        console.log("입력값(DOM탐색이용)", txt);
    }

    return (
        <div>
            <input type="text"
                placeholder='아무 글자나 입력해봐요'
                value={text}
                onChange={handleChange}
            />
            <button onClick={handleClick}>버튼</button>
            <p>입력값: {text}</p>
        </div>

    );
};

export default R05_Event;