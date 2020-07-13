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

module.exports = _;
