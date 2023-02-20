jQuery(function() {
    jQuery(".allbutton").click(function(){
        jQuery(".single").show();
    });
    jQuery(".button").click(function(){
        jQuery(".single").hide();
        jQuery(".div"+ $(this).attr('target')).show();
    });
});

let nav_link =document.querySelectorAll(".nav-link");
let bodyId = document.querySelector("body").id;
for(let link of nav_link){
    if(link.dataset.active == bodyId){
        link.classList.add("active")
    }
}
