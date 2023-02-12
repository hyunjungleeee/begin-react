import React, {useContext, useEffect} from 'react';
import {UserDispatch} from "./App";

const User = React.memo(function User({ user}) {

    const dispatch = useContext(UserDispatch);

    useEffect(()=>{
        console.log('user값이 설정됨');
        console.log(user);
        return ()=>{
            console.log('user가 바뀌기전');
            console.log(user);
        };
    },[user]);

    return (
        <div>
            <b
                style={{cursor: "pointer", color: user.active ? "green" : "black"}}
                onClick={()=>{
                    dispatch({type: 'TOGGLE_USER', id: user.id});
                }}
            >{user.username}</b> <span>({user.email})</span>
            {/*<button onClick={()=>onRemove(user.id)}>삭제</button>*/}
            <button onClick={()=>{
                dispatch({type: 'REMOVE_USER', id: user.id});
            }}>삭제</button>
        </div>
    );
});

function UserList({users}) {



    // const users = [
    //     {
    //         id: 1,
    //         username: 'velopert',
    //         email: 'public.velopert@gmail.com'
    //     },
    //     {
    //         id: 2,
    //         username: 'tester',
    //         email: 'tester@example.com'
    //     },
    //     {
    //         id: 3,
    //         username: 'liz',
    //         email: 'liz@example.com'
    //     }
    // ];

    return (
        <div>
            {/*<User user={users[0]} />*/}
            {/*<User user={users[1]} />*/}
            {/*<User user={users[2]} />*/}
            {users.map((user, index) => (
                <User user={user} key={user.id} />
            ))}
        </div>
    );
}

export default React.memo(UserList);