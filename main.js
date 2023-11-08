// show nav-details eg. For Patients and Visitor

const navFilters = document.querySelectorAll(".nav--filter");
const navDetailCards = document.querySelectorAll(".detail-card");

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
    const activeCard = document.getElementById(id)
    activeCard.classList.add("active");
  });
});

