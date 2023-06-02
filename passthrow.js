/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
/* eslint-disable func-names */
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

  controlValue(current) {
    return [
      function () {
        return current;
      },
      function (value) {
        // eslint-disable-next-line no-param-reassign
        current = value;
        return current;
      },
    ];
  },
};

export { passthrow };
