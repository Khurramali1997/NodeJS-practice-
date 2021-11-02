const btn = document.querySelector(".btn1");
const user = document.querySelector(".user").value;
const myId = document.querySelector(".id").value;
//console.log(btn);

document.addEventListener("DOMContentLoaded", function () {
  btn.addEventListener("click", () => {
    console.log("clicked");
    const endpoint = "/users";
    const id = myId;
    fetch(endpoint + "/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    fetch(endpoint + "/" + id, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    fetch(endpoint + "/" + id, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  });

  //the event
});
