import React, { Component } from 'react';

// 컴포넌트는 각각의 독립된 UI 조각 개념이다.(재사용)
// 종류는 함수형,클래스형
// 컴포넌트에는 state,props가 있다.
// - state: 컴포넌트 자신이 관리하는 데이터
// - props: 부모컴포넌트가 자식컴포넌트에게 전달하는 데이터

// rsf: 항수형 컴포넌트 기본형
// - 함수작성 방식으로 구현
// - 기존에 클래스형에서 사용하는 state, lifecycle 기능 X
function R02_Component(props) {
    return (
        <div>
            <h2>함수형 컴포넌트</h2>
        </div>
    );
}

//rcc: 클래스형 컴포넌트
// - component를 상속받아 구현
// - render() 메서드 를 사용해서 렌더링을 구현

class R02_ComponentClass extends Component {
    render() {
        return (
            <div>
                <h2>클래스형 컴포넌트</h2>
            </div>
        );
    }
}
//export는 다른 컴포넌트에서 사용할 수 있도록 설정하는 방식
//default는 기본으로 반드시 작성
export default R02_Component; // -> 기본컴포넌트이기 떄문에 import시 꼭 이름을 일치시키지 않아도 된다.
//여러 컴포넌트를 추가할 수 있다.
export { R02_ComponentClass }; // -> 기본컴포넌트가 아닌 컴포넌트는 import시 반드시 이름을 일치시켜야 한다.