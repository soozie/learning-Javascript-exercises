let orderCount = 0
const takeOrder = (topping, crustType) => {
  console.log(`Order: ${crustType} pizza topped with ${topping}`);
  orderCount ++;
};
const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};

const getTax = (orderCount) => {
  return getSubTotal(orderCount) * 0.06;
};

const getTotal = () => {
  return getSubTotal(orderCount) + getTax(orderCount);
};

takeOrder('mushrooms', 'thick crust');
takeOrder('tomato', 'thin crust');
takeOrder('bacon', 'flatbread crust');
console.log(getSubTotal(orderCount));
console.log(getTotal());
