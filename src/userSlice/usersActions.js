import * as usersActionType from './usersActionType';

export const addUser =(user)=>{
    return {
        type: usersActionType.ADD_USER,
        payload:{
            user:user
        }
    }

}

export const editUser =(user)=>{
    return {
        type: usersActionType.EDIT_USER,
        payload:{
            user:user
        }
    }

}

export const deleteUser =(user)=>{
    return {
        type: usersActionType.DELETE_USER,
        payload:{
            user:user
        }
    }

}