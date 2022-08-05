const fixedOrFloorNum = (number: number): number => {
  if (number < 1) {
    return +number.toFixed(7);
  } else {
    return +Math.floor(number).toFixed(3);
  }
};

export { fixedOrFloorNum };
