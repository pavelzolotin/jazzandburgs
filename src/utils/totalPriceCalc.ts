export const totalPriceCalc = (items) => {
    return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};