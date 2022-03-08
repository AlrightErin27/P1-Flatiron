document.addEventListener("DOMContentLoaded", () => {
  //console.log("Reading loud and clear! 📻");

  //--------------GOODEST DOG SECTION----------------------//
  //grabbing html el to add pic to later
  const imgRandom = document.querySelector("#imgRandom");
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
  //code to pick randomly from above array
  const randomDogName =
    dogNameArr[Math.floor(Math.random() * dogNameArr.length)];

  //add random dog name to text on page
  document.querySelector(
    "#random-dog-name"
  ).innerHTML = `${randomDogName} is the GOODEST DOG OF THE DAY!!!`;

  function getRandomImg() {
    const dogAPI = "https://dog.ceo/api/breeds/image/random";
    fetch(dogAPI)
      .then((res) => res.json())
      .then(function (json) {
        //console.log(json);
        const imageUrl = json.message;
        imgRandom.src = imageUrl;
      })
      .catch((err) => console.log("ERROR️‍🔥:", err));
  }
  getRandomImg();
  //-----------------------------------------------------//
});
