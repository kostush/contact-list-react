import Line from './Line';

const Table = (props) => {
    return (
      <table id="users-table" className="table">
        <thead>
          <tr>
            <td>№</td>
            <td>Name</td>
            <td>Phone</td>
            <td>Email</td>
            <td>Date</td>
            <td></td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user) => {
            return (
              <Line
                user={user}
                key={user.id}
                editEventHandler={props.editEventHandler}
                deleteEventHandler={props.deleteEventHandler}
              />
            );
          })}
        </tbody>
      </table>
    );
}
export default Table;