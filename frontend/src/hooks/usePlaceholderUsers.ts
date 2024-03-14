import { useQuery } from '@tanstack/react-query';
import jsonPlaceholderClient from '../services/json-placeholder-client';

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  company: Company;
  email: string;
  phone: string;
}

const usePlaceholderUsers = () => {
  const fetchUsers = () =>
    jsonPlaceholderClient.get<User[]>('/users').then(res => res.data);

  const query = useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  return query;
};

export default usePlaceholderUsers;
