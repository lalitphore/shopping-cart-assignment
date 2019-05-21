export default class HomeModel 
{
    getBannersJson()
    {
        return fetch(window.location.origin+'/home_banners')
        .then(response => response.json())
        .then((data) => { return {"success":true,"data":data,"error_code":"100"}; });
    }
}