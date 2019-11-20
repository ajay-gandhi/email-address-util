
const { tlds } = require("./tlds");
// Taken from https://www.w3.org/TR/html5/sec-forms.html#valid-e-mail-address
const EMAIL_TEST_R = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const EMAIL_R = /[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*/;

/**
 * Returns whether the given string is a valid email address
 */
module.exports.validate = (email) => {
  // Validate against regex
  if (!EMAIL_TEST_R.test(email)) return false;

  // Validate domain
  const domain = email.substring(email.lastIndexOf(".") + 1, email.length);
  if (!tlds.includes(domain.toUpperCase())) return false;

  return true;
};

/**
 * Extracts and returns the first email found in the given string
 */
module.exports.extract = (str) => {
  const matches = str.match(EMAIL_R);
  return matches ? matches[0] : false;
};
