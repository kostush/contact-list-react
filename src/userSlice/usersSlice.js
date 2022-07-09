import * as usersActionType from './usersActionType';
import createDate from "../createDate";

let lastId = 0;
export const usersSlice = ( users = [], action) => {
    switch (action.type) {
        case usersActionType.ADD_USER : {
            console.log("action user", action.payload.user);
            return [
                ...users,
                {
                    id: ++lastId,
                    name:  action.payload.user.name,
                    email: action.payload.user.email,
                    phone: action.payload.user.phone,
                    date: createDate(),
                }
            ]
        }
        case usersActionType.EDIT_USER : {
            return users.map(user => user.id !== action.payload.user.id ? user :
                {
                    ...user,
                    name: action.payload.user.name,
                    email: action.payload.user.email,
                    phone: action.payload.user.phone,
                    date: createDate()
                }
            )
        }
        case usersActionType.DELETE_USER : {
            return users.filter(user => user.id !== action.payload.user.id)
        }
        default :
            return users;
    }
}

