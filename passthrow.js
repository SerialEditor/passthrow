/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
const passthrow = {
  filterInterestingIndices(search, target) {
    if (!Array.isArray(search)) search = Array.from(search);
    if (!Array.isArray(target)) target = Array.from(target);
    return target.map((targetItem) => search.findIndex((searchItem) => searchItem === targetItem));
  },

  filterIndices(arr, func) {
    return arr.reduce((indices, item, index, array) => {
      if (func(item, index, array)) indices.push(index);
      return indices;
    }, []);
  },

  controlIndex(current) {
    return [
      function () {
        return current;
      },
      function (value) {
        current = value;
        return current;
      },
    ];
  },

  continuousSubArrays(array) {
    const l = array.length;
    const subArrays = [];

    for (let i = 0; i < l; i += 1) {
      for (let j = 0; j < l - i; j += 1) {
        subArrays.push(array.slice(j, j + i + 1));
      }
    } return subArrays;
  },
};

export default passthrow;
