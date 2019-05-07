$(function(){
    var currentPage=window.location.pathname;
    currentPage=currentPage.split('/');
    currentPage=currentPage[currentPage.length-1];
    switch(currentPage)
    {
        case "products.html":
            
        break;

        case "index.html":
            var ourRequest = new XMLHttpRequest();
            ourRequest.open('GET','https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/server/banners/index.get.json');
            ourRequest.onload = function(){
                if(ourRequest.status>=200 && ourRequest.status < 400)
                {
                    var data = JSON.parse(ourRequest.responseText);
                    createBannersHtml(data);
                }
                else
                {
                    console.log('We Connected to the server, but it returned an error');
                }
            };
        
            ourRequest.onerror = function(){
                console.log("Connection error");
            }
            ourRequest.send();
        break;
    }
    

    function createCategoryHtml(categoriesData)
    {
        
    }
    function createProductsHtml(productsData)
    {
        
    }
    function createBannersHtml(bannersData)
    {
        
    }
});