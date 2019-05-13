export default class ProductView
{
    setHtmlGrid(productsData)
    {
        var productTemplate = require('../../templates/product-grid.hbs');
        var productSelector = document.getElementById('products-grid');
        productSelector.innerHTML= productTemplate(productsData);
    }

    setCategoryHtml(categoriesData)
    {
        var categoryTemplate = require('../../templates/product-categories.hbs');
        var categorySelector = document.getElementById('product-categories');
        categorySelector.innerHTML= categoryTemplate(categoriesData);
    }
}