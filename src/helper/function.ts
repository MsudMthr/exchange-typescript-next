const fixedOrFloorNum = (number: number): number => {
  // return +number.toLocaleString()
  if (number < 1) {
    return +number.toFixed(7);
  } else {
    return +number.toFixed(3);
  }
};

export { fixedOrFloorNum };
