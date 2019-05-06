class productModel {
    get()
    {
        var ourRequest = new XMLHttpRequest();
        ourRequest.open('GET','https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/server/products/index.get.json');
        ourRequest.onload = function(){
            if(ourRequest.status>=200 && ourRequest.status < 400)
            {
                var data = JSON.parse(ourRequest.responseText);
                return {'success':true,'data':data,'error_code':100};
            }
            else
            {
                return {'success':false,'data':'We Connected to the server, but it returned an error','error_code':101};
            }
        };
    
        ourRequest.onerror = function(){
            return {'success':false,'data':'Connection error','error_code':403};
        }
        ourRequest.send();
    }
}