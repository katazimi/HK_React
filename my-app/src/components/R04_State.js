import React, { useState, Component } from 'react';

//state: 컴포넌트 내부에서 바뀌는 데이터를 의미
// - 함수형 컴포넌트에서는 useState() Hook을 사용하여 상태변수와 상태변경함수를 얻을 수 있다.
//      - 상태변수는 직접 변경할 수 없고, 반드시 상태변경함수를 사용하여 변경해야 한다!!
//      - 상태가 변경되면 컴포넌트가 재렌더링 된다.
function R04_State(props) {
    const [count, setCount] = React.useState(0); //count:상태변수, setCount:상태변경함수, 0:초기값

    const increaseCount = () => { setCount((prev) => prev + 1) };
    const decreaseCount = () => { setCount(count - 1) };
    const resetCount = () => { setCount(0) };

    // 리액트가 성능 최적화를 위해 여러 상태 업데이트를 모어서 한번에 처리
    // setState를 여러번 호출해도 한번만 렌더링 => 따라서 콜백함수를 사용하면 항상 최신 상태값을 기반으로 변경 가능
    const increaseCount3 = () => {
        setCount((prev) => prev + 1)
        setCount((prev) => prev + 1)
        setCount((prev) => prev + 1)

        // setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1) //이렇게 하면 안됨!! 이전 상태값을 기반으로 변경하는 경우 prev를 사용하는 것이 좋음
    };

    // - DOM에 영향을 미치지 않는 일반 변수 -> 리렌더링 되지 않음
    let count2 = 0; //일반 변수 => 상태변경시 컴포넌트가 재렌더링 되지 않는다.
    const increaseCount2 = () => {
        count2 += 1;
        console.log("count2:", count2);
    };

    return (
        <div>
            <p>현재 count: {count}</p>
            <button onClick={increaseCount}>count 증가</button>
            <button onClick={decreaseCount}>count 감소</button>
            <button onClick={resetCount}>count 리셋</button>
            <br />
            <p>현재 count2: {count2} (콘솔에서 확인)</p>
            <button onClick={increaseCount2}>count2 증가</button>
        </div>
    );
}

// 클래스형 컴포넌트에서 state 사용하기
class R04_StateClass extends Component {

    //State 선언방법
    // 방법1: constructor()에서 선언
    constructor(props) {
        super(props); //문법처럼 항상 선언해준다
        this.state = {
            count: 0
        };
    }

    // 방법2: constructor() 없이 state 선언 -> 이 방법을 더 많이 사용
    // state = {
    //     count2: 0
    // };

    render() {
        return (
            <div>
                <h2>클래스형: State</h2>
                <input name="count" readOnly value={this.state.count} />
                {/* <button onClick={()=>{this.state.count+=1}}>클릭</button> */}
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>클릭</button>
            </div>
        );
    }
}

export default R04_State;
export { R04_StateClass };