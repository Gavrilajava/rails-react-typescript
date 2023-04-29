import React, {useState} from 'react'

const UsersTable = props => {

  const [users, setUsers] = useState(props.users)

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name </th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => {
          return(
            <tr>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default UsersTable