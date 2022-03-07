document.addEventListener("DOMContentLoaded", () => {
  //console.log("Reading loud and clear! 📻");

  const imgRandom = document.querySelector("#imgRandom");

  function getRandomImg() {
    const dogAPI = "https://dog.ceo/api/breeds/image/random";

    fetch(dogAPI)
      .then((res) => res.json())
      .then(function (json) {
        console.log(json);
        const imageUrl = json.message;
        imgRandom.src = imageUrl;
      })
      .catch((err) => console.log("ERROR️‍🔥:", err));
  }
  getRandomImg();
});
