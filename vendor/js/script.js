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

document.getElementById('login-button').addEventListener("click", function() {
    document.querySelector('.login').style.display = "flex";
});

document.querySelector('.close-login').addEventListener("click", function() {
    document.querySelector('.login').style.display = "none";
});

document.getElementById('signup-button').addEventListener("click", function() {
    document.querySelector('.signup').style.display = "flex";
    
});

document.querySelector('.close-signup').addEventListener("click", function() {
    document.querySelector('.signup').style.display = "none";
});


  