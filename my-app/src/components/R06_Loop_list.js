import React from 'react';

// 리액트에서 가장 잘 맞는 반복문 메서드: map()
// map()의 기능: 배열을 순회하며 각각의 값을 편집해서 다시 배열로 전환
//  - 리액트가 구별할 수 있도록 key속성 설정 권장(고유값, index값도 가능)
//      -> 데이터 자체에서 유니크한 값이 있으면 활용하고, 없으면 index사용

function R06_Loop_list(props) {

    // 목록을 출력하는 기능 구현

    const movies2025 = [
        { id: 1, title: "좀비딸", year: 2025 },
        { id: 2, title: "귀멸의 칼날", year: 2025 },
        { id: 3, title: "F1", year: 2025 },
        { id: 4, title: "아바타3", year: 2025 },
    ];

    const movies2024 = [
        { id: 1, title: "파묘", year: 2025 },
        { id: 2, title: "범죄도시4", year: 2025 },
        { id: 3, title: "인사이드아웃2", year: 2025 },
        { id: 4, title: "베테랑2", year: 2025 },
    ];

    return (
        <div>
            <h2>2025년 영화 순위</h2>
            <ul>
                {movies2025.map((movie) => (
                    <li key={movie.id}>{movie.title} ({movie.year})</li>
                ))}
            </ul>
            <h2>2024년 영화 순위</h2>
            <ul>
                {movies2024.map((movie, index) => (
                    <li key={index}>{movie.title} ({movie.year})</li>
                ))}
            </ul>
        </div>
    );
}

export default R06_Loop_list;