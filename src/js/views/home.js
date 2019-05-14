export default class HomeView
{
    setbannerHtml(bannersData)
    {
        var bannerTemplate = require('../../templates/banners-slider.hbs');
        var bannersSelector = document.getElementById('banner-slider');
        bannersSelector.innerHTML= bannerTemplate(bannersData);
    }

    setCategoryHtml(categoriesData)
    {
        var homeCategoryTemplate = require('../../templates/home-product-category.hbs');
        var categoriesSelector = document.getElementById('home-categories');
        categoriesSelector.innerHTML= homeCategoryTemplate(categoriesData);
    }
}