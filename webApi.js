fetch("https://api.gameofthronesquotes.xyz/v1/random", { method: "GET" })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.sentence);
  })
  .catch((error) => {
    console.log(error);
  });
