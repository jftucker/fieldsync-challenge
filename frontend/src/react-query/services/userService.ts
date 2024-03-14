import APIClient from './apiClient';

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

export const fetchUsers = new APIClient<User>('/fetch');
export const saveUsers = new APIClient<User>('/save');
