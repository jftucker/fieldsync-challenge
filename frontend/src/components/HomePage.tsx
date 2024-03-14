import { useContext } from 'react';
import SelectedUserContext from '../contexts/selectedUserContext';
import usePlaceholderUsers from '../react-query/hooks/usePlaceholderUsers';
import UserTable from './UserTable';
import { Button, Heading } from '@chakra-ui/react';
import { User } from '../react-query/services/userService';
import useUsers from '../react-query/hooks/useUsers';

const HomePage = () => {
  const { dispatch } = useContext(SelectedUserContext);
  const { data: placeholderUsers, refetch } = usePlaceholderUsers();
  const handleClick = () => refetch();
  const handleSaveUser = (user: User) => {
    dispatch({ type: 'SELECT', user });
  };

  if (!placeholderUsers) return <Button onClick={handleClick}>Download</Button>;
  return (
    <>
      <Heading as='h2' size='2xl' paddingBottom={'10px'}>
        Users From JSON Placeholder
      </Heading>
      <UserTable users={placeholderUsers} onSaveUser={handleSaveUser} />;
    </>
  );
};

export default HomePage;
