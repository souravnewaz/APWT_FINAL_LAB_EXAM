import React, { useState } from 'react'

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: '', username: '' }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = (event) => {
    const { employeename, value } = event.target

    setUser({ ...user, [employeename]: value  })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (!user.name || !user.username) return

        props.addUser(user)
        setUser(initialFormState)
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
      <button>Add new Employee</button>
    </form>
  )
}

export default AddUserForm