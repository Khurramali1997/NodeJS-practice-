const input1 = document.querySelector("input[name]");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const output = document.querySelector(".output");
const endpoint = "/users";
//To make sure that DOM is loded before all the event listners are fired up
document.addEventListener("DOMContentLoaded", function () {
  //btn1 event listner
  btn1.addEventListener("click", () => {
    console.log("Post");
    const data = { name: input1.value };
    fetch(endpoint, {
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

  function createOutput(data) {
    output.innerHTML = "<div>Users</div>";
    data.forEach((element) => {
      console.log(element);
      const div = document.createElement("div");
      const myInput = document.createElement("input");
      myInput.setAttribute("type", "text");
      myInput.value = element.name;
      div.append(myInput);
      const span1 = document.createElement("span");
      span1.textContent = element._id;
      div.append(span1);

      const button1 = document.createElement("button");
      button1.textContent = "Delete";
      button1.addEventListener("click", () => {
        console.log("DELETE");
      });
      div.append(button1);

      const button2 = document.createElement("button");
      button2.textContent = "Update";
      button2.addEventListener("click", () => {
        console.log("PUT");
      });
      div.append(button2);

      output.append(div);
    });
  }

  //btn2 event listner
  btn2.addEventListener("click", () => {
    console.log("get");
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        createOutput(data);
      });
  });
});
