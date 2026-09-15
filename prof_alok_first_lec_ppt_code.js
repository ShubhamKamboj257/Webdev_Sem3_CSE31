const form = document.querySelector("#studentForm");

form.addEventListener("submit", (event) => {

event.preventDefault();

const name = document.querySelector("name").value;

const email = document.querySelector("#email").value;

console.log(name, email);

});



form.addEventListener("submit", (event) => {

event.preventDefault();

const name = document.querySelector("name").value.trim();

if (name === "") {

alert("Name is required");

return;
}

alert("Form submitted successfully!");

});