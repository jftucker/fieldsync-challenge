import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CACHE_KEY_USERS } from '../constants';
import { User, saveUsers } from '../services/userService';

const useAddUser = () => {
  const queryClient = useQueryClient();
  return useMutation<User, Error, User>({
    mutationFn: saveUsers.post,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: CACHE_KEY_USERS,
      });
    },
  });
};

export default useAddUser;
