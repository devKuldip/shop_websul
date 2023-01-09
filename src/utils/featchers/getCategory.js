 export const allCategoryTypes = (products) =>{
    const category = products.map(product => product.category)
    const categories = [...new Set(category)]
    return categories;
 }