import { HttpResponse, http } from 'msw';

export const handlers = [
  http.get('https://jsonplaceholder.typicode.com/users', () => {
    return HttpResponse.json([
      {
        id: 1,
        name: 'a',
        email: 'a@a.com',
        phone: '1234567',
        company: { name: 'acorp', catchPhrase: 'aphrase', bs: 'abs' },
      },
      {
        id: 2,
        name: 'b',
        email: 'b@b.com',
        phone: '2234567',
        company: { name: 'bcorp', catchPhrase: 'bphrase', bs: 'bbs' },
      },
    ]);
  }),
  http.get('http://127.0.0.1:3000/api/fetch', () => {
    return HttpResponse.json([
      {
        id: 1,
        name: 'a',
        email: 'a@a.com',
        phone: '1234567',
        company: { name: 'acorp', catchPhrase: 'aphrase', bs: 'abs' },
      },
      {
        id: 2,
        name: 'b',
        email: 'b@b.com',
        phone: '2234567',
        company: { name: 'bcorp', catchPhrase: 'bphrase', bs: 'bbs' },
      },
    ]);
  }),
];
