import React, { useState } from 'react';
import store from '../../store/store';
import * as usersActions from '../../userSlice/usersActions';


const Form = (props) =>{
    const saveHandler =(event)=>{ 
        if (validateForm(props.formUser)){
            //props.saveHandler();
            store.dispatch(usersActions.addUser(props.formUser))
        }
    }

    const updateHandler = (event) =>{
        if (validateForm(props.formUser)){
            //props.updateHandler();
            store.dispatch(usersActions.editUser(props.formUser))
        }
    }

    const validateForm = (user)=>{return true;
        let isNameValid  = validateName(user.userName);
        let isEmailValid = validateEmail(user.email);
        let isPhoneValid = validatePhone(user.phone);

        if(!isNameValid) alert ("incorrect NAME");
        if(!isPhoneValid) alert ("incorrect Phone");
        if(!isEmailValid) alert ("incorrect Email");
        
        return isNameValid && isEmailValid && isPhoneValid ;
    }

    const validateName =(name)=>{
        return name.match(/[A-Z]/gi);
    }

    const validateEmail =(email)=>{
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
    }

    const validatePhone =(phone)=>{
        return   phone.match(/\d/g);
    }

    return ( 
        <form className="form-control modal">
                <input type="text" placeholder=" Name" name='name' value ={props.formUser.name} onChange={props.handleUserInput} />
                <input type="text" placeholder=" Phone" name = 'phone' value={props.formUser.phone} onChange={props.handleUserInput}/>
                <input type="email" placeholder=" Email" name = 'email'  value ={props.formUser.email} onChange={props.handleUserInput}/>
                <button className = 'b2' id='editButton' hidden = {props.saveMode} type="button" onClick={updateHandler}>Update</button>
                <button className = 'b2' id='saveButton' hidden={!props.saveMode} type="button" onClick={saveHandler}>Save</button>  
            </form> 
    );
};

export default Form;