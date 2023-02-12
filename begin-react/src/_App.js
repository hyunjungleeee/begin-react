import logo from './logo.svg';
import './App.css';
import Hello from "./Hello";
import React, {useCallback, useMemo, useRef, useState} from 'react';
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는중...');
    return users.filter(user => user.active).length;
}

function App2() {
    const name = 'react';
    const style = {
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: 24, // 기본 단위 px
        padding: '1rem' // 다른 단위 사용 시 문자열로 설정
    };

    const [inputs, setInputs] = useState({
        username : '',
        email : ''
    });

    const {username, email} = inputs;

    const onChange = useCallback(
        e => {
            const {name, value} = e.target;
            setInputs({
                ...inputs,
                [name] : value
            });
        },
        [inputs]
    );

    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active: true,
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active: false,
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active: false,
        }
    ]);

    const nextId = useRef(4);
    const onCreate= useCallback(()=>{

        //나중에 구현할 배열에 항목 추가하는 로직
        const user = {
            id : nextId.current,
            username,
            email
        };
        setUsers(users.concat(user));

        setInputs({
            username: '',
            email: ''
        });

        nextId.current += 1;
    }, [username, email]);

    const onRemove = useCallback( id => {

        //user.id가 파라미터로 일치하지 않는 원소만 추출헤 새로운 배열 만듬
        // = user.id가 id인 것을 제거함
        setUsers(users.filter(user => user.id !== id));
    }, [users]);

    const onToggle = useCallback( id => {

        setUsers(
            users.map(user =>
                user.id === id ? {...user, active : !user.active} : user
            )
        )

    }, [users]);

    const count = useMemo(()=> countActiveUsers(users), [users])


    return (
        <>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <div>활성사용자 수 : {count}</div>

            <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
            <InputSample />
            <Counter />
            <Wrapper>
                <Hello name="react" color="red" isSpecial={true} />
                <div style={style}>{name}</div>
                <div className="gray-box"></div>
                <Hello color="pink"/>
            </Wrapper>
            {/*<div className="App">*/}
            {/*  <header className="App-header">*/}
            {/*    <img src={logo} className="App-logo" alt="logo" />*/}
            {/*    <p>*/}
            {/*      Edit <code>src/App.js</code> and save to reload.*/}
            {/*    </p>*/}
            {/*    <a*/}
            {/*      className="App-link"*/}
            {/*      href="https://reactjs.org"*/}
            {/*      target="_blank"*/}
            {/*      rel="noopener noreferrer"*/}
            {/*    >*/}
            {/*      Learn React*/}
            {/*    </a>*/}
            {/*  </header>*/}
            {/*</div>*/}
        </>
    );
}

export default App2;
