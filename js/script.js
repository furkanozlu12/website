const SearchForm =document.querySelector(".search-form");

//! buttons
const searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click",function(){
    SearchForm.classList.toggle("active")
    document.addEventListener("click",function(e){
        if(!e.composedPath().includes(searchBtn)&& !e.composedPath().includes(searchBtn)
        ){
            SearchForm.classList.remove("active");
        }

    })
})
