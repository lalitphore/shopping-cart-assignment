export default class productModel {
    getJson(categoryId="")
    {
        return new Promise(function(resolve, reject) {
            var ourRequest = new XMLHttpRequest();
            ourRequest.open('GET','http://localhost:3030/products?categoryId='+categoryId);
            ourRequest.onload = function(){
                if(ourRequest.status>=200 && ourRequest.status < 400)
                {
                    var data = JSON.parse(ourRequest.responseText);
                    resolve({"success":true,"data":data,"error_code":"100"});
                }
                else
                {
                    resolve({"success":false,"data":"We Connected to the server, but it returned an error","error_code":"101"});
                }
            };
        
            ourRequest.onerror = function(){
                resolve({"success":false,"data":"Connection error","error_code":"403"});
            }
            ourRequest.send();
        });
        
    }

    getCategoryJson()
    {
        return new Promise(function(resolve, reject) {
            var ourRequest = new XMLHttpRequest();
            ourRequest.open('GET','http://localhost:3030/categories');
            ourRequest.onload = function(){
                if(ourRequest.status>=200 && ourRequest.status < 400)
                {
                    var data = JSON.parse(ourRequest.responseText);
                    resolve({"success":true,"data":data,"error_code":"100"});
                }
                else
                {
                    console.log('');
                    resolve({"success":false,"data":"We Connected to the server, but it returned an error","error_code":"101"});
                }
            };
        
            ourRequest.onerror = function(){
                resolve({"success":false,"data":"Connection error","error_code":"403"});
            }
            ourRequest.send();
        })
    }
}