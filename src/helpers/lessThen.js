export default num => value =>
  value && value.length < num ? `value less ${num}` : undefined;
