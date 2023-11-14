/////
const doctors = [
  {
    name: "lois agyemang",
    specialty: "gastroenterology",
    condition: "abdominal-pain",
    img: "./images/doc1f.jpg",
    location: "baltimore-city",
    gender: "female",
    language: "arabic",
  },
  {
    name: "john smith",
    specialty: "cardiology",
    condition: "back-pain",
    img: "./images/doc2m.jpg",
    location: "ellicot-city",
    gender: "male",
    language: "spanish",
  },
  {
    name: "erica opoku",
    specialty: "neurology",
    condition: "migraine",
    img: "./images/doc3f.jpg",
    location: "columbia",
    gender: "female",
    language: "english",
  },
  {
    name: "emily adwoa",
    specialty: "gastroenterology",
    condition: "abdominal-pain",
    img: "./images/doc5f.jpg",
    location: "baltimore-city",
    gender: "female",
    language: "english",
  },
  {
    name: "philip aqua",
    specialty: "cardiology",
    condition: "back-pain",
    img: "./images/doc4m.jpg",
    location: "baltimore-city",
    gender: "male",
    language: "english",
  },
  {
    name: "fin ash",
    specialty: "neurology",
    condition: "migraine",
    img: "./images/doc6m.jpg",
    location: "ellicot-city",
    gender: "male",
    language: "spanish",
  },
  {
    name: "august plea",
    specialty: "neurology",
    condition: "migraine",
    img: "./images/doc8m.jpg",
    location: "baltimore-city",
    gender: "male",
    language: "spanish",
  },
  {
    name: "samuel agyemang",
    specialty: "cardiology",
    condition: "back-pain",
    img: "./images/doc9m.jpg",
    location: "ellicot-city",
    gender: "male",
    language: "english",
  },
  {
    name: "gloria boahen",
    specialty: "gastroenterology",
    condition: "abdominal-pain",
    img: "./images/doc7f.jpg",
    location: "columbia",
    gender: "female",
    language: "spanish",
  },
  {
    name: "destine owura",
    specialty: "gastroenterology",
    condition: "abdominal-pain",
    img: "./images/doc10m.jpg",
    location: "columbia",
    gender: "male",
    language: "english",
  },
  {
    name: "louisa kodie",
    specialty: "cardiology",
    condition: "back-pain",
    img: "./images/doc12f.jpg",
    location: "baltimore-city",
    gender: "female",
    language: "english",
  },
  {
    name: "emmanuel parker",
    specialty: "neurology",
    condition: "migraine",
    img: "./images/doc11m.jpg",
    location: "ellicot-city",
    gender: "male",
    language: "spanish",
  },
];

/* ***************** FIND A DOCTOR ********************** */
/* **************** TOGGLE ADVANCED OPTIONS ******************* */

const advancedContainer = document.querySelector(".advanced--hide--show");
const openAdvance = document.querySelector(".open--advanced");
const closeAdvance = document.querySelector(".close--advanced");

openAdvance.addEventListener("click", () => {
  advancedContainer.classList.add("show--advanced");
  openAdvance.style.display = "none";
  closeAdvance.style.display = "inline-block";
});

closeAdvance.addEventListener("click", () => {
  advancedContainer.classList.remove("show--advanced");
  openAdvance.style.display = "block";
  closeAdvance.style.display = "none";
});

/////////
/*
const searchDoctor = document.querySelector(".submit--doctor");
searchDoctor.addEventListener('click',()=>{
  const language = document.getElementById("language").value;
  console.log(language);
}); 
*/
/// Doctor Cards
const doctorsContainer = document.querySelector(".doctors--card--container");
const alertMessageText = document.getElementById("alert--number--doctor");
const alertMessageContainer = document.querySelector(".alert--number--doctor");
const searchDoctor = document.querySelector(".submit--doctor");

window.addEventListener("DOMContentLoaded", () => {
  displayDoctorArr(doctors);
});

searchDoctor.addEventListener("click", () => {
  const gender = document.getElementById("gender");
  const docLocation = document.getElementById("doctor--location");
  const physician = document.getElementById("physician--name");
  const specialty = document.getElementById("specialty");
  const language = document.getElementById("language");

  const filterDoctorArr = doctors.filter((item) => {
    if (item.language === language.value) {
      return item;
    } else if (item.gender === gender.value) {
      return item;
    } else if (item.location === docLocation.value) {
      return item;
    } else if (item.name === physician.value) {
      return item;
    } else if (item.specialty === specialty.value) {
      return item;
    }
  });
  displayDoctorArr(filterDoctorArr);
  if (filterDoctorArr.length > 0) {
    alertMessageContainer.style.display = "block";
    alertMessage(
      `${filterDoctorArr.length} results found`,
      "rgb(126, 222, 126)"
    );
  } else {
    alertMessageContainer.style.display = "block";
    alertMessage(`0 results found`, "rgb(241, 112, 112)");
  }
});

const alertMessage = (text, color) => {
    alertMessageText.innerHTML = text;
    alertMessageContainer.style.background = color;
  
    // Show the alert container
    alertMessageContainer.style.opacity = 1;
    alertMessageContainer.style.height = "auto"; // Set to "auto" to allow content to determine height
  
    // Clear the alert after a certain time (e.g., 3 seconds)
    setTimeout(() => {
      alertMessageContainer.style.opacity = 0;
      alertMessageContainer.style.height = 0;
    }, 3000);
  };
  
  
const displayDoctorArr = (specificArr) => {
  const displayDoctors = specificArr
    .map((doctor) => {
      return `
        <article class="doctor--card">
          <div class="doctor--card--image">
            <img src=${doctor.img} alt="" />
          </div>

          <div class="doctor--card-detail">
            <div class="doctor--detail--head">
              <h3>${doctor.name}</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
                reprehenderit!
              </p>
            </div>

            <div class="doctor--detail--body">
              <h4>Specialties</h4>
              <p>${doctor.specialty}</p>
            </div>

            <div class="doctor--detail--bottom">
                <h4>Locations</h4>
                <p>${doctor.location},MD</p>
            </div>
          </div>

          <a href="#" class="doctor--card--profile">
            <h5>View Profile</h5>
            <i class="uil uil-arrow-up-right"></i>
          </a>
        </article>`;
    })
    .join("");
  doctorsContainer.innerHTML = displayDoctors;
};
