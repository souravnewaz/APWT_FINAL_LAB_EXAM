import React, { useState } from 'react'

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>Employee Name</label><br />
      <input
        type="text"
        name="employeename"
        value={user.employeename}
        onChange={handleInputChange}
      /><br /><br />
      <label>Company Name</label><br />
      <input
        type="text"
        name="companyname"
        value={user.companyname}
        onChange={handleInputChange}
      /><br /><br />
      <label>Contact</label><br />
      <input
        type="text"
        name="contact"
        value={user.contact}
        onChange={handleInputChange}
      /><br /><br />
      <label>User Name</label><br />
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      /><br /><br />
      <label>Password</label><br />
      <input
        type="text"
        name="password"
        value={user.password}
        onChange={handleInputChange}
      /><br /><br />
      <button>Update user</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm