const _ = {};

_.chunk = (array, size) =>
  size === 0 || !array.length
    ? array
    : array.reduce(
        (acc, item) => {
          if (acc.i >= size) {
            acc.holderIndex++;
            acc.i = 0;
            acc.result[acc.holderIndex] = [];
          }

          acc.result[acc.holderIndex].push(item);
          acc.i++;

          return acc;
        },
        { result: [[]], i: 0, holderIndex: 0 }
      ).result;

_.compact = (array) => array.filter(Boolean);

_.concat = (array, ...values) =>
  values.reduce(
    (acc, item) => (item instanceof Array ? acc.concat(item) : [...acc, item]),
    array.slice(0)
  );

_.difference = (array1, array2) => {
  const hashTable = array2.reduce((acc, item) => {
    acc.set(item, 0);
    return acc;
  }, new Map());

  return array1.filter((item) => !hashTable.has(item));
};

_.now = () => Date.now();

module.exports = _;
