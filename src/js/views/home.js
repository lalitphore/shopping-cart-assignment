export default class HomeView
{
    setbannerHtml(bannersData)
    {
        var bannerTemplate = require('../../templates/banners-slider.hbs');
        var bannersSelector = document.getElementById('banner-slider');
        bannersSelector.innerHTML= bannerTemplate(bannersData);
    }
}