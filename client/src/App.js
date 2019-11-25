import 'reset-css';
import React from 'react';
import Button from '@material-ui/core/Button';

const App = () => {
  fetch('http://localhost:8000/posts');

  return (
    <Button variant="contained" color="primary">
      Application root.
    </Button>
  );
};

export default App;
