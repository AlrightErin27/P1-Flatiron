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
  "Pup Tart",
  "Ricky Bobby",
  "Chew-Barka",
  "Bark Twain",
  "White Castle",
  "Homer",
  "Kimmy",
  "Grits",
  "Lady",
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
//get info from local API file db.json
const localDogAPI = "http://localhost:3000/dogs";
const userProfileDiv = document.querySelector("#friendsDiv");

fetch(localDogAPI)
  .then((res) => res.json())
  .then(renderLocalDogs)
  .catch((error) => console.log("😬", error));

//create form to input user's info

//--------------🦴 🦴 🦴 Friends Section 🦴 🦴 🦴--------------//
//fxn to render dogs from local db
function renderLocalDogs(dogs) {
  dogs.forEach(displayDog);
}
function displayDog(dog) {
  //creating individual local dog cards
  const localDogCard = document.createElement("div");
  localDogCard.setAttribute("id", `${dog.id}`);
  localDogCard.setAttribute("class", "localDogCard");
  //adding local dog image
  const localDogImg = document.createElement("img");
  localDogImg.src = dog.image;
  localDogImg.alt = dog.image;
  localDogImg.setAttribute("class", "localDogPics");
  //adding local dog captions
  const localDogCaption = document.createElement("p");
  localDogCaption.innerHTML = dog.caption;
  //adding local dog name
  const localDogName = document.createElement("h3");
  localDogName.innerHTML = dog.name;
  //adding dog breed
  const localDogBreed = document.createElement("p");
  localDogBreed.innerHTML = dog.breed;
  //adding local dog likes
  const localDogLikes = document.createElement("button");
  localDogLikes.innerHTML = `Likes: ${dog.likes}`;

  friendsDiv.append(localDogCard);
  localDogCard.append(
    localDogImg,
    localDogCaption,
    localDogName,
    localDogBreed,
    localDogLikes
  );
}
