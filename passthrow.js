/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
const passthrow = {
  filterInterestingIndices(search, target) {
    if (!Array.isArray(search)) search = Array.from(search);
    if (!Array.isArray(target)) target = Array.from(target);
    let sequencePos = 0;
    return target.map((item) => {
      const receivedIndex = search.indexOf(item, sequencePos);
      const returnedIndex = receivedIndex !== -1
        ? receivedIndex
        : search.slice(0, sequencePos).indexOf(item, 0);
      sequencePos = returnedIndex !== -1 ? returnedIndex : 0;
      return returnedIndex;
    });
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
};

export default passthrow;
