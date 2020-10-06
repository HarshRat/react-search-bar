import React from 'react';

import { SearchBar } from 'react-search-bar';

const Data = [
  {
    key: 'john',
    value: 'John Doe'
  },
  {
    key: 'jane',
    value: 'Jane Doe'
  },
  {
    key: 'mary',
    value: 'Mary Phillips'
  },
  {
    key: 'robert',
    value: 'Robert'
  },
  {
    key: 'karius',
    value: 'Karius'
  }
];

const App = () => {
  return (
    <div>
      <SearchBar Data = { Data } placeholder="LET'S GOOO"/>
    </div>
  )
}

export default App
