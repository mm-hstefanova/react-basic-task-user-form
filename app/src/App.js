import React, { useState } from 'react';
import Card from './components/Card';
import NewUser from './components/NewUser';
import UserList from './components/UserList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [users, setUsers] = useState([]);

  const addNewUser = (user) => {
    setUsers((prevUsers) => [user, ...prevUsers]);
  };

  return (
    <>
      <Card>
        <NewUser onAddNewUser={addNewUser} />
      </Card>

      <Card>
        {!users.length && <p>No users ...</p>}
        {!!users.length && <UserList users={users} />}
      </Card>
    </>
  );
}

export default App;
