# Text Crypto Utils

This module provides utilities for text encryption and hashing.

## Installation

You can install this module via npm: `npm install text-crypto-utils`

## Usage

### Hash Password
```javascript
const { hashPassword } = require('text-crypto-utils');

const password = 'password123';
hashPassword(password)
  .then(hashedPassword => {
    console.log('Hashed Password:', hashedPassword);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
```

### Compare Passwords
```javascript
const { comparePasswords } = require('text-crypto-utils');

const password = 'password123';
const hashedPassword = '$2b$10$liZb04TTkSE1xu/Rq7WQ8eB5UeT6nVn..vO1oHq9PzkWDwBxD0B4u';

comparePasswords(password, hashedPassword)
  .then(match => {
    console.log('Passwords Match:', match);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
```

### Generate Random Token
```javascript
const { generateRandomToken } = require('text-crypto-utils');

const token = generateRandomToken(20);
console.log('Random Token:', token);
```
