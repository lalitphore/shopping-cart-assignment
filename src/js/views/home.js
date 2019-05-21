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
        for(let m = 0 ; m < categoriesData.length ; m++){
            if(categoriesData[m]['enabled']==false){
                delete categoriesData[m];
            }
        }
        categoriesSelector.innerHTML= homeCategoryTemplate(categoriesData);
    }
}