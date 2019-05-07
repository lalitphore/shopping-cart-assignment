import ProductModel from '../models/product';
import ProductView from '../views/product';
var productController = (function(){
  const productModelObj = new ProductModel();
  const ProductViewObj = new ProductView();
	function init()
	{
      if(document.getElementById('products-grid'))
      {
        renderProductsGrid();
        renderProductCategories();
      }
  }
  
  function renderProductsGrid()
  {
      var productsJson = productModelObj.getJson();
      productsJson.then(function(response){
          if(response.success==true)
          {
            ProductViewObj.setHtmlGrid(response.data);
          }
          else
          {
            console.log('PRODUCTS DATA',response.data);
          }
    });
  }

  function renderProductCategories()
  {
      var productsCategoryJson = productModelObj.getCategoryJson();
      productsCategoryJson.then(function(response){
          if(response.success==true)
          {
            ProductViewObj.setCategoryHtml(response.data);
          }
          else
          {
            console.log('PRODUCTS CATEGORY DATA',response.data);
          }
    });
  }

	return{
		init
	}
})();
export default productController;