import UserForm from './UserForm';

function NewUser(props) {
  const addNewUserHandler = (user) => {
    // user - holds everything populated in the form fields

    const newUser = {
      ...user,
      id: '222',
    };

    props.onAddNewUser(newUser);
  };

  return <UserForm onAddNewUser={addNewUserHandler} />;
}

export default NewUser;
