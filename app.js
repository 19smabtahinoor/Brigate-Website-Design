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




//counting numbers
const countingNumber1 = document.querySelector('.countingNumber1')
const countingNumber2 = document.querySelector('.countingNumber2')
const countingNumber3 = document.querySelector('.countingNumber3')
const countingNumber4 = document.querySelector('.countingNumber4')

//1st number count
let count1 = 0
let count1Interval = setInterval( () =>{
    count1++
    if(count1 >= 1200){
        clearInterval(count1Interval)
    }
    countingNumber1.innerHTML = count1
},0.001)


//2nd number count
let count2 = 0
let count2Interval = setInterval( () =>{
    count2++
    if(count2 >= 2080){
        clearInterval(count2Interval)
    }
    countingNumber2.innerHTML = count2
},0.001)

//3rd number count
let count3 = 0
let count3Interval = setInterval( () =>{
    count3++
    if(count3 >= 4000){
        clearInterval(count3Interval)
    }
    countingNumber3.innerHTML = count3
},0.001)


//4th number count
let count4 = 0
let count4Interval = setInterval( () =>{
    count4++
    if(count4 >= 4000){
        clearInterval(count4Interval)
    }
    countingNumber4.innerHTML = count4
},0.001)





//image popup image
const projectImage = document.querySelector('.projectImage')
const projectImageBackdrop = document.querySelector('.projectImageBackdrop')
const closetextProjectImage = document.querySelector('.closeText')
const ProjectImagePopup = document.querySelector('.projectImagePopup')



projectImage.addEventListener('click',() => {
    ProjectImagePopup.classList.add('projectImagePopupActive')
    projectImageBackdrop.classList.add('projectImageBackdropActive')
})


closetextProjectImage.addEventListener('click',() => {
    ProjectImagePopup.classList.remove('projectImagePopupActive')
    projectImageBackdrop.classList.remove('projectImageBackdropActive')
})



//imagepopup another
const serviceImage = document.querySelectorAll('.serviceimage')
const projectImagePopup1 = document.querySelector('.projectImagePopup1')
const projectImageBackdrop1 = document.querySelector('.projectImageBackdrop1')
const closetextServiceImage = document.querySelector('.closeText1')
const eachImage = document.querySelector('.eachImage')

serviceImage.forEach( (images) => {
    images.addEventListener('click',(ev) => {
        projectImagePopup1.classList.add('projectImagePopup1Active')
        projectImageBackdrop1.classList.add('projectImageBackdrop1Active')
        eachImage.setAttribute("src",ev.target.src)

    })
})

serviceImage.forEach( (images) => {
    closetextServiceImage.addEventListener('click',(ev) => {
        projectImagePopup1.classList.remove('projectImagePopup1Active')
        projectImageBackdrop1.classList.remove('projectImageBackdrop1Active')
        

    })
})