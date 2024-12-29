const Calculator = function () {
  const add = function (a, b) {
    if (!a || !b)
      throw new Error('The add menthod expects tow arguments.')
    return a + b
  };

  // return {
  //   add: add
  // };

  const muiltiple = function (a, b) {
    if (!a || !b)
      throw new Error('The muiltiple menthod expects tow arguments.')
    return a * b
  };

  return {
    add: add,
    muiltiple: muiltiple
  };
}