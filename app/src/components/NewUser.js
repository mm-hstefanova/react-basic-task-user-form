import UserForm from './UserForm';
import { v4 as uuidv4 } from 'uuid';

function NewUser(props) {
  const addNewUserHandler = (user) => {
    // user - holds everything populated in the form fields

    const newUser = {
      ...user,
      id: uuidv4(),
    };

    props.onAddNewUser(newUser);
  };

  return <UserForm onAddNewUser={addNewUserHandler} />;
}

export default NewUser;
