import React, { useState } from 'react';
import Card from './components/Card';
import NewUser from './components/NewUser';
import UserList from './components/UserList';

const USERS_LIST = [
  {
    name: 'Alex',
    age: '10',
    id: '1',
  },
  {
    name: 'John Doe',
    age: '12',
    id: '2',
  },
];

function App() {
  const [users, setUsers] = useState(USERS_LIST);

  const addNewUser = (user) => {
    setUsers((prevUsers) => [user, ...prevUsers]);
  };

  return (
    <>
      <Card>
        <NewUser onAddNewUser={addNewUser} />
      </Card>

      <Card>
        <UserList users={users} />
      </Card>
    </>
  );
}

export default App;
