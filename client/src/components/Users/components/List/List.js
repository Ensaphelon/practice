import React from 'react';
import { isNil } from 'ramda';
import { DataTable, Text } from 'grommet';

const columns = [
  {
    property: 'name',
    header: <Text>Name</Text>,
    primary: false,
  },
  {
    property: 'email',
    header: <Text>Email</Text>,
    primary: true,
  },
  {
    property: 'phone',
    header: <Text>Phone</Text>,
    primary: false,
  },
];

const List = ({ users, activeColumns }) => {
  if (isNil(users)) {
    return null;
  }

  return <DataTable columns={columns.filter(({ property }) => activeColumns.includes(property))} data={users} />;
};

export default List;
