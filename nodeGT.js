let count = 0;
let val = () => {
  console.log("Khurrum Ali");
};

let val2 = () => {
  console.log("Khurrum Ali Rocks");
};

let val3 = () => {
  count++;
  if (count >= 5) {
    console.log("Interval ends here");
    clearInterval(val4);
  }
  console.log("Khurrum Ali Rocks and is really awesole counter = " + count);
};

let val4 = setInterval(val3, 10000);
val();
val2();
val3();
for (let i = 0; i < 25; i++) console.log("value is " + i);
setImmediate(() => {
  console.log("The timeout is here and the event loop ends here");
});

a = document.images;
Array.from(a).foreach(function (elements) {
  console.log(elements);
});
