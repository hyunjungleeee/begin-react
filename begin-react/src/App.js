import logo from './logo.svg';
import './App.css';
import Hello from "./Hello";
import React from 'react';
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList from "./UserList";

function App() {
    const name = 'react';
    const style = {
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: 24, // 기본 단위 px
        padding: '1rem' // 다른 단위 사용 시 문자열로 설정
    }
    return (
        <>
            <UserList />
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

export default App;
