import React, { useState, useRef } from 'react';

const Form = (props) =>{console.log('props in form',props);
    const saveHandler =(event)=>{ 
        if (validateForm(props.formUser)){
            props.saveHandler();
        }
    }

    const updateHandler = (event) =>{
        if (validateForm(props.formUser)){
            props.updateHandler();
        }
    }

    const validateForm = (user)=>{
       console.log(user);
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
    console.log(props);
    return ( 
        <form className="form-control modal">
                <input type="text" placeholder=" Name" name='userName' value ={props.formUser.userName} onChange={props.handleUserInput} />
                <input type="text" placeholder=" Phone" name = 'phone' value={props.formUser.phone} onChange={props.handleUserInput}/>
                <input type="email" placeholder=" Email" name = 'email'  value ={props.formUser.email} onChange={props.handleUserInput}/>
                <button className = 'b2' id='editButton' hidden = {props.saveMode} type="button" onClick={updateHandler}>Update</button>
                <button className = 'b2' id='saveButton' hidden={!props.saveMode} type="button" onClick={saveHandler}>Save</button>  
            </form> 
    );
};

export default Form;