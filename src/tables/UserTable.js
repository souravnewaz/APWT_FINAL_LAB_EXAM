import React from 'react'

 const UserTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Employee Name</th>
        <th>Company Name</th>
        <th>Contact No</th>
        <th>User Name</th>
        <th>Password</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.employeename}</td>
            <td>{user.companyname}</td>
            <td>{user.contact}</td>
            <td>{user.username}</td>
            <td>{user.password}</td>
            <td>
            <button
                onClick={() => {
                    props.editRow(user)
                }}
                className="button muted-button">
                Edit
            </button>
              <button
                    onClick={() => props.deleteUser(user.id)}
                    className="button muted-button">
                    Delete
                </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable