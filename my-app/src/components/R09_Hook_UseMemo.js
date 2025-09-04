import React, { useState, useMemo, useCallback } from 'react';

// useMemo: 계산 결과값을 재생성 방지
// useCallback: 함수 재생성 방지

// 일반적인 방법으로 확인
const MemoTest = () => {

    //파라미터로 값을 받아서 계산을 실행하는 함수
    const memoTest = (n) => {
        return n * n;
    }

    console.log(memoTest(5)); // 계산결과: 25
    console.log(memoTest(5)); // 계산결과: 25

    //useMemo 개념 확인
    const memo = {}; //객체(json형태)

    const memoTest2 = (n) => {
        if (memo[n] !== undefined) {
            return memo[n]; //동일한 결과값이 있으므로 값을 바로 반환
        }
        //처음 계산한다면 계산 실행후 결과 저장
        memo[n] = n * n;
        return memo[n];
    }
    console.log("memo구현:", memoTest2(5)); // 계산결과: 25
    console.log("memo구현:", memoTest2(5)); // 계산결과: 25
}

function R09_Hook_UseMemo(props) {

    const [num, setNum] = useState(0); //계산에 사용될 값
    const [other, setOther] = useState(false); //다른용도

    //파라미터로 값을 받아서 계산을 실행하는 함수
    const expensiveCalculation = (n) => {
        let total = 0;
        for (let i = 1; i <= 5000000; i++) {
            total += i % (n + 1);
        }
        return total;
    }
    //useMemo를 사용해서 계산 기능을 설정하면 num값이 변경될때마다 계산 실행
    const memoizedValue = useMemo(() => expensiveCalculation(num), [num]);

    //useCallback(func,[])
    //함수 memoization을 제공 -> 리렌더링되면 함수도 새로 생성됨
    // 자식 컴포넌트에 props로 함수를 전달할 때 유용
    const handelClick = useCallback(() => {
        setNum((prev) => prev + 1);
    }, [setNum]);

    return (
        <div>
            <div>
                <h2>메모제이션 개념</h2>
                <MemoTest />
                <div>
                    <h2>useMemo 사용하기</h2>
                    <p>num:{num}</p>
                    <button onClick={handelClick}>num 증가</button>
                    <p>계산된 값:{memoizedValue}</p>
                    <button onClick={() => setOther((s) => !s)}>memo동작확인</button>
                </div>
            </div>
        </div>
    );
}

export default R09_Hook_UseMemo;
export { MemoTest };