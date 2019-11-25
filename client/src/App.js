import React from 'react';

const App = () => {
  fetch('http://localhost:8000/posts');

  return <div>Application root.</div>;
};

export default App;
