import { useContext } from 'react';
import SelectedUserContext from '../contexts/selectedUserContext';
import usePlaceholderUsers from '../react-query/hooks/usePlaceholderUsers';
import useUsers from '../react-query/hooks/useUsers';
import SaveSelectedUser from './SaveSelectedUser';
import UserTable from './UserTable';

const HomePage = () => {
  const { dispatch } = useContext(SelectedUserContext);
  const { data: placeholderUsers } = usePlaceholderUsers();
  const { data: users } = useUsers();
  return (
    <>
      <UserTable
        users={placeholderUsers}
        onDownload={user => dispatch({ type: 'SELECT', user })}
      />
      <SaveSelectedUser />
      <UserTable users={users} />
    </>
  );
};

export default HomePage;
