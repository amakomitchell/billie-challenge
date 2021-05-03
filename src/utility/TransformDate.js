export const transformDate = (date) => {
  const transformedDate = date.replaceAll("-", ".");
  return transformedDate;
};
