export default (passwordConfirm, { password }) =>
  passwordConfirm && passwordConfirm !== password ? "not match" : undefined;
