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
    navDetailsContainer.style.transform = "translateY(-100%)";
  });
});
/// JS for tablet media queries
const navMenu = document.querySelector(".nav--menu");
const menuBar = document.getElementById("menu--bar");
const closeMenu = document.getElementById("close--menu");
const toggleContainer = document.querySelector(".toggle--nav");

menuBar.addEventListener("click", () => {
  toggleContainer.style.background = "#007fff";
  navMenu.style.transform = "translateX(0)";
  menuBar.style.display = "none";
  closeMenu.style.display = "block";
});
closeMenu.addEventListener("click", () => {
  toggleContainer.style.background = "transparent";
  navMenu.style.transform = "translateX(100%)";
  menuBar.style.display = "block";
  closeMenu.style.display = "none";
});
// toggle the appearance of search abr on small screens

const searchBar = document.querySelector(".search");
const navSearch = document.querySelector(".nav--search--icon");

navSearch.addEventListener("click", () => {
  searchBar.classList.toggle("display--search--bar");
});

// location tabs.....
const tabFilters = document.querySelectorAll(".tab--filter");
const tabCards = document.querySelectorAll(".tabs--card");

tabFilters.forEach((tabFilter) => {
  tabFilter.addEventListener("click", (e) => {
    const Id = e.currentTarget.dataset.id;

    tabFilters.forEach((tabFilter) => {
      tabFilter.classList.remove("active");
    });
    e.currentTarget.classList.add("active")

    tabCards.forEach((tabCard)=>{
      tabCard.classList.remove("active")
    })

    const ActiveLocationCard = document.getElementById(Id)
    ActiveLocationCard.classList.add("active")
  });
});
