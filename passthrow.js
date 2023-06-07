/* eslint-disable no-param-reassign */
const passthrow = {
  filterInterestingIndices(assembledItems, selectedItems) {
    if (!Array.isArray(assembledItems)) assembledItems = Array.from(assembledItems);
    if (!Array.isArray(selectedItems)) selectedItems = Array.from(selectedItems);
    let sequencePos = 0;
    return selectedItems.map((item) => {
      const receivedIndex = assembledItems.indexOf(item, sequencePos);
      const returnedIndex = receivedIndex !== -1
        ? receivedIndex
        : assembledItems.slice(0, sequencePos).indexOf(item, 0);
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
    return {
      getCurrent() {
        return current;
      },
      getChanged(value) {
        current = value;
        return current;
      },
    };
  },
};

export default passthrow;
