/* eslint-disable no-param-reassign */
const passthrow = {
  filterInterestingIndices(assembledItems, selectedItems) {
    if (!Array.isArray(assembledItems)) assembledItems = Array.from(assembledItems);
    if (!Array.isArray(selectedItems)) selectedItems = Array.from(selectedItems);
    let sequenceIndex = 0;
    return selectedItems.map((elem) => {
      const receivedIndex = assembledItems.indexOf(elem, sequenceIndex);
      sequenceIndex = receivedIndex + 1;
      return receivedIndex;
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
