const btn = document.querySelector(".btn");
const submitbtn = document.querySelector(".submit");
const user = document.querySelector(".user").value;
const id = document.querySelector(".id");
const getjson = document.querySelector(".getjson");
const getuser = document.querySelector(".getuser");
console.log(user + " and " + id);

console.log(btn);

document.addEventListener("DOMContentLoaded", () => {
  btn.addEventListener("click", () => {
    console.log("Clicked");
  });
  getjson.addEventListener("click", () => {
    console.log("Clicked GET JSON");
    fetch("/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data.users.forEach((element) => {
          console.log(element);
        });
      });
  });
  getuser.addEventListener("click", () => {
    console.log("Clicked GET USER");
    fetch(`/users/${id.value}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data.forEach((element) => {
          console.log(element);
        });
      });
  });
});
