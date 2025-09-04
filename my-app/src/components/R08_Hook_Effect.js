import React, { useEffect } from 'react';

//useEffect hook: 함수형 컴포넌트에서 리액트 생명주기 구현
// - 컴포넌트 렌더링 후 실행 시점에 따라 코드 실
// - useEffect(기능,[]) : []의존성 배열안에 상태 변경 설정
//      - []설정하면 렌더링 됐을 때 최초 1회만 실행
//      - [num] num이라는 state에서 변경이 일어날때 마다 실행
//      - 기능(실행코드) 안에서 return은 언마운트될때 실행
// - 구현할 내용: 컴포넌트가 마운트될때 타이머 기능 실행하기

function R08_Hook_Effect(props) {

    const [seconds, setSeconds] = React.useState(0);

    useEffect(() => {
        //컴포넌트가 마운트(화면에 처음 렌더링)될때 실행
        const id = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(id); //언마운트될때 타이머 제거
    }, []); //라이프 사이클 구현
            //[]빈배열: 마운트될때 1회 실행
            //배열에 상태정의 - 상태가 변경될때마다 실행
            //return 언마운트 될때 실행

    //언마운트될때 실행
    //setInterval 제거 -> 메모리/백그라운드 직접 정리
    return (
        <div>
            <p>타이머: {seconds}초</p>
        </div>
    );
}

export default R08_Hook_Effect;