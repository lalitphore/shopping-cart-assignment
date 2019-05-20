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
          document.getElementById("mobile-accordion-icon").removeEventListener("click",categpryAccordionListners(1));
          document.getElementById("mobile-accordion-icon").addEventListener("click",categpryAccordionListners(1));
      }
  }

  function categpryAccordionListners(t){
    var listItems = document.querySelectorAll('.plp-container__sidebar__categories > li');
    var that = document.getElementById("mobile-accordion-icon");
    if(document.getElementById("mobile-accordion-icon").classList.contains('nav-open'))
    {
        for(var i = 0; i < listItems.length; i++) {
            listItems[i].style.display = "none";
        }
        var activeLi = document.querySelectorAll('.plp-container__sidebar__categories > li.active');
        if(activeLi.length){ activeLi[0].style.display="block"; }
        that.classList.remove("nav-open");
        that.children[0].classList.add('down-arrow-icon');
        that.children[0].classList.remove('up-arrow-icon');
    }
    else
    {
        for(var i = 0; i < listItems.length; i++) {
            listItems[i].style.display = "block";
        }
        that.children[0].classList.remove('down-arrow-icon');
        that.children[0].classList.add('up-arrow-icon');
        that.classList.add("nav-open");
    } 
  }

  function renderCategoryProductsGrid(e)
  {
    let categoryId = e.currentTarget.dataset.key;
    var productCategories = document.getElementsByClassName('product-category');
    Array.from(productCategories).forEach(link => {
      link.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
    if(window.getComputedStyle(document.getElementById('mobile-accordion-icon')).display!='none'){ categpryAccordionListners(2); }
    let productsJson = productModelObj.getJson();
    productsJson.then(function(response){
          if(response.success==true)
          {
            let categoryProducts = [];
            for(let k = 0 ; k < response.data.length ; k++)
            {
                if(response.data[k].category==categoryId){
                  categoryProducts.push(response.data[k]);
                }
            }
            ProductViewObj.setHtmlGrid(categoryProducts);
          }
          else
          {
            console.log('PRODUCTS DATA',response.data);
          }
    });
  }
  
  function renderProductsGrid()
  {
    let productsJson = productModelObj.getJson();
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
            var productCategories = document.querySelectorAll('.product-category');
              Array.from(productCategories).forEach(link => {
                  link.addEventListener('click',renderCategoryProductsGrid);
              });
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