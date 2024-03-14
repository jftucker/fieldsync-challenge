import { useQuery } from '@tanstack/react-query';
import { CACHE_KEY_USERS } from '../constants';
import { User, fetchUsers } from '../services/userService';

const useUsers = () => {
  return useQuery<User[], Error>({
    queryKey: CACHE_KEY_USERS,
    queryFn: fetchUsers.getAll,
    enabled: false,
  });
};

export default useUsers;
