const getFastDelivered = (items) => items.filter((item) => item.fastDelivery);
const getLowToHigh = (items) => items.sort((a, b) => parseInt(a.price.replace(/,/g,'')) - parseInt(b.price.replace(/,/g,'')));
const getHighToLow = (items) => items.sort((a, b) => parseInt(b.price.replace(/,/g,'')) - parseInt(a.price.replace(/,/g,'')));
const getInStock = (items) => items.filter((item) => item.inStock);
const getMaxPrice = (items, max) => items.filter((item) => item.price <= max);
const getCategoryWise=(items,categories)=>{
    if(categories.length>0)
        return items.filter(item=>categories.includes(item.categoryName))
    
    return items;
};
export {
  getFastDelivered,
  getLowToHigh,
  getHighToLow,
  getInStock,
  getMaxPrice,
  getCategoryWise
};