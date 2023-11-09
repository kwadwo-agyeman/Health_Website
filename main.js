// show nav-details eg. For Patients and Visitor
const navFilters = document.querySelectorAll(".nav--filter");
const navDetailCards = document.querySelectorAll(".detail-card");
const navDetailsContainer = document.querySelector(".nav--details--container");

navFilters.forEach((navFilter) => {
  navFilter.addEventListener("click", (e) => {
    const id = e.currentTarget.dataset.id;

    // Remove "active" class from all navFilters
    navFilters.forEach((filter) => {
      filter.classList.remove("active");
    });

    // Add "active" class to the clicked navFilter
    e.currentTarget.classList.add("active");

    // Hide all detail-cards
    navDetailCards.forEach((card) => {
      card.classList.remove("active");
    });

    // Show the detail-card corresponding to the clicked navFilter
    const activeCard = document.getElementById(id);
    activeCard.classList.add("active");
    navDetailsContainer.style.transform = "translateY(0)";
  });
});
//close nav-details
const closeNavDetails = document.querySelectorAll(".close--nav--details");
closeNavDetails.forEach((closeNavDetail) => {
  closeNavDetail.addEventListener("click", () => {
    navFilters.forEach((navFilter) => {
      navFilter.classList.remove("active");
    });
    // navDetailCards.forEach((navDetailCard) => {
    // navDetailCard.style.transform = "translateY(-500px)"
    //});
    navDetailsContainer.style.transform = "translateY(-100%)";
  });
});
//change nav appearance when you scroll past 0
/*const nav = document.querySelector(".nav");
window.addEventListener('scroll',()=>{
  if(window.scrollY > 0){
    nav.style.background = "rgb(0, 128, 255,0.6)"
  }else{
    nav.style.background = "#007fff"
  }
})*/
