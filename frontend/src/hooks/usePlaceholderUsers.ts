import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

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
    axios
      .create({
        baseURL: 'https://jsonplaceholder.typicode.com/',
      })
      .get<User[]>('/users')
      .then(res => res.data);

  return useQuery<User[], Error>({
    queryKey: ['jsonPlaceholderUsers'],
    queryFn: fetchUsers,
  });
};

export default usePlaceholderUsers;
