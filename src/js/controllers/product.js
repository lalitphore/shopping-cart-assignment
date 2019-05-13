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


      /*  Category Accordion */
      if(document.getElementById("mobile-accordion-icon"))
      {
          document.getElementById("mobile-accordion-icon").addEventListener("click",function(){
              var listItems = document.querySelectorAll('.plp-container__sidebar__categories > li');
              if(this.classList.contains('nav-open'))
              {
                  for(var i = 0; i < listItems.length; i++) {
                      listItems[i].style.display = "none";
                  }
                  var activeLi = document.querySelectorAll('.plp-container__sidebar__categories > li.active');
                  activeLi[0].style.display="block";
                  this.classList.remove("nav-open");
                  this.children[0].classList.add('down-arrow-icon');
                  this.children[0].classList.remove('up-arrow-icon');
              }
              else
              {
                  for(var i = 0; i < listItems.length; i++) {
                      listItems[i].style.display = "block";
                  }
                  this.children[0].classList.remove('down-arrow-icon');
                  this.children[0].classList.add('up-arrow-icon');
                  this.classList.add("nav-open");
              }
        });
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