import { Button } from '@chakra-ui/react';
import useUsers from '../react-query/hooks/useUsers';
import UserTable from './UserTable';

const SavedUsers = () => {
  const { data: users, refetch } = useUsers();
  const handleClick = () => refetch();
  if (!users) return <Button onClick={handleClick}>Get Users</Button>;
  return <UserTable users={users} />;
};

export default SavedUsers;
