import ProductModel from '../models/product';
import ProductView from '../views/product';
import cartController from './cart';

var productController = (function(){
  const productModelObj = new ProductModel();
  const ProductViewObj = new ProductView();
  
	function init()
	{
        let categoryId = '';
        if(window.location.hash.split('/')[1]){ categoryId = window.location.hash.split('/')[1]; }
        renderProductsGrid(categoryId);
        renderProductCategories(categoryId);

        document.getElementById('products-grid').addEventListener('click',buynowListner,false);

  }

  function buynowListner(event){
    if (event.target.matches('.add-to-cart')) {
			const product = event.target.closest('.plp-container__products__item').dataset;
			cartController.buyNow(product);
		}
  }

  function manageCategoryAccordion(){
    let listItems,checkActive;
    listItems = document.querySelectorAll('.plp-container__sidebar__categories > li');
    manageListItems(listItems,'none');
    document.getElementById("mobile-accordion-icon").addEventListener('click',categoryAccordionListner);
  }
  
  function categoryAccordionListner()
  {
    let listItems,mobileIcon;
    mobileIcon = document.getElementById("mobile-accordion-icon");
    listItems = document.querySelectorAll('.plp-container__sidebar__categories > li');
    
    if(mobileIcon.classList.contains('nav-open'))
    {
        mobileIcon.classList.remove("nav-open");
        mobileIcon.children[0].classList.add('down-arrow-icon');
        mobileIcon.children[0].classList.remove('up-arrow-icon');
        manageListItems(listItems,'none');
    }
    else
    {
        mobileIcon.children[0].classList.remove('down-arrow-icon');
        mobileIcon.children[0].classList.add('up-arrow-icon');
        mobileIcon.classList.add("nav-open");
        manageListItems(listItems,'block');
    }
  }

  function manageListItems(listItems,type){
      let checkActive=false;
      for(var i = 0; i < listItems.length; i++) {
        if(!listItems[i].classList.contains('active')){
          listItems[i].style.display = type;
        }else{
          checkActive=true;
        }
    }
    if(!checkActive){ listItems[0].style.display = "block"; }
  }

  function renderProductsGrid(categoryId)
  {
    let productsJson = productModelObj.getJson(categoryId);
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

  function renderProductCategories(categoryId)
  {
      var productsCategoryJson = productModelObj.getCategoryJson(categoryId);
      productsCategoryJson.then(function(response){
          if(response.success==true)
          {
            ProductViewObj.setCategoryHtml(response.data);
            if(window.getComputedStyle(document.getElementById('mobile-accordion-icon')).display!='none')
            {
              manageCategoryAccordion(); 
            }
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