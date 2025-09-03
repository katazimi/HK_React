import React from 'react';

//props: 부모컴포넌트 -> 자식컴포넌트로 전달하는 데이터
//   - props는 읽기전용(immutable) -> 자식컴포넌트에서 props값 변경 불가
//   - 구조분해할당을 사용하면 가독성에 좋음
//   - 함수형 컴포넌트에서 props는 매개변수로 전달됨

// 부모컴포넌트에서 props로 name:kang, age:25 전달
function R03_Props(props) {
    //const name=props.name;
    //const age=props.age;
    const { name, age } = props; //구조분해 할당
    return (
        <div>
            <p>안녕하세요, <strong>{name}</strong>({age}세)님!</p>
        </div>
    );
}

function R03_Props2({ name, age }) {
    return (
        <div>
            <div>{name},{age}</div>
        </div>
    );
}

function R03_Props3(props) {
    return (
        <div>
            <div>{props.name},{props.age}</div>
        </div>
    );
}

export default R03_Props;
export { R03_Props2 };
export { R03_Props3 };
