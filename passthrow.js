/* eslint-disable no-param-reassign */
const passthrow = {
  filterUniqIndices(assembledItems, selectedItems) {
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

  createIndexController(init) {
    return function indexController(func, ...rest) {
      const result = rest.length === 0 ? func(init) : func(init, ...rest);
      if (init !== result) init = result;
      return result;
    };
  },
};

export default passthrow;
