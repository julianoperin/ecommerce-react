export default (state, action) => {
  switch (action.type) {
    case "REMOVE":
      return state.filter((item) => item.id !== action.payload);
    case "INCREASE":
      return state.map((item) => {
        return item.id === action.payload
          ? { ...item, amount: item.amount + 1 }
          : { ...item };
      });
    case "DECREASE":
      return;
    case "ADDTOCART":
      return;
    case "CLEARCART":
      return;
  }
  return state;
};
