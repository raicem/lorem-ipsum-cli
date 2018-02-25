const getRandomNumberInRange = (min, max) => {
  // prettier-ignore
  const random = (Math.random() * (max - min)) + min;

  return Math.floor(random);
};
module.exports = {
  getRandomNumberInRange,
};
