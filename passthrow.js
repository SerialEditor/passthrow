/* eslint-disable no-param-reassign */
const passthrow = {
  getUniqPositions(assembledElems, selectedElems) {
    if (!Array.isArray(assembledElems)) assembledElems = Array.from(assembledElems);
    if (!Array.isArray(selectedElems)) selectedElems = Array.from(selectedElems);
    let sequencePosition = 0;
    return selectedElems.map((elem) => {
      const receivedPosition = assembledElems.indexOf(elem, sequencePosition);
      sequencePosition = receivedPosition + 1;
      return receivedPosition;
    });
  },

  createValueController(init) {
    return function valueController(func, ...rest) {
      const result = rest.length === 0 ? func(init) : func(init, ...rest);
      if (init !== result) init = result;
      return result;
    };
  },
};

export default passthrow;
