const stringLength = (str) => {
if (!str || str.length < 1 || str.length > 10) {
    throw new Error('String must have at least 1 character and should be less than 10 characters');
  }

  return str.length;
}

module.exports = stringLength;