import React, { createContext, useReducer } from 'react';

export const UserContext = createContext();
const initialUser = {
  name: 'hwarari',
  job: 'FE-developer',
}
const userReducer = (state, action) => {
  switch (action.type) {
    case 'changeJob':
      // 기존 state 의 job 에 해당하는 데이터를 action.text 로 변경
      return { ...state, job: action.text };

    default:
      break;
  }
}

function UserStore(props) {

  const [user, dispatch] = useReducer(userReducer, initialUser);
  console.log(user);

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {props.children}
    </ UserContext.Provider>
  )
}
export default UserStore;