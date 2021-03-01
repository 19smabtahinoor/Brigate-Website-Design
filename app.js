//find the html elements
let headerTarget = document.querySelector(".homeslider");
let headingTextHomeSlider = document.querySelector(".headingTextHomeSlider");
let primaryMenu = document.querySelector(".primarymenu");
let threeLineMenu = document.querySelector(".threeLine");
let crossIcon = document.querySelector(".fa-times");
let sideBar = document.querySelector(".sidebar");
//next button
document.querySelector(".nextBtn").addEventListener("click", () => {
    headerTarget.style.backgroundImage = "url(images/slide-2.jpg)";
    headerTarget.style.transition = "0.6s";
    headingTextHomeSlider.innerHTML = "Work is very essential for us";
})

//previous button
document.querySelector(".previousBtn").addEventListener("click", () => {
    headerTarget.style.backgroundImage = "url(images/slide1.jpg)";
    headerTarget.style.transition = "0.6s";
    headingTextHomeSlider.innerHTML = "Experience Is Better Way To Build Success";
})


//side bar 
threeLineMenu.addEventListener("click",showSideBar);
function showSideBar(){
    sideBar.style.left="0px";
    sideBar.style.transition="0.8s";
    sideBar.style.opacity="1";
}

//hide side bar
crossIcon.addEventListener("click",hideSideBar);
function hideSideBar(){
    sideBar.style.left="-270px";
    sideBar.style.transition="0.8s";
    sideBar.style.opacity="0";
}