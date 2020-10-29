# react-search-bar

> React Search Bar would provide you with dynamically generated search bar results with optional image to be shown inside the search bar results

[![NPM](https://img.shields.io/npm/v/react-search-bar.svg)](https://www.npmjs.com/package/react-search-bar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-search-bar
```
or
```bash
yarn add react-search-bar
```


## Usage

```jsx
import React, { Component } from 'react'

import { SearchBar } from 'react-search-bar'
import 'react-search-bar/dist/index.css'

class Example extends Component {
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

  render() {
    return <SearchBar Data={Data} />
  }
}
```
Using Hooks

```jsx
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
      <SearchBar Data = { Data } />
    </div>
  )
}

```

## License

MIT © [HarshRat](https://github.com/HarshRat)
