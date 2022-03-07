document.addEventListener("DOMContentLoaded", () => {
  console.log("Reading loud and clear! 📻");

  //fetch from Dog API (https://dog.ceo/dog-api/?ref=apilist.fun)
  const dogAPI = "https://dog.ceo/api/breeds/image/random";
  fetch(dogAPI)
    .then((res) => res.json())
    .catch((err) => console.log("ERROR️‍🔥:", err));

  function renderDogs(dogsArray) {
    dogsArray.forEach(displayDog);
  }
  function displayDog(dog) {
    let img = document.createElement("img");
  }
});
