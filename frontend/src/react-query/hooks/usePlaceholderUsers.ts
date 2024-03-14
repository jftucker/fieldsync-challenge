import { useQuery } from '@tanstack/react-query';
import { CACHE_KEY_PLACEHOLDER_USERS } from '../constants';
import JSONPlaceholderClient from '../services/JSONPlaceholderClient';
import { User } from '../services/userService';

const jsonPlaceholderClient = new JSONPlaceholderClient<User>('/users');

const usePlaceholderUsers = () => {
  return useQuery<User[], Error>({
    queryKey: CACHE_KEY_PLACEHOLDER_USERS,
    queryFn: jsonPlaceholderClient.getAll,
  });
};

export default usePlaceholderUsers;
