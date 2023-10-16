export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {
  // Ensure that password is always a string
  if (typeof password !== "string") password = String(password);

  // Check if password doesn't have at least 4 unique characters
  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;

  return true;
}
