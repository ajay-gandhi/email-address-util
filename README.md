# email-address-util

> Utilities for working with email addresses

## Usage

```bash
# Install the package
npm install email-address-util
```

```js
# Require it in your JS file
const EmailUtil = require("email-address-util");
```

## Validate

Validate that the given string is a valid email address. This method uses the
[regular expression from W3](https://www.w3.org/TR/html5/sec-forms.html#valid-e-mail-address),
then validates the domain against IANA's list of valid TLDs.

```js
EmailUtil.validate("valid@example.com")    # => true
EmailUtil.validate("in(valid@example.com") # => false
```

## Extract

Extract the first email address found in the given string. Uses the same regular
expression as `validate`.

```js
const strWithEmail    = "My email address is jeff@jeff.com";
const strWithoutEmail = "My email address is above";
EmailUtil.extract(strWithEmail)   # => "jeff@jeff.com"
EmailUtil.extract(strWithoutEmai) # => false
```

## Tests

Run tests with `npm test`.

