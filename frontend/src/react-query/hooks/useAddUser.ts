import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CACHE_KEY_USERS } from '../constants';
import { User, saveUsers } from '../services/userService';
import { useToast } from '@chakra-ui/react';

const useAddUser = () => {
  const toast = useToast();
  const queryClient = useQueryClient();
  return useMutation<User, Error, User>({
    mutationFn: saveUsers.post,
    onSuccess: (user: User) => {
      toast({
        title: 'User Saved',
        description: `${user.name} has been saved to the database.`,
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      queryClient.invalidateQueries({
        queryKey: CACHE_KEY_USERS,
      });
    },
  });
};

export default useAddUser;
