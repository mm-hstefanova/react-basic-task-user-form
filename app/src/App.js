import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import UserList from './components/UserList';

function App() {
  const users = [
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
  return (
    <>
      <Card>
        <Form />
      </Card>

      <Card>
        <UserList users={users} />
      </Card>
    </>
  );
}

export default App;
