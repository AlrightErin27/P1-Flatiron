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
  "Tator Tot",
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
const cardContainer = document.querySelector("#cardContainer");

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

  //adding name and likes flexbox container

  const likeNameContainer = document.createElement("div");
  likeNameContainer.setAttribute("class", "likeNameContainer");

  //adding local dog likes
  const localDogLikes = document.createElement("h2");
  localDogLikes.innerHTML = `${dog.likes} Likes`;

  //adding local dog name
  const localDogName = document.createElement("h2");
  const dogName = dog.name;
  localDogName.innerHTML = `@${dogName}`;

  likeNameContainer.append(localDogLikes, localDogName);

  //adding local dog captions
  const localDogCaption = document.createElement("p");
  localDogCaption.innerHTML = dog.caption;

  //barks:
  const barkContainer = document.createElement("div");
  barkContainer.setAttribute("class", "barkContainer");
  const barks = document.createElement("h3");
  barks.setAttribute("class", "bark-section");
  barks.textContent = "Barks:";
  barkContainer.append(barks);

  //bark comments list and container
  const barkComments = document.createElement("p");
  barkComments.textContent = dog.comment;
  barkContainer.append(barkComments);

  cardContainer.append(localDogCard);
  localDogCard.append(
    localDogImg,
    likeNameContainer,
    localDogCaption,
    barkContainer
  );
}
