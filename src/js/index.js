//variables
const dropdownBtn = document.querySelector(".dropbtn");
const dropdownContent = document.querySelector(".dropdown-content");
const dashboards = document.getElementById("dashboards");
const minimal = document.getElementById("minimal");
const dashboardsToggle = document.querySelector(".dashboards-toggle");
const minimalToggle = document.querySelector(".minimal-toggle");






dropdownBtn.addEventListener("click", function () {
  dropdownContent.classList.toggle("show");
});



dashboardsToggle.addEventListener("click", function () {
  dashboards.classList.toggle("hide");
});

minimalToggle.addEventListener("click", function () {
  minimal.classList.toggle("hide");
});

console.log(minimal.parentElement);