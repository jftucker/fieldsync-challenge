import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { CACHE_KEY_USERS } from '../constants';

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  company: Company;
  email: string;
  phone: string;
}

const useUsers = () => {
  const fetchUsers = () =>
    axios
      .create({
        baseURL: 'http://127.0.0.1:3000/api',
      })
      .get<User[]>('/fetch/')
      .then(res => res.data);

  return useQuery<User[], Error>({
    queryKey: CACHE_KEY_USERS,
    queryFn: fetchUsers,
  });
};

export default useUsers;
