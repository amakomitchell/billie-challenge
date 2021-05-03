import accounting from "accounting";

export const formatMoney = (value) => {
  return accounting.formatMoney(value, {
    symbol: "€",
    decimal: ",",
    thousand: ".",
    precision: 2,
    format: "%s%v",
  });
};
