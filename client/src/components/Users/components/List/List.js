import React from 'react';
import { isNil } from 'ramda';
import { DataTable, Text } from 'grommet';

const columns = [
  {
    property: 'name',
    header: <Text>Name</Text>,
    primary: true,
  },
  {
    property: 'email',
    header: <Text>Email</Text>,
  },
  {
    property: 'phone',
    header: <Text>Phone</Text>,
  },
];

const List = ({ users, activeColumns }) => {
  if (isNil(users)) {
    return null;
  }

  return <DataTable columns={columns.filter(({ property }) => activeColumns.includes(property))} data={users} />;
};

export default List;
