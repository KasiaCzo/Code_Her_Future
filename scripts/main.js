// function helloWorld(name) {
//     console.log("Dzien dbry w niedziele " + name);
//   }
//   helloWorld("Kasia");
function mobileMenu() {
    let mobileMenuIcon = document.getElementById("mobile_menu_icon");
    console.log(mobileMenuIcon);
    let menu = document.getElementById("main_menu");
    console.log(menu);
    
    if (mobileMenuIcon) {
        mobileMenuIcon.addEventListener("click", function(){
            menu.classList.toggle("opened");
            mobileMenuIcon.classList.toggle("opened");
        })
    }



}
mobileMenu()