export const SPACE = /\s/g;

export const sanitizeCountryVal = (val) => {
  let dashValue = '';

  if (val) dashValue = val.replace(SPACE, '-').toLowerCase();

  return dashValue;
};
