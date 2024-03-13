// textCryptoUtils.js
const bcrypt = require('bcrypt');
const crypto = require('crypto');

/**
 * Hashes a password using bcrypt.
 * @param {string} password The password to hash.
 * @returns {Promise<string>} A promise that resolves to the hashed password.
 */
const hashPassword = async (password) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

/**
 * Compares a password with its hashed counterpart using bcrypt.
 * @param {string} password The password to compare.
 * @param {string} hashedPassword The hashed password to compare against.
 * @returns {Promise<boolean>} A promise that resolves to true if the passwords match, false otherwise.
 */
const comparePasswords = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

/**
 * Generates a random token.
 * @param {number} length The length of the token.
 * @returns {string} The generated token.
 */
const generateRandomToken = (length = 16) => {
  return crypto.randomBytes(length).toString('hex');
};

module.exports = {
  hashPassword,
  comparePasswords,
  generateRandomToken,
};
