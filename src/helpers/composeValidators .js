export default (...validators) => (...rest) => {
  return validators.reduce(
    (error, validator) => error || validator(...rest),
    undefined,
  );
};
