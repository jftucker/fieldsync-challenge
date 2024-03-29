import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:3000/api',
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return axiosInstance.get<T[]>(this.endpoint).then(res => res.data);
  };

  post = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then(res => res.data);
  };
}

export default APIClient;
