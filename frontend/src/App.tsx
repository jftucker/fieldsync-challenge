import { useReducer } from 'react';
import UserTable from './components/UserTable';
import SelectedUserContext from './contexts/selectedUserContext';
import usePlaceholderUsers from './react-query/hooks/usePlaceholderUsers';
import useUsers from './react-query/hooks/useUsers';
import selectedUserReducer from './reducers/selectedUserReducer';
import SaveSelectedUser from './components/SaveSelectedUser';

function App() {
  const { data: placeholderUsers } = usePlaceholderUsers();
  const { data: users } = useUsers();
  const [selectedUser, dispatch] = useReducer(selectedUserReducer, undefined);

  return (
    <SelectedUserContext.Provider value={{ selectedUser, dispatch }}>
      <UserTable
        users={placeholderUsers}
        onDownload={user => dispatch({ type: 'SELECT', user })}
      />
      <SaveSelectedUser />

      <UserTable users={users} />
    </SelectedUserContext.Provider>
  );
}

export default App;
