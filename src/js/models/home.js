export default class HomeModel 
{
    getBannersJson()
    {
        return fetch('https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/server/banners/index.get.json')
        .then(response => response.json())
        .then((data) => { return {"success":true,"data":data,"error_code":"100"}; });
    }
}