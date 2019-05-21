export default class HomeModel 
{
    getBannersJson()
    {
        return fetch('http://localhost:3030/home_banners')
        .then(response => response.json())
        .then((data) => { return {"success":true,"data":data,"error_code":"100"}; });
    }
}