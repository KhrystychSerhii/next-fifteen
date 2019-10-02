import Http from './Http';
export const fetchUsers = () => Http.get('/users');
export const fetchUser = (login) => Http.get(`/users/${login}`);
