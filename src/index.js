//--------------🦴 🦴 🦴 Goodest Dog of the Day Section 🦴 🦴 🦴--------------//
//create var for html el to insert random pic from dog API into
const imgRandom = document.querySelector("#imgRandom");

//array of dog names that can be dog of the day
const dogNameArr = [
  "Toby",
  "Oprah",
  "Axel",
  "Pumpkin",
  "Grandpa",
  "Roscoe",
  "Kelly",
  "Luna",
  "Bella",
  "Bandit",
  "Smokey",
  "Max",
  "Bob Barker",
];

//var where random generated dog name is stored
const randomDogName = dogNameArr[Math.floor(Math.random() * dogNameArr.length)];

//add random dog name to text on page in caps
document.querySelector(
  "#randomDogName"
).innerHTML = `${randomDogName.toUpperCase()} is today's Goodest Dog!`;

//fetch from dog.ceo dog API to grab random photo to insert into HTML
function getRandomImgDay() {
  const dogAPI = "https://dog.ceo/api/breeds/image/random";
  fetch(dogAPI)
    .then((res) => res.json())
    .then(function (json) {
      const imageUrl = json.message;
      imgRandom.src = imageUrl;
    })
    .catch((err) => console.log("ERROR️‍🔥:", err));
}
getRandomImgDay();
//--------------🦴 🦴 🦴 User Profile Section 🦴 🦴 🦴--------------//
//--------------🦴 🦴 🦴 Friends Section 🦴 🦴 🦴--------------//
