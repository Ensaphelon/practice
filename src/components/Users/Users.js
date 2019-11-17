import React from 'react';

const Users = props => {
  const { users, isLoading } = props;

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (users === null) {
    return null;
  }

  return (
    <ul>
      {users.map(({ name }) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
};

export default Users;
