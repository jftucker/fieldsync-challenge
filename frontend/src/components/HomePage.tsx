import { useContext } from 'react';
import SelectedUserContext from '../contexts/selectedUserContext';
import usePlaceholderUsers from '../react-query/hooks/usePlaceholderUsers';
import UserTable from './UserTable';

const HomePage = () => {
  const { dispatch } = useContext(SelectedUserContext);
  const { data: placeholderUsers } = usePlaceholderUsers();

  return (
    <UserTable
      users={placeholderUsers}
      onDownload={user => dispatch({ type: 'SELECT', user })}
    />
  );
};

export default HomePage;
