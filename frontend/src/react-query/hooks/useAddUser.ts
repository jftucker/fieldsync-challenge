import { useMutation, useQueryClient } from '@tanstack/react-query';
import { User } from './usePlaceholderUsers';
import axios from 'axios';
import { CACHE_KEY_USERS } from '../constants';

const useAddUser = () => {
  const queryClient = useQueryClient();
  return useMutation<User, Error, User>({
    mutationFn: (user: User) =>
      axios
        .post<User>('http://127.0.0.1:3000/api/save', user)
        .then(res => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: CACHE_KEY_USERS,
      });
    },
  });
};

export default useAddUser;
