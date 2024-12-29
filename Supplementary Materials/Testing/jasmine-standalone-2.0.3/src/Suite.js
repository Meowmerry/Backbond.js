const Suite = function () {
  const muiltiple = function (a, b) {
    if (!a || !b)
      throw new Error('The muiltiple menthod expects tow arguments.')
    return a * b
  };

  return {
    muiltiple: muiltiple
  };
}