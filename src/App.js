import './App.css';
import React, { useState } from 'react';
import Form from './components/Form/Form';
import Table from './components/Table/Table';

function App() {
  const STORAG_KEY_NAME ='users';
  const defaultFormUser = {
      id:1,
      userName: "",
      phone: "",
      email: "",
      date: "",
  }
  const defaultUsers =[
    {
      id:1,
      userName: "first",
      phone: "1111",
      email: "one@one.com",
      date: "2022-07-05, 15:22",
    },
    {
      id:2,
      userName: "second",
      phone: "2222",
      email: "second@second.com",
      date: "2022-07-05, 15:22",
    }];

  const retrieveUsersFromStorage = () =>{
    
      if (localStorage != 'undefined' && localStorage.getItem('storageUserList') != null){
        var  usersFromStorage =  JSON.parse(localStorage.getItem('storageUserList'));
      }else {
        var  usersFromStorage = defaultUsers;
       
      };
       return usersFromStorage;
  };  

  const [formUser, setFormUser] = useState(defaultFormUser);
  const [users, setUsers] = useState(retrieveUsersFromStorage());
  const [saveMode, setSaveMode] = useState(true);

  const updateHandler =() =>{ 
    console.log('update user',formUser);
    let newUsers = users.map(user =>{
      if(user.id == formUser.id){
        return formUser;
      }
      return user;
    })
    setUsers(newUsers);
    setSaveMode(true);
    
    
    //saveUsersInStorage(newUsers);
  }
  const editEventHandler =(user) =>{
    console.log("edit user",user);
    setFormUser(user);
    setSaveMode(false);

  }

  const deleteEventHandler =(deletedUser) =>{
    console.log(users);
    let newUsers = users.filter(user => {
       if (user.id!=deletedUser.id) return user
    })
    setUsers(reorganizeUsers(newUsers));
    saveUsersInStorage(newUsers);
  }

  const reorganizeUsers= (usersBefore) =>{
    let usersAfter = usersBefore.map((user,key) => {
      user.id = key+1;
      return user 
    });
    return usersAfter;
  }

  const createDate =() =>{
    return new Date().toLocaleString('en-Ca', {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', hour12: false, minute:'2-digit'});
  }

  const saveUsersInStorage =(users)=>{
    localStorage.setItem(STORAG_KEY_NAME, JSON.stringify(users));
  }
  
  const saveHandler =(event) =>{
    let newUsers = [...users];
    formUser.id = users.length + 1;
    formUser.date = createDate();
    newUsers.push(formUser);
    setUsers(newUsers);
    saveUsersInStorage(newUsers);
  }

  const handleUserInput =(event) =>{
      event.preventDefault();
      let newFormUser = { ...formUser };
      console.log(' newFormUser',newFormUser);
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
