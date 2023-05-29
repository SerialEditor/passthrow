function getSelectedElemPositions(assembledElems, selectedElems) {
    let [assembledElemsArray, selectedElemsArray] = [
      [...assembledElems],
      [...selectedElems],
    ];
    let sequencePosition = 0;
    return selectedElemsArray.map((elem) => {
      let receivedPosition = assembledElemsArray.indexOf(elem, sequencePosition);
      sequencePosition = receivedPosition + 1;
      return receivedPosition;
    });
  }
  
  function getCurrentValueControlFunctions(current) {
    return [
      function () {
        return current;
      },
      function (value) {
        current = value;
      },
    ];
  }

  export {getSelectedElemPositions, getCurrentValueControlFunctions};