import React, {useReducer, useState} from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT' :
            return state -1;
        default :
            return state;
    }
}

function Counter() {

    // number : 앞으로 컴포넌트에서 사용할 수 있는 상태를 가르킴
    // dispatch : 액션을 발생시키는 함수
    // useReducer에 넣은 첫번째 파라미터 reducer 함수
    // 두번째 파라미터는 초기상태
    const [number, dispatch] = useReducer(reducer,0);

    const onIncrease = () => {
        dispatch({type : 'INCREMENT'});
    };

    const onDecrease = () => {
        dispatch({type : 'DECREMENT'});
    };

    // const [number, setNumber] = useState(0);
    //
    // const onIncrease = () => {
    //     setNumber(prevNumber => prevNumber + 1);
    //     console.log( '+1 : ', +1);
    // }
    // const onDecrease = () => {
    //     setNumber(prevNumber => prevNumber -1);
    //     console.log('-1 : ', -1);
    // }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );

}

export default Counter;