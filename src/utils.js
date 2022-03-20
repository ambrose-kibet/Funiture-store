export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
  return newNumber;
};
export const getUniqueValues = (all_products, filter) => {
  let unique = all_products.map((p) => p[filter]);
  if (filter === "colors") {
    unique = unique.flat();
  }
  unique = new Set(unique);

  return ["all", ...unique];
};
