const input = document.getElementsByClassName("text");
const button = document.getElementsByClassName("but");

button[0].addEventListener("click", () => {
  input[0].value = "Loading....";
  fetch("https://api.gameofthronesquotes.xyz/v1/random", { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.sentence);
      input[0].value = data.sentence;
    })
    .catch((error) => {
      console.log(error);
      input[0].value = data.sentence;
    });
});
