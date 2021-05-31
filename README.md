# react-numeral
React implementation of numeraljs

## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

    $ npm install --save react-numeral
    $ yarn add react-numeral

## Usage
Here is a simple example of react-numeral being used in an app :

```jsx
import React from 'react';
import Numeral from 'react-numeral';

class App extends React.Component {
  render() {
    return (
      <Numeral
        value={100000}
        format={"0,0"}
      />
    );
  }
}
```

## Props
- `value` - The number you want to format
- `format` - The format (see [here](http://numeraljs.com/) for the complete list )