const { validate, extract } = require("./index");

describe("validate", () => {
  test("returns true for a basic email address", () => {
    expect(validate("myguy@example.com")).toBeTruthy();
  });

  test("returns true for an advanced email address", () => {
    expect(validate("myguy+extra_params#here@subdomain.example.com")).toBeTruthy();
  });

  test("returns false for an invalid TLD", () => {
    expect(validate("myguy@example.invalidtld")).toBeFalsy();
  });

  test("returns false for a malformed username section", () => {
    expect(validate("my(guy@example.com")).toBeFalsy();
  });
});

describe("extract", () => {
  test("returns the email address from a string", () => {
    const email = "myguy@example.com";
    expect(extract(`other stuff ${email} in the string`)).toBe(email);
  });

  test("returns false if no email is found", () => {
    expect(validate("this is just a regular string")).toBeFalsy();
  });
});
