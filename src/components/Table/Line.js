import store from '../../store/store';
import * as usersActions from '../../userSlice/usersActions';

const deleteEventHandler =(user) =>{
    store.dispatch(usersActions.deleteUser(user));
}
const Line = (props)=>{
    return(
        <tr>
            <td>{props.user.id}</td>
            <td>{props.user.name}</td>
            <td>{props.user.phone}</td>
            <td>{props.user.email}</td>
            <td>{props.user.date}</td>
            <td><button className="b2" onClick={()=> props.editEventHandler(props.user)}>Edit</button></td>
            <td><button className="b1" onClick={()=> deleteEventHandler(props.user)}>Delete</button></td>
        </tr>
    );
};

export default Line;