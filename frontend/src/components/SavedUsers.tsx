import useUsers from '../react-query/hooks/useUsers';
import UserTable from './UserTable';

const SavedUsers = () => {
  const { data: users } = useUsers();

  return <UserTable users={users} />;
};

export default SavedUsers;
