/* eslint-disable no-param-reassign */
const passthrow = {
  getUniqIndices(assembledItems, selectedItems) {
    if (!Array.isArray(assembledItems)) assembledItems = Array.from(assembledItems);
    if (!Array.isArray(selectedItems)) selectedItems = Array.from(selectedItems);
    let sequenceIndex = 0;
    return selectedItems.map((elem) => {
      const receivedIndex = assembledItems.indexOf(elem, sequenceIndex);
      sequenceIndex = receivedIndex + 1;
      return receivedIndex;
    });
  },

  filterIndices(arr, target) {
    return arr.reduce((indices, item, index) => {
      if (item === target) indices.push(index);
      return indices;
    }, []);
  },

  createIndexController(init) {
    return function valueController(func, ...rest) {
      const result = rest.length === 0 ? func(init) : func(init, ...rest);
      if (init !== result) init = result;
      return result;
    };
  },
};

export default passthrow;
