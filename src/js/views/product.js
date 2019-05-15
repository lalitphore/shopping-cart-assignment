export default class ProductView
{
    setHtmlGrid(productsData)
    {
        var productSelector = document.getElementById('products-grid');
        if(productsData.length)
        {
            var productTemplate = require('../../templates/product-grid.hbs');
            productSelector.innerHTML= productTemplate(productsData);
        }
        else
        {
            productSelector.innerHTML='Products not found ...';
        }
    }

    setCategoryHtml(categoriesData)
    {
        var categoryTemplate = require('../../templates/product-categories.hbs');
        var categorySelector = document.getElementById('product-categories');
        categorySelector.innerHTML= categoryTemplate(categoriesData);
    }
}