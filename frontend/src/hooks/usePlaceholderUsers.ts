import { useEffect, useState } from 'react';
import jsonPlaceholderClient from '../services/json-placeholder-client';
import { CanceledError } from 'axios';

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
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    jsonPlaceholderClient
      .get<User[]>('/users', { signal: controller.signal })
      .then(res => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch(err => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { users, error };
};

export default usePlaceholderUsers;
