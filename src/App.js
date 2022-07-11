import './App.css';
import React, { useState } from 'react';
import Form from './components/Form/Form';
import Table from './components/Table/Table';
import {defaultFormUser, defaultUsers} from './defaultUsers';
import store from './store/store';

function App() {
  const STORAG_KEY_NAME ='users';

  const retrieveUsersFromStorage = () =>{
        let usersFromStorage = defaultUsers;
      if (localStorage !== 'undefined' && localStorage.getItem(STORAG_KEY_NAME) != null){
          usersFromStorage =  JSON.parse(localStorage.getItem(STORAG_KEY_NAME));
      }
       return usersFromStorage;
  };  
  let newUsers = retrieveUsersFromStorage();
  const [formUser, setFormUser] = useState(defaultFormUser);
  const [users, setUsers] = useState(retrieveUsersFromStorage());
  const [saveMode, setSaveMode] = useState(true);

  const updateHandler =() =>{
    let newUsers = users.map(user =>{
      if(user.id === formUser.id){
        return formUser;
      }
      return user;
    })
    setUsers(newUsers);
    setSaveMode(true);
    saveUsersInStorage(newUsers);
  }
  
  const editEventHandler =(user) =>{
    setFormUser(user);
    setSaveMode(false);
  }

  const deleteEventHandler =(deletedUser) =>{
    let newUsers = users.filter(user => {
       if (user.id !== deletedUser.id) return user
    })
    setUsers(reorganizeUsers(newUsers));
    saveUsersInStorage(newUsers);
  }

  const reorganizeUsers= (usersBefore) =>{
    return usersBefore.map((user,key) => {
        user.id = key+1;
        return user
    });
  }

  const createDate =() =>{
    return new Date().toLocaleString('en-Ca', {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', hour12: false, minute:'2-digit'});
  }

  const saveUsersInStorage =(users)=>{
    localStorage.setItem(STORAG_KEY_NAME, JSON.stringify(users));
  }
    const storeHandler = store.subscribe(()=>{
        console.log("store changed", store.getState());
        setUsers(store.getState());

    })
  const saveHandler =(event) =>{
    let user = {...formUser, id: users.length + 1, date : createDate() };
    setFormUser(user);
  }

  const handleUserInput =(event) =>{
      event.preventDefault();
      let newFormUser = { ...formUser };
      newFormUser[event.target.getAttribute('name')] = event.target.value;
      setFormUser(newFormUser);
  }

  return (
    <div className="App">
      <Form 
          formUser = {formUser}
          updateHandler   =  {updateHandler}
          saveHandler     =  {saveHandler}
          handleUserInput =  {handleUserInput}
          saveMode        =  {saveMode}
      />
      <Table 
          users ={users}
          editEventHandler = {editEventHandler}
          deleteEventHandler = {deleteEventHandler}
      />
    </div>
  );
}

export default App;
