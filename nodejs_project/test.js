import fetch from "node-fetch";

fetch("https://randomuser.me/api/?results=100")
  .then((res) => res.json())
  .then((json) => {
    json.results.forEach((person) => {
      console.log(person.name);
    });
  });
