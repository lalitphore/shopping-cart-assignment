import HomeView from '../views/home';
import HomeModel from '../models/home';
import ProductModel from '../models/product';
var homeController = (function(){
    const HomeViewObj = new HomeView();
    const HomeModelObj = new HomeModel();
    var slideId , slideIndex;

	function init()
	{
        renderBanners();
        renderProductCategories();
    }
    
    function renderProductCategories()
    {
        let ProductModelObj = new ProductModel();
        let productCategories=ProductModelObj.getCategoryJson();
        productCategories.then(function(response){
            if(response.success==true)
            {
                HomeViewObj.setCategoryHtml(response.data);
            }
        });
    }

    function renderBanners()
    {
        slideId = ["mySlides1"];
        slideIndex = [1];
        const bannersJson = HomeModelObj.getBannersJson();
        bannersJson.then(function(response){            
            HomeViewObj.setbannerHtml(response.data);
        }).then(function(){
            showSlides(1, 0);
            bindSliderEvents();
        });
    }

    function bindSliderEvents()
    {
        document.getElementById('banner-slider').addEventListener('click', function (event) {
            if (event.target.matches('.next-slide-button')) {
                plusSlides(1, 0);
            }
            if (event.target.matches('.prev-slide-button')) {
                plusSlides(-1, 0);
            }
            if (event.target.matches('.slider-dot')) {
                var key = parseInt(event.target.dataset.key);
                gotoslide(key,0);
            }
        });
    }

    function plusSlides(n, no) {
        showSlides(slideIndex[no] += n, no);
    }

    function gotoslide(n, no){
        n=n+1;
        showSlides(slideIndex[no] = n, no);
    }

    function showSlides(n, no) {
        var i;
        var x = document.getElementsByClassName(slideId[no]);
        
        if (n > x.length) {slideIndex[no] = 1}    
        if (n < 1) {slideIndex[no] = x.length}
        for (i = 0; i < x.length; i++) {
            x[i].classList.add('hidden');
            document.querySelector('[data-key="'+i+'"]').classList.remove('active');
        }
        x[slideIndex[no]-1].classList.remove('hidden');  
        document.querySelector('[data-key="'+(slideIndex[no]-1)+'"]').classList.add('active');  
    }
    
	return{
		init
	}
})();
export default homeController;