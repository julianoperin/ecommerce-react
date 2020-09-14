// helper functions
export function featuredProducts(data) {
  //Products on sale
  return data.filter((item) => {
    return item.featured === true;
  });
}
