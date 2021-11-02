const btn = document.querySelector(".btn");
const addUser = document.querySelector(".addUser");
const user = document.querySelector(".user");
const output = document.querySelector(".output");
const searchUser = document.querySelector(".searchUser");
const findUser = document.querySelector(".findUser");
const endPoint = "/user";

function createOutput(data) {
  output.innerHTML = "<div>Users In Database</div>";
  data.forEach((element) => {
    console.log(element);
    const main = document.createElement("div");
    const displayOutput = document.createElement("input");
    displayOutput.setAttribute("type", "text");
    displayOutput.value = element.name;
    main.append(displayOutput);

    const deLete = document.createElement("button");
    deLete.textContent = "Delete";
    deLete.addEventListener("click", () => {
      console.log("Delete Clicked");
      fetch(endPoint, {
        method: "delete",
        body: JSON.stringify(element),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.status);
          if (data.status) {
            main.remove();
          }
        });
    });
    main.append(deLete);

    const upDate = document.createElement("button");
    upDate.textContent = "Update";
    upDate.addEventListener("click", () => {
      console.log("Update Clicked");
      element.name = displayOutput.value;
      console.log(element);
      fetch(endPoint, {
        method: "put",
        body: JSON.stringify(element),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    });
    main.append(upDate);

    const span1 = document.createElement("span");
    span1.textContent = element._id;
    main.append(span1);
    output.append(main);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  btn.addEventListener("click", () => {
    console.log("Clicked 'CLICK'");
    fetch(endPoint)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        createOutput(data);
      });
  });
  addUser.addEventListener("click", () => {
    console.log("POST");
    const data = { name: user.value };
    console.log(`{name : ${user.value}}`);
    fetch(endPoint, {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  });

  searchUser.addEventListener("click", () => {
    fetch("/users/" + findUser.value)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        createOutput(data);
      });
  });
});
