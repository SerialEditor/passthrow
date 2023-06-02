const passthrow = {
  getUniqPositions(assembledElems, selectedElems) {
  if (!Array.isArray(assembledElems)) assembledElems = Array.from(assembledElems);
  if (!Array.isArray(selectedElems)) selectedElems = Array.from(selectedElems);
    let sequencePosition = 0;
    return selectedElems.map((elem) => {
      let receivedPosition = assembledElems.indexOf(elem, sequencePosition);
      sequencePosition = receivedPosition + 1;
      return receivedPosition;
    });
  },

  controlValue(current) {
    return [
      function() {
        return current;
      },
      function(value) {
        current = value;
        return current
      },
    ];
  }
}

  export {passthrow};