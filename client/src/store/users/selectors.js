import { useSelector } from 'react-redux';

export const getUsers = () => useSelector(state => state.users.data);
