import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { CACHE_KEY_PLACEHOLDER_USERS } from '../constants';

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

const usePlaceholderUsers = () => {
  const fetchUsers = () =>
    axios
      .create({
        baseURL: 'https://jsonplaceholder.typicode.com/',
      })
      .get<User[]>('/users')
      .then(res => res.data);

  return useQuery<User[], Error>({
    queryKey: CACHE_KEY_PLACEHOLDER_USERS,
    queryFn: fetchUsers,
  });
};

export default usePlaceholderUsers;
