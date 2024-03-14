import { useContext } from 'react';
import SelectedUserContext from '../contexts/selectedUserContext';
import usePlaceholderUsers from '../react-query/hooks/usePlaceholderUsers';
import UserTable from './UserTable';
import { Button } from '@chakra-ui/react';

const HomePage = () => {
  const { dispatch } = useContext(SelectedUserContext);
  const { data: placeholderUsers, refetch } = usePlaceholderUsers();
  const handleClick = () => refetch();

  if (!placeholderUsers) return <Button onClick={handleClick}>Download</Button>;
  return (
    <UserTable
      users={placeholderUsers}
      onDownload={user => dispatch({ type: 'SELECT', user })}
    />
  );
};

export default HomePage;
