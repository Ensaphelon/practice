import 'reset-css';
import React from 'react';
import { Button } from 'grommet';

const App = () => {
  fetch('http://localhost:8000/posts');

  return <Button label="Submit" variant="contained" color="primary" />;
};

export default App;
